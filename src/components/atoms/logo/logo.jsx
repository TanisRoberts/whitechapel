import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    return <a href="http://localhost:3000" className='logo'>
        <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 441 100" 
        aria-hidden="true" 
        focusable="false" 
        width="221" 
        height="50" 
        fill="none" 
        class="NavigationBarLogostyles__Logo-sc-101r84q-1 ucrdh"
        >
            <path 
            d="M124.881 38.597l-9.712-23.246c-.772-1.823.056-3.093 2.042-3.093h3.531c1.545 0 2.539.663 3.035 2.154l6.07 16.952 6.125-16.952c.496-1.436 1.489-2.154 3.034-2.154h3.587c1.986 0 2.814 1.27 2.042 3.093l-9.712 23.246c-.552 1.38-1.6 2.044-3.09 2.044h-3.807c-1.545 0-2.538-.663-3.145-2.044zM149.104 4.473c0-2.54 1.821-4.473 5.132-4.473 3.255 0 5.131 1.933 5.131 4.473 0 2.484-1.986 4.417-5.131 4.417-3.146 0-5.132-1.933-5.132-4.417zm.883 33.517V14.91c0-1.712.938-2.65 2.648-2.65h3.201c1.71 0 2.703.938 2.703 2.65V37.99c0 1.712-.993 2.65-2.703 2.65h-3.201c-1.71 0-2.648-.938-2.648-2.65zM163.671 26.615c0-8.283 6.346-14.964 16.333-14.964 2.704 0 5.959.607 8.994 2.374 1.49.94 1.545 2.375.497 3.755l-.883 1.105c-1.049 1.325-2.152 1.38-3.752.662-1.821-.883-3.587-.994-4.36-.994-4.8 0-8.276 3.258-8.276 7.896 0 4.639 3.476 7.897 8.276 7.897.773 0 2.539-.11 4.36-.994 1.6-.718 2.758-.663 3.752.662l.883 1.105c1.048 1.38.827 2.981-.994 3.975-2.814 1.602-5.904 2.154-8.497 2.154-9.877 0-16.333-6.516-16.333-14.633zM197.44 31.198v-12.59h-2.814c-.883 0-1.435-.497-1.435-1.38v-3.59c0-.883.552-1.38 1.435-1.38h3.476l.938-5.742c.221-1.16.994-1.767 2.152-1.767h2.704c1.269 0 1.931.718 1.931 1.932v5.577h6.401c.883 0 1.379.497 1.379 1.38v3.59c0 .883-.496 1.38-1.379 1.38h-6.401v12.866c0 2.099 1.049 2.927 2.318 2.927 1.434 0 2.372-1.105 2.372-2.595 0-.277 0-.608-.055-.994-.11-.994.221-1.491 1.159-1.491h3.366c.717 0 1.324.276 1.545 1.104.221.828.331 1.712.331 2.154 0 6.129-4.359 8.669-9.491 8.669-4.8 0-9.932-2.209-9.932-10.05zM219.015 26.45c0-8.173 6.732-14.799 15.726-14.799s15.725 6.626 15.725 14.799c0 8.172-6.731 14.798-15.725 14.798s-15.726-6.571-15.726-14.798zm23.34.055c0-4.473-3.366-7.896-7.614-7.896-4.304 0-7.615 3.423-7.615 7.896 0 4.417 3.311 7.84 7.615 7.84 4.248 0 7.614-3.423 7.614-7.84zM255.488 37.99V14.91c0-1.712.938-2.65 2.648-2.65h3.035c1.711 0 2.649.938 2.649 2.65v3.534c.938-5.19 4.911-6.792 7.338-6.792l.938.055c1.325.11 1.601 1.16 1.601 2.264v3.865c0 1.547-.773 2.21-1.932 2.043-.496-.055-.938-.11-1.379-.11-3.311 0-6.346 2.154-6.346 9.277v8.945c0 1.712-.938 2.65-2.648 2.65h-3.256c-1.71 0-2.648-.938-2.648-2.65zM276.952 4.473c0-2.54 1.821-4.473 5.132-4.473 3.255 0 5.131 1.933 5.131 4.473 0 2.484-1.986 4.417-5.131 4.417-3.145 0-5.132-1.933-5.132-4.417zm.883 33.517V14.91c0-1.712.938-2.65 2.649-2.65h3.2c1.71 0 2.704.938 2.704 2.65V37.99c0 1.712-.994 2.65-2.704 2.65h-3.2c-1.711 0-2.649-.938-2.649-2.65zM291.574 26.45c0-8.338 5.684-14.799 13.629-14.799 3.752 0 7.063 1.436 9.105 4.638v-1.38c0-1.712.938-2.65 2.648-2.65h3.256c1.71 0 2.648.938 2.648 2.65V37.99c0 1.712-.938 2.65-2.648 2.65h-3.256c-1.71 0-2.648-.938-2.648-2.65v-1.325c-2.042 3.147-5.353 4.583-9.105 4.583-7.945 0-13.629-6.405-13.629-14.798zm22.844 0c0-4.528-2.869-7.952-7.228-7.952-4.47 0-7.063 3.59-7.063 7.951 0 4.418 2.593 7.952 7.063 7.952 4.359 0 7.228-3.424 7.228-7.952zM329.703 37.99V14.91c0-1.712.938-2.65 2.648-2.65h3.256c1.71 0 2.648.938 2.648 2.65v1.877c1.38-3.258 4.414-5.135 8.608-5.135 7.614 0 10.373 5.964 10.373 12.645V37.99c0 1.712-.993 2.65-2.703 2.65h-3.201c-1.71 0-2.648-.938-2.648-2.65V24.903c0-3.975-1.545-6.294-4.47-6.294-2.924 0-5.959 2.263-5.959 7.564V37.99c0 1.712-.938 2.65-2.648 2.65h-3.256c-1.71 0-2.648-.938-2.648-2.65zM116.604 96.853v-33.85c0-1.656.883-2.54 2.538-2.54h3.09c1.656 0 2.538.884 2.538 2.54v1.27c1.932-2.98 5.132-4.361 8.719-4.361 7.614 0 13.022 6.184 13.022 14.136 0 8.006-5.408 14.135-13.022 14.135-3.587 0-6.732-1.38-8.719-4.417v13.142c0 1.656-.882 2.54-2.538 2.54h-3.09c-1.6-.055-2.538-.939-2.538-2.595zm21.74-22.805c0-4.142-2.483-7.62-6.732-7.62-4.138 0-6.897 3.257-6.897 7.62 0 4.306 2.759 7.62 6.897 7.62 4.249-.056 6.732-3.424 6.732-7.62zM151.477 85.036V51.96c0-1.656.883-2.54 2.538-2.54h3.035c1.655 0 2.593.884 2.593 2.54v33.076c0 1.656-.938 2.54-2.593 2.54h-3.035c-1.6 0-2.538-.883-2.538-2.54zM165.878 76.09V63.005c0-1.657.883-2.54 2.538-2.54h3.09c1.656 0 2.539.883 2.539 2.54v12.48c0 3.81 1.489 6.073 4.248 6.073 2.759 0 5.684-2.209 5.684-7.289V63.004c0-1.657.883-2.54 2.538-2.54h3.035c1.655 0 2.593.883 2.593 2.54v22.032c0 1.656-.938 2.54-2.593 2.54h-3.035c-1.655 0-2.538-.884-2.538-2.54v-1.767c-1.38 3.037-4.194 4.86-8.277 4.86-7.173.054-9.822-5.688-9.822-12.038zM198.709 85.036V63.004c0-1.657.883-2.54 2.539-2.54h3.089c1.656 0 2.539.883 2.539 2.54v1.767c1.048-3.092 3.973-4.915 7.338-4.915 3.09 0 6.125 1.326 7.836 4.694 2.538-4.03 5.628-4.694 8.718-4.694 7.008 0 9.987 5.743 9.987 12.148v13.032c0 1.656-.938 2.54-2.593 2.54h-3.09c-1.656 0-2.538-.884-2.538-2.54V72.39c0-3.81-1.49-5.853-3.918-5.853-2.262 0-4.745 1.822-4.856 6.792v11.706c0 1.656-.883 2.54-2.538 2.54h-3.09c-1.655 0-2.538-.884-2.538-2.54V72.39c0-3.81-1.435-5.853-3.863-5.853-2.427 0-4.91 1.988-4.91 7.068v11.43c0 1.656-.883 2.54-2.539 2.54h-3.09c-1.6 0-2.483-.884-2.483-2.54zM255.046 83.766v1.27c0 1.656-.938 2.54-2.593 2.54h-3.035c-1.655 0-2.538-.884-2.538-2.54V51.96c0-1.656.883-2.54 2.538-2.54h3.035c1.655 0 2.593.884 2.593 2.54v12.314c1.932-3.037 5.132-4.418 8.663-4.418 7.615 0 13.078 6.185 13.078 14.136 0 8.007-5.408 14.136-13.078 14.136-3.531.055-6.731-1.325-8.663-4.362zm13.519-9.719c0-4.14-2.538-7.62-6.732-7.62-4.193 0-6.897 3.258-6.952 7.62.055 4.308 2.759 7.62 6.952 7.62 4.249-.055 6.732-3.423 6.732-7.62zM280.925 53.01c0-2.43 1.766-4.252 4.911-4.252 3.09 0 4.911 1.822 4.911 4.251 0 2.375-1.876 4.197-4.911 4.197-3.035.055-4.911-1.822-4.911-4.197zm.828 32.026V63.004c0-1.657.883-2.54 2.538-2.54h3.035c1.655 0 2.593.883 2.593 2.54v22.032c0 1.656-.938 2.54-2.593 2.54h-3.035c-1.655 0-2.538-.884-2.538-2.54zM296.54 85.036V63.004c0-1.657.883-2.54 2.539-2.54h3.09c1.655 0 2.538.883 2.538 2.54v1.767c1.324-3.092 4.193-4.915 8.221-4.915 7.284 0 9.932 5.688 9.932 12.093v13.087c0 1.656-.938 2.54-2.593 2.54h-3.035c-1.655 0-2.538-.884-2.538-2.54v-12.48c0-3.81-1.49-6.018-4.249-6.018-2.759 0-5.683 2.153-5.683 7.233v11.265c0 1.656-.883 2.54-2.538 2.54h-3.09c-1.711 0-2.594-.884-2.594-2.54zM331.413 97.57c-1.434-.717-1.71-2.043-.883-3.478l.607-1.16c.773-1.49 1.932-1.767 3.421-.939 2.042 1.05 4.249 1.712 6.622 1.712 4.58 0 7.835-2.485 7.835-7.84v-1.989c-1.931 2.982-5.242 4.363-8.773 4.363-7.615 0-12.967-6.406-12.967-14.136 0-7.73 5.297-14.136 12.967-14.136 3.531 0 6.676 1.38 8.663 4.417v-1.546c0-1.546.938-2.319 2.593-2.319h2.925c1.655 0 2.538.884 2.538 2.54v22.53c0 10.38-6.842 14.411-15.009 14.411-4.249-.055-7.725-.994-10.539-2.43zm17.712-23.522c-.055-4.308-2.814-7.676-6.952-7.676-4.194 0-6.787 3.534-6.787 7.675 0 4.197 2.593 7.676 6.787 7.676 4.138 0 6.897-3.368 6.952-7.675zM361.43 85.478c0-1.38 1.104-2.485 2.649-2.485 1.489 0 2.648 1.104 2.648 2.485 0 1.38-1.159 2.43-2.648 2.43-1.545 0-2.649-1.05-2.649-2.43zM368.603 80.563c0-4.141 3.201-7.51 8.167-7.51 1.379 0 2.979.277 4.524 1.16.773.497.773 1.215.276 1.878l-.441.552c-.552.662-1.104.662-1.876.331a5.169 5.169 0 00-2.207-.497c-2.428 0-4.139 1.657-4.139 3.976s1.711 3.975 4.139 3.975c.386 0 1.269-.055 2.207-.496.827-.332 1.379-.332 1.876.33l.441.553c.552.718.442 1.49-.496 1.988-1.435.773-2.98 1.049-4.249 1.049-4.966.055-8.222-3.203-8.222-7.289zM383.336 80.508c0-4.086 3.366-7.4 7.89-7.4 4.525 0 7.891 3.314 7.891 7.4s-3.366 7.4-7.891 7.4c-4.524 0-7.89-3.314-7.89-7.4zm11.698 0c0-2.264-1.711-3.976-3.808-3.976-2.152 0-3.807 1.712-3.807 3.976 0 2.209 1.655 3.92 3.807 3.92 2.097 0 3.808-1.711 3.808-3.92zM400.938 85.478c0-1.38 1.103-2.485 2.648-2.485 1.49 0 2.649 1.104 2.649 2.485 0 1.38-1.159 2.43-2.649 2.43-1.545 0-2.648-1.05-2.648-2.43zM408.828 81.557V74.71c0-.883.497-1.325 1.324-1.325h1.656c.827 0 1.324.497 1.324 1.325v6.571c0 1.988.773 3.203 2.207 3.203 1.435 0 2.98-1.16 2.98-3.81v-5.909c0-.883.441-1.325 1.324-1.325h1.6c.828 0 1.38.497 1.38 1.325v11.54c0 .83-.497 1.326-1.38 1.326h-1.6c-.883 0-1.324-.497-1.324-1.325v-.939c-.718 1.602-2.207 2.54-4.359 2.54-3.752 0-5.132-2.982-5.132-6.35zM432.224 84.539l-1.987-3.645v5.412c0 .828-.496 1.325-1.324 1.325h-1.655c-.828 0-1.325-.497-1.325-1.325V68.967c0-.883.497-1.325 1.325-1.325h1.655c.828 0 1.324.497 1.324 1.325v10.271l3.532-4.97c.441-.607.883-.883 1.6-.883h1.876c1.104 0 1.49.773.828 1.656l-3.808 4.97 1.821 2.982c.662 1.049 1.214 1.436 2.097 1.436.166 0 .497 0 .828-.11.551-.111.883-.056 1.103.44l.607 1.216c.221.497.111.994-.607 1.38-1.048.552-2.097.663-2.814.663-2.593-.11-3.973-1.436-5.076-3.48zM96.022 5.191c-.22-1.215-1.048-2.319-2.372-3.147-2.704-1.712-7.394-2.099-11.864-.939-2.538.663-4.855 1.546-6.676 2.54-3.531 1.657-8.553 4.473-12.691 8.448l-.386.332-.497.497c-.662.662-1.27 1.38-1.876 2.153-7.725 9.387-12.967 23.91-15.67 43.291-3.367-10.712-8.388-19.16-14.954-25.234-8.718-8.062-17.105-8.89-20.306-8.835-4.745 0-8.11 1.767-8.663 4.472-.275 1.436.056 4.252 5.684 6.627 26.375 11.098 37.631 47.708 39.728 55.162 0 .11 0 .166.055.221l.056.11c.055.166.11.387.165.608l.055.166s.442 1.435 1.931 1.16c.938-.166 1.27-.884 1.38-1.326.055-.11.055-.276.055-.442 2.373-20.32 9.436-41.634 18.871-56.93 6.07-9.884 13.63-17.117 22.347-21.59 4.028-1.988 6.125-4.693 5.628-7.344z" 
            fill="#ffffff">
            </path>
        </svg>
      </a>
  }
}