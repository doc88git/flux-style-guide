<template>
  <section class="f-layout">
    <header class="header--mob">
      <button class="togglef-menu--left">
        <f-icon name="menu" />
      </button>
      <div class="logo">
        <slot name="logo">Flux | Painel</slot>
      </div>
      <button class="toggleMenu">
        <f-icon name="menu" />
      </button>
    </header>
    <header class="header">
      <div class="top">
        <div class="logo">
          <slot name="logo">Flux | Painel</slot>
        </div>
        <div class="header__mid">
          <slot name="header__mid"></slot>
        </div>
        <div class="buttons">
          <slot name="header__buttons">
            <f-button type="outline">Login</f-button>
          </slot>
        </div>
      </div>
      <div class="menu">
        <slot name="menu__right">
          <nav>
            <ul>
              <li>
                <a>Menu 1</a>
                <nav class="submenu">
                  <ul>
                    <li>Opt 1</li>
                    <li>Opt 2</li>
                    <li>Opt 3</li>
                    <li>Opt 4</li>
                  </ul>
                </nav>
              </li>
              <li>
                <a>Menu 2</a>
                <nav class="submenu">
                  <ul>
                    <li>Opt 1</li>
                    <li>Opt 2</li>
                    <li>Opt 3</li>
                    <li>Opt 4</li>
                  </ul>
                </nav>
              </li>
              <li>Menu 3</li>
              <li>Menu End</li>
            </ul>
          </nav>
        </slot>
      </div>
    </header>

    <section class="f-menu--left">
      <slot name="menu__left">
        <f-list>
          <f-item to="/" title="Create from scratch">
            Create a repository without any source code
          </f-item>
          <f-item
            title="Fork"
            label="Start a project base on the source of an existing one."
          />
        </f-list>
      </slot>
    </section>

    <main>
      <slot name="main" />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </section>
</template>

<script>
import { FIcon } from "@/components/FIcon";
import { FButton } from "@/components/FButton";
import { FList, FItem } from "@/components/FList";

export default {
  name: "f-layout",
  components: {
    FIcon,
    FList,
    FItem,
    FButton
  },
  mounted() {
    const fMenuLButton = document.querySelector(".togglef-menu--left");
    const fMenuL = document.querySelector(".f-menu--left");

    function togglefMenuLView() {
      fMenuL.classList.toggle("active");
    }

    fMenuLButton.addEventListener("click", togglefMenuLView);

    const menuButton = document.querySelector(".toggleMenu");
    const menu = document.querySelector(".header");

    function toggleMenuView() {
      menu.classList.toggle("active");
    }

    menuButton.addEventListener("click", toggleMenuView);
  }
};
</script>

<style lang="scss" scoped>
.f-layout {
  background-image: repeating-linear-gradient(to right, theme("colors.light"));
  display: grid;
  width: 100vw;
  min-height: 100vh;
  grid-template-columns: minmax(100px, 20rem) minmax(100px, 50rem) 1fr;
  grid-template-rows: 10rem 1fr 2rem;
  grid-gap: 0px;
  grid-template-areas:
    "header header header"
    "f-menu--left main main"
    "footer footer footer";
  .header--mob {
    display: none;
  }
  .header {
    background: theme("colors.lighter");
    grid-area: header;
    display: grid;
    grid-template-columns: 1fr minmax(150px, 75rem) 1fr;
    grid-template-rows: 1fr;
    grid-gap: 0.5rem;
    grid-template-areas:
      "emptyleft top emptyright"
      "menu menu menu";
    .top {
      padding-top: 0.5rem;
      grid-area: top;
      display: grid;
      grid-template-columns: 12rem 1fr 15rem;
      grid-gap: 0.5rem;
      .logo {
        font-size: 2rem;
        color: theme("colors.primary");
      }
      div {
        display: flex;
        align-items: center;
        .header__mid-input {
          width: 100%;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          border: 1px solid theme("colors.light");
          font-size: 1rem;
        }
      }
      .buttons {
        justify-content: flex-end;
        button {
          margin-left: 0.5rem;
        }
      }
    }
    .menu {
      background: theme("colors.primary");
      grid-area: menu;
      color: #fff;
      position: relative;
      z-index: 2;
      display: none;
      nav {
        width: 100%;
        max-width: 75rem;
        margin: auto;
        ul {
          display: flex;
          list-style: none;
          li {
            text-align: right;
            margin-right: 2rem;
            height: 2.5rem;
            line-height: 2.5rem;
            &:last-child {
              margin-right: 0rem;
              flex: 1;
            }
            &:hover > nav.submenu {
              max-height: 5rem;
              transition: max-height 0.25s;
            }
            .submenu {
              overflow: hidden;
              position: absolute;
              background: theme("colors.secondary");
              width: 100vw;
              max-width: 100vw;
              max-height: 0rem;
              transition: max-height 0.25s;
              left: 0;
              top: 2.5rem;
              display: grid;
              grid-template-columns: 1fr 75rem 1fr;
              grid-template-areas: "emptyleft submenu emptyright";
              ul {
                grid-area: submenu;
                li:last-child {
                  flex: 0;
                }
              }
            }
          }
        }
      }
    }
  }
  .f-menu--left {
    background-color: theme("colors.light");
    grid-area: "f-menu--left";
    @apply shadow px-2 py-1;
    ul {
      list-style: none;
      li {
        padding: 1.5rem;
        margin-bottom: 1rem;
        background: theme("colors.gray");
      }
    }
  }
  main {
    background: theme("colors.white");
    grid-area: main;
    padding: 1rem;
    h1,
    h2,
    p {
      margin-bottom: 1rem;
    }
    p {
      line-height: 1.5;
    }
  }
  footer {
    background: theme("colors.light");
    grid-area: footer;
    p {
      width: 100%;
      max-width: 50rem;
      line-height: 2rem;
      padding-left: 1rem;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 100vw;
    grid-template-rows: 5rem 1fr 2rem;
    grid-row-gap: 1rem;
    grid-template-areas:
      "header"
      "main"
      "footer";
    background: theme("colors.white");
    .header--mob {
      background: theme("colors.lighter");
      grid-area: header;
      position: fixed;
      height: 5rem;
      width: 100vw;
      display: grid;
      grid-template-columns: 5rem 1fr 5rem;
      grid-gap: 0.5rem;
      border-bottom: 1px solid theme("colors.primary");
      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: theme("colors.primary");
      }
      button {
        border: 0 none;
        background: transparent;
        cursor: pointer;
        transition: background 0.25s;
        &:hover {
          background: theme("colors.light");
          transition: background 0.25s;
        }
        svg {
          fill: theme("colors.primary");
        }
      }
    }
    .header {
      background: theme("colors.primary");
      grid-area: none;
      position: fixed;
      right: 0;
      bottom: 0;
      width: 80vw;
      transform: translateX(100%);
      transition: transform 0.25s;
      height: calc(100vh - 5rem);
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 3rem 1fr;
      grid-template-areas:
        "top"
        "menu";
      &.active {
        transform: translateX(0%);
        transition: transform 0.25s;
      }
      .top {
        width: 80vw;
        grid-area: top;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0.5rem;
        padding: 1rem 1rem 0;
        .logo {
          display: none;
        }
        .header__mid {
          .header__mid-input {
            width: 5rem;
            transition: width 0.25s;
            background: theme("colors.primary");
            color: theme("colors.white");
            padding: 0.25rem 0.5rem;
            font-size: 0.75rem;
            &:focus {
              width: 100%;
              transition: width 0.25s;
            }
          }
        }
        .buttons {
          .btn {
            padding: 0.25rem 0.5rem;
            font-size: 0.75rem;
          }
          .btn-outline {
            color: theme("colors.white");
            border-color: theme("colors.white");
            &:hover {
              background: theme("colors.black");
            }
          }
        }
      }
      .menu {
        grid-area: menu;
        display: block;
        nav {
          ul {
            flex-flow: column;
            justify-content: flex-start;
            padding: 0 1rem;
            li {
              text-align: left;
              height: auto;
              &:hover > nav.submenu {
                max-height: 200vh;
                transition: max-height 0.25s;
              }
              .submenu {
                max-height: 200vh;
                position: static;
                display: block;
                background: theme("colors.primary");
              }
            }
          }
        }
      }
    }
    .f-menu--left {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 80vw;
      transform: translateX(-100%);
      transition: transform 0.25s;
      height: calc(100vh - 5rem);
      &.active {
        transform: translateX(0%);
        transition: transform 0.25s;
      }
    }
    main {
      grid-area: main;
    }
    footer {
      grid-area: footer;
    }
  }
}

input {
  outline: none;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid theme("colors.gray");
  background: theme("colors.light");
  transition: background 0.25s;
  color: theme("colors.black");
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  &:hover {
    background: theme("colors.gray");
    transition: background 0.25s;
  }
  &.btn-outline {
    background: transparent;
    &:hover {
      background: theme("colors.lighter");
    }
    &.btn-primary {
      border-color: theme("colors.primary");
      color: theme("colors.primary");
    }
  }
  &.btn-info {
    color: theme("colors.white");
    background: theme("colors.primary");
    border-color: theme("colors.primary");
    &:hover {
      background: theme("colors.primary");
      border-color: theme("colors.primary");
    }
  }
}
</style>
