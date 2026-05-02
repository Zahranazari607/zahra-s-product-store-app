# 🛒 Zahra's Shop - Advanced Multi-Language Store

**Zahra's Shop** is a high-performance e-commerce dashboard built with React 18, utilizing the **Fake Store API** as its primary data source. This project demonstrates professional-grade state management, real-time data fetching, and a fully localized interface.

## 🚀 Key Features

* **Advanced Data Fetching:** Powered by **TanStack Query (React Query)** using the **Fake Store API**.
    * Automatic caching, re-fetching, and background updates.
    * Robust **Loading & Error states** (Handles API downtime or network issues).
* **Global State Management:**
    * **Redux Toolkit:** Manages the shopping cart and persistent user data.
    * **Context API:** Handles global settings like language (EN/FA) and layout (Grid/List).
* **Localization & UX:**
    * **Full i18n Support:** English and Persian localization.
    * **Dynamic RTL/LTR:** Automatic layout mirroring based on the selected language.
    * **Responsive UI:** Optimized for all screen sizes using Material UI.

## 🛠️ Technical Stack

* **Core:** React 18 (Vite)
* **API:** [Fake Store API](https://fakestoreapi.com/) (RESTful Products API)
* **Styling:** Material UI (MUI) v5
* **Server State:** TanStack Query v5
* **Client State:** Redux Toolkit

---

## 📂 Project Structure & File Map

```text
src/
├── api/
│   └── productsApi.js      # Axios logic for Fake Store API endpoints
├── components/
│   └── ProductCard.jsx     # Card component for grid/list display
├── context/
│   └── SettingsContext.jsx # Global Language & View modes
├── hooks/
│   └── useProducts.js      # Custom hook for 'products' query
├── layout/
│   ├── Navbar.jsx          # Nav with Cart Icon & Language Toggle
│   └── Footer.jsx          # Responsive footer
├── pages/
│   ├── ProductDetails.jsx  # Detail view with Error/Loading handling
│   └── CartPage.jsx        # Shopping cart management
├── store/
│   ├── index.js            # Redux store configuration
│   └── cartSlice.js        # Cart logic (add/remove/clear)
├── utils/
│   └── translations.js     # Dictionary for Persian product titles/desc
├── App.jsx                 # Routing & Conditional Page Rendering
└── main.jsx                # Entry point with all API & State Providers
```

---

## 📸 Screenshots Gallery (English Version)

All screenshots are located in: `src/Screenshots%20and%20screen%20recorder/`

### 1. Advanced Customization & Themes
| Forest Gold (Dark) | Fire Sunset (Dark) | Rose Wine (Dark) |
| :---: | :---: | :---: |
| ![Forest Gold](./src/Screenshots%20and%20screen%20recorder/En-Home%20page-Forest%20Gold%20Theme.jpg) | ![Fire Sunset](./src/Screenshots%20and%20screen%20recorder/En-Home%20pag-Fire%20Sunset%20Theme.jpg) | ![Rose Wine](./src/Screenshots%20and%20screen%20recorder/En-Home%20pag-Rose%20Wine%20Theme.jpg) |

| Deep Purple Theme | Dark Mode | Soft Pink (Light) |
| :---: | :---: | :---: |
| ![Deep Purple](./src/Screenshots%20and%20screen%20recorder/En-Home%20page-Deep%20Purple%20Theme.jpg) | ![Dark Mode](./src/Screenshots%20and%20screen%20recorder/En-Home%20page-Dark%20mood.jpg) | ![Soft Pink](./src/Screenshots%20and%20screen%20recorder/En-Home%20page-Soft%20Pink%20Theme.jpg) |

### 2. Search, Filtering & Views
| Real-time Searching | Category Filtering | List View Mode |
| :---: | :---: | :---: |
| ![Searching](./src/Screenshots%20and%20screen%20recorder/En-Home%20page-Searching.jpg) | ![Category](./src/Screenshots%20and%20screen%20recorder/En-Home%20page-Categorise%20by%20type%20of%20Products.jpg) | ![List View](./src/Screenshots%20and%20screen%20recorder/En-Home%20page-Display%20view-List.jpg) |

### 3. Shopping Experience & Error Handling
| Product Details | Cart Management | Order Success |
| :---: | :---: | :---: |
| ![Details](./src/Screenshots%20and%20screen%20recorder/En-Detail%20page.jpg) | ![Cart](./src/Screenshots%20and%20screen%20recorder/En-Cart%20page-Add%20and%20Clear%20Products.jpg) | ![Success](./src/Screenshots%20and%20screen%20recorder/En-Cart%20page-After%20Checkout.jpg) |

| Empty Cart State | API Error Handling | Custom Footer |
| :---: | :---: | :---: |
| ![Empty Cart](./src/Screenshots%20and%20screen%20recorder/En-Home%20page-Cart%20page-%20Empty.jpg) | ![Error Page](./src/Screenshots%20and%20screen%20recorder/En-Error.jpg) | ![Footer](./src/Screenshots%20and%20screen%20recorder/En-Home%20page-footer.jpg) |
---

## 📸 Screenshots Gallery (Persian Version)

All screenshots are located in: `src/Screenshots%20and%20screen%20recorder/`

### 1. Localization & RTL Support (Persian)
| Home Page - Persian | List View Mode (RTL) | Category & Search (RTL) |
| :---: | :---: | :---: |
| ![Home FA](./src/Screenshots%20and%20screen%20recorder/Far-Home%20Page.jpg) | ![List FA](./src/Screenshots%20and%20screen%20recorder/Far-Home%20Page-Display-list.jpg) | ![Search FA](./src/Screenshots%20and%20screen%20recorder/Far-Home%20Page-Categorised%20And%20Search.jpg) |

### 2. Advanced Persian Themes (Dark & Light)
| Narenji Khorshidi (Dark) | Sabze va Talayie (Dark) | Qermez-e-Sharabi (Dark) |
| :---: | :---: | :---: |
| ![Orange FA](./src/Screenshots%20and%20screen%20recorder/Far-Home%20Page-Settings-Narenji%20Khorshidi%20Theme.jpg) | ![Green FA](./src/Screenshots%20and%20screen%20recorder/Far-Home%20Page-Settings-Sabze%20va%20Talayie%20Theme.jpg) | ![Wine FA](./src/Screenshots%20and%20screen%20recorder/Far-Home%20Page-Settings-Qermez-e-Sharabi%20Theme.jpg) |

| Banafsh-e-Tire (Dark) | Dark Theme - Settings | Yasi Roshan (Light) |
| :---: | :---: | :---: |
| ![Purple FA](./src/Screenshots%20and%20screen%20recorder/Far-Home%20Page-Settings-Banafsh-e-Tire%20Theme.jpg) | ![Settings Dark FA](./src/Screenshots%20and%20screen%20recorder/Far-Home%20Page-Settings-Dark%20theme.jpg) | ![Lavender FA](./src/Screenshots%20and%20screen%20recorder/Far-Home%20Page-Settings-Yasi%20Roshan%20Theme.jpg) |

| Soorati Roshan (Light) | Persian Light Theme |
| :---: | :---: |
| ![Pink FA](./src/Screenshots%20and%20screen%20recorder/Far-Home%20Page-Settings-Soorati%20Roshan%20Theme.jpg) | ![Light FA](./src/Screenshots%20and%20screen%20recorder/Far-Home%20Page-Settings-light%20theme.jpg) |

### 3. Shopping Experience (Persian)
| Product Details (RTL) | Cart Page - Light | Checkout Success (FA) |
| :---: | :---: | :---: |
| ![Details FA](./src/Screenshots%20and%20screen%20recorder/Far-Detailes%20Page-Qermez-e-Sharabi%20Theme.jpg) | ![Cart FA](./src/Screenshots%20and%20screen%20recorder/Far-Cart%20Page-Light%20Theme.jpg) | ![Success FA](./src/Screenshots%20and%20screen%20recorder/Far-Cart%20Page-After%20Checkout.jpg) |

| Empty Cart (FA) | API Error Handling (FA) |
| :---: | :---: |
| ![Empty FA](./src/Screenshots%20and%20screen%20recorder/Far-Cart%20Page-Empty.jpg) | ![Error FA](./src/Screenshots%20and%20screen%20recorder/Far-Error.jpg) |

---
## 🎥 Project Demo Video
[![Watch the Zahra's Shop demo on YouTube](https://img.youtube.com/vi/jRPqLZsAKHc/0.jpg)](https://youtu.be/jRPqLZsAKHc)

*Click the image above to watch the project demo on YouTube.*

---

## 🛠️ Installation & Getting Started

### 1. Installation
```bash
# Install all required dependencies
npm install
```

### 2. Running the App
```bash
# Start the Vite development server
npm run dev
```

---

## 📁 Project Highlights

* **API Integration:** Successfully integrated **Fake Store API** with proper asynchronous handling using TanStack Query.
* **Resilient UI:** Implemented custom error boundaries and states to ensure **Zahra's Shop** never displays a white screen if the API request fails.
* **Performance:** Optimized with `useMemo` for real-time filtering and search results to ensure smooth UI interaction.

---

**Developed by Zahra Nazari with ❤️ as a React Final Project.**
