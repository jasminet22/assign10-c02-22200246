# 과제 프로젝트

## 선택 이유
React와 JavaScript로 만든 계산기 프로젝트이며, README와 package.json이 포함되어 있고, 별도의 백엔드나 데이터베이스 없이 실행할 수 있고, 수정 및 재배포가 가능한 라이선스를 가지고 있어서 요구조건에 적합하다는 생각이 들어 선택하게 되었다.
그리고 계산기라는 간단한 기능을 구현하고 있어 코드를 분석하는 것에 어려움을 느끼지 않을 것 같았다. 

## 주요 기능
- 덧셈, 뺄셈, 곱셈, 나눗셈
- 키보드 입력을 통한 계산
- 메모리 기능과 입력 초기화

## Project Structure
- src/main.jsx: 브라우저에 react 를 연결하여 실행하는 역할
- src/App.jsx: 브라우저에 panel을 배치하는 역할 

## React Component
- panel: 계산기 화면과 동작을 담당하는 중심 component
- key: ac, del, %, +/-같은 기능 버튼 표시

## Code Analysis
- code: 
<div className="numplaceholder gap-4 grid grid-cols-3 sm:p-5 p-3">
                        {num.map((element,idx)=>(
                        <Numkey key={idx} number={element} onClick={()=>display(element)}/>
                    ))}
                    </div>

- analysis: num 배열에 들어있는 값들을 map으로 하나씩 꺼내 numkey 컴포넌트를 만들고, 표시할 값과 onClick 함수를 전달하는 역할을 한다.



# React Calculator 🧮

A modern, interactive calculator built with React, featuring smooth animations and a sleek design. Perfect for learning React hooks, state management, and building interactive user interfaces.

## ✨ Features

- 🔢 **Basic arithmetic operations** (addition, subtraction, multiplication, division)
- 📱 **Responsive design** with Tailwind CSS
- 🎨 **Smooth animations** with Framer Motion
- 🎯 **Clean and intuitive** user interface
- ⚡ **Real-time calculation** display
- 🚨 **Error handling** for invalid operations
- 🌙 **Modern glassmorphism** design elements
- ⌨️ **Keyboard support** for better accessibility
- 📐 **Memory functions** (MC, MR, M+, M-)
- 🔄 **Clear and All Clear** functionality

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdrishikharChowdhury/react-calculator.git
   cd react-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 📁 Project Structure

```
react-calculator/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Calculator.jsx    # Main calculator component
│   │   ├── Display.jsx       # Display screen component
│   │   └── Button.jsx        # Calculator button component
│   ├── hooks/
│   │   └── useCalculator.js  # Custom hook for calculator logic
│   ├── utils/
│   │   └── calculations.js   # Calculation utilities
│   ├── App.jsx              # Root application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles with Tailwind
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Usage

1. **Basic Operations**: Click number buttons and operation buttons to perform calculations
2. **Keyboard Support**: Use your keyboard for faster input
   - Numbers: `0-9`
   - Operations: `+`, `-`, `*`, `/`
   - Enter: `=` or `Enter`
   - Clear: `c` or `Escape`
3. **Memory Functions**: Store and recall values using memory buttons
4. **Continuous Calculations**: Chain operations for complex calculations

## 🛠️ Built With

- **React Hooks**: useState, useEffect, useCallback for state management
- **Custom Hooks**: Reusable calculator logic
- **Tailwind CSS**: Responsive design and utility classes
- **Framer Motion**: Button press animations and transitions
- **Vite**: Fast development and optimized builds

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**AdrishikharChowdhury**
- GitHub: [AdrishikharChowdhury](https://github.com/AdrishikharChowdhury)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/adrishikhar-chowdhury/)
- Portfolio: [View my work](https://adrishikharchowdhury.netlify.app)

---

⭐ **If you found this project helpful, please give it a star!** ⭐

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
