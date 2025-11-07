// class categoryItem extends HTMLElement {
//    constructor(){

//    }
// }

// class MyCustomElement extends HTMLElement {
//    constructor() {
//       super();
//       const shadowRoot = this.attachShadow({ mode: 'open' });
//       shadowRoot.innerHTML = `
//          <style>
//             .cat-compo {
//               border-radius: 8px;
//               margin-top: 5px;
//               padding: 6px 8px;
//               display: flex;
//               align-items: center;
//               gap: 5px;
//               background-color: rgb(206, 218, 255);
//               border: 1px solid rgba(65, 105, 225, 0.432);
//             }
//             .acnt-color {
//               width: 8px;
//               height: 8px;
//               background-color: royalblue;
//               border-radius: 3px;
//             }
//             .cat-name {
//               font-size: 15px;
//               flex: 1;
//             }
//             .task-count {
//               font-size: 10px;
//               color: rgb(255, 102, 0);
//             }
//          </style>
//           <div class="cat-compo">
//             <div class="acnt-color"></div>
//             <div class="cat-name">Today</div>
//             <div class="task-count">10</div>
//           </div>
//         `;
//    }
// }

// customElements.define('my-custom-element', MyCustomElement);



function categoryItem (){
   document.cre
}

class CategoryItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const name = this.getAttribute('name') || 'Unknown';
    const count = this.getAttribute('count') || '0';
    const color = this.getAttribute('color') || 'royalblue';
    this.shadowRoot.innerHTML = `
      <style>
        .cat-compo {
           border-radius: 8px;
           margin-top: 5px;
           padding: 6px 8px;
           display: flex;
           align-items: center;
           gap: 5px;
           background-color: rgb(206, 218, 255);
           border: 1px solid rgba(65, 105, 225, 0.432);
         }
         .acnt-color {
           width: 8px;
           height: 8px;
           background-color: royalblue;
           border-radius: 3px;
         }
         .cat-name {
           font-size: 15px;
           flex: 1;
         }
         .task-count {
           font-size: 10px;
           color: rgb(255, 102, 0);
         }
      </style>
      <div class="cat-compo">
        <div class="acnt-color"></div>
        <div class="cat-name">${name}</div>
        <div class="task-count">${count}</div>
      </div>
    `;
  }
}
customElements.define('category-item', CategoryItem);
