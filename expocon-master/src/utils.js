// src/utils.js

export const generateTableData = (count) => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        uid: `REG${String(i + 1).padStart(3, '0')}`,
        fullName: 'Sapna Prajapat',
        category: 'Speaker',
        city: 'Bangalore',
        mobile: '9171208053',
        email: 'sapnaprajapat079@gmail.com',
        status: 'Printed',
        date: '30-05-2024',
        time: '11:30:31',
      });
    }
    return data;
  };
  