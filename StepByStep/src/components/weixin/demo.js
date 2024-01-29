import { createHash } from 'crypto';
function _0x278a1d(encryptedData) {
  if (!encryptedData || typeof encryptedData !== 'string' || encryptedData.length <= 1)
    return '';

  const md5Hash = createHash('md5').update(encryptedData).digest('hex').toUpperCase();
  const decryptedString = (md5Hash === encryptedData) ? encryptedData : '';

  return decryptedString;
}

// 示例使用
const encryptedData = 'PPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBodG17yFBVQkxJQyAiLS8vVzNDLy9EVEQgWEhUTUwgM5pxLy9FTiINCiAgImh0dHA6Ly93d3cudzMub3JnL1RSL3hodG1sMTEvRFREL3hodG1sMTEuZHRkIj4NCg0KPGh0bWwgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiPg0KPGhlYWQ+DQogIDx0aXRsZT48L3RpdGxlPg0KICA8bGluayBocmVmPSIuLi9TdHlsZXMvc3R5bGVzaGVldHMuY3NzIiByZWw9InN0eWxlc2hlZXQiIHR5cGU9InRleHQvY3NzIi8'; // 替换为实际的加密数据
const decryptedString = _0x278a1d(encryptedData);
console.log('解密后的字符串:', decryptedString);
