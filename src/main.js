// 生成模型原理学习网站 - 主入口

// 服务线程注册（PWA）
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async function() {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js');
      console.log('服务线程注册成功:', registration.scope);
    } catch (error) {
      console.error('服务线程注册失败:', error);
    }
  });
}

// 响应式头部
window.addEventListener('resize', responsiveHeader);
function responsiveHeader() {
  if (window.innerWidth < 768) {
    document.querySelector('.header')?.classList.add('mobile-header');
  } else {
    document.querySelector('.header')?.classList.remove('mobile-header');
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  responsiveHeader();
  
  // 移动端菜单（如果后续添加）
  initMobileMenu();
  
  // 公式滚动优化
  initFormulaScroll();
  
  // 打印功能
  initPrintFunction();
  
  // 主题切换
  initThemeToggle();
});

function initMobileMenu() {
  // 后续添加移动端菜单逻辑
}

function initFormulaScroll() {
  // 长公式自动滚动到可见区域
  document.querySelectorAll('.formula-box').forEach(box => {
    const formula = box.querySelector('.formula');
    if (formula) {
      const wrapper = { container: box, formula: formula };
      const wrapperRect = box.getBoundingClientRect();
      const formulaRect = formula.getBoundingClientRect();
      
      if (formulaRect.top > wrapperRect.top + 50) {
        formula.style.top = '0';
      }
    }
  });
}

function initPrintFunction() {
  // 添加打印当前页面功能
  const printBtn = document.createElement('button');
  printBtn.textContent = '📄 打印此页';
  printBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 20px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    z-index: 1000;
    transition: all 0.3s ease;
  `;
  printBtn.addEventListener('click', function() {
    window.print();
  });
  document.body.appendChild(printBtn);
}

function initThemeToggle() {
  // 主题切换功能（后续可扩展）
  const themeToggle = document.createElement('button');
  themeToggle.textContent = '🌓';
  themeToggle.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 20px;
    background: white;
    color: #667eea;
    border: 2px solid #e2e8f0;
    border-radius: 50px;
    cursor: pointer;
    z-index: 1000;
  `;
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
  });
  document.body.appendChild(themeToggle);
}

// 添加数学公式渲染（MathJax，可选）
// 如果在 production 中需要更好的数学公式支持，可以加载 MathJax
