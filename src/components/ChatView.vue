<template>
    <div class="chat-container">
      <div class="chat-header">
        <h2>Vue & Vite Chat</h2>
      </div>
      <div class="chat-messages">
        <div
          v-for="(message, index) in conversationHistory"
          :key="index"
          :class="['message', message.role === 'user' ? 'user' : 'ai']"
        >
          <div v-if="message.role !== 'system'" class="message-content">{{ message.content }}</div>
        </div>
      </div>
      <div class="chat-input">
        <label>API Key: </label>
        <input 
            type="password"
            v-model="apiKey"
            placeholder="API Key"
            />
      </div>
      <div class="chat-input">
        <input
          v-model="userInput"
          placeholder="输入你的问题..."
          @keypress.enter="sendMessage"
        />
        <button @click="sendMessage">发送</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  const systemMessage = {
  role: 'system',
  content: '你是Vue3和Vite专家，只回答Vue3和Vite相关的问题。如果用户的问题跟设置的主题不相关，请回复不知道。'
};
  
  const apiKey = ref('');
  const userInput = ref('');
  const conversationHistory = ref([
    systemMessage
  ]);

  
  const sendMessage = async () => {
    if (userInput.value.trim() === '') return;
    if (apiKey.value.trim() === '') return;
  
    // 添加用户消息到对话历史
    conversationHistory.value.push({
      role: 'user',
      content: userInput.value,
    });
  
    // 清空输入框
    const tempInput = userInput.value;
    userInput.value = '';
  
    try {
      // 调用 OpenAI API
      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          // model: 'deepseek/deepseek-v3-base:free',
          model: 'qwen/qwen2.5-vl-3b-instruct:free',
          messages: [
            ...conversationHistory.value,
          ],
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey.value}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      // 添加 OpenAI 回复到对话历史
      conversationHistory.value.push({
        role: 'assistant',
        content: response.data.choices[0].message.content,
      });
    } catch (error) {
      console.error('API 请求错误:', error);
      conversationHistory.value.push({
        role: 'system',
        content: '请求出现错误，请稍后再试。',
      });
    }
  };
  </script>
  
  <style scoped>
  .chat-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .chat-header {
    background-color: #4e8cff;
    color: white;
    padding: 15px;
    text-align: center;
  }
  
  .chat-messages {
    height: 400px;
    overflow-y: auto;
    padding: 15px;
    background-color: #f9f9f9;
  }
  
  .message {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 8px;
    max-width: 80%;
  }
  
  .message.user {
    background-color: #e6f7ff;
    align-self: flex-end;
    margin-left: auto;
  }
  
  .message.ai {
    background-color: #f0f9ff;
    align-self: flex-start;
  }
  
  .chat-input {
    display: flex;
    padding: 15px;
    background-color: white;
  }

  label {
    padding:  2px;
  }
  
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
  }
  
  button {
    padding: 10px 15px;
    background-color: #4e8cff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3a7bdf;
  }
  </style>