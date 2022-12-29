import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex1": {
      "callbacks": {}
    },
    "Div1": {
      "callbacks": {}
    },
    "Div2": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "Flex3": {
      "callbacks": {}
    },
    "Div3": {
      "callbacks": {}
    },
    "Div5": {
      "callbacks": {}
    },
    "Div6": {
      "callbacks": {}
    },
    "Div7": {
      "callbacks": {}
    },
    "Div4": {
      "callbacks": {}
    },
    "Div9": {
      "callbacks": {}
    },
    "Div11": {
      "callbacks": {}
    },
    "Div12": {
      "callbacks": {}
    },
    "Div13": {
      "callbacks": {}
    },
    "Div14": {
      "callbacks": {}
    },
    "Flex4": {
      "callbacks": {}
    },
    "Div21": {
      "callbacks": {}
    },
    "Div22": {
      "callbacks": {}
    },
    "Div23": {
      "callbacks": {}
    },
    "Div24": {
      "callbacks": {}
    },
    "Div26": {
      "callbacks": {}
    },
    "Div27": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Div33": {
      "callbacks": {}
    },
    "Div39": {
      "callbacks": {}
    },
    "Div40": {
      "callbacks": {}
    },
    "Div41": {
      "callbacks": {}
    },
    "Div47": {
      "callbacks": {}
    },
    "Div50": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Div51": {
      "callbacks": {}
    },
    "Div52": {
      "callbacks": {}
    },
    "Div53": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Div54": {
      "callbacks": {}
    },
    "Div55": {
      "callbacks": {}
    },
    "Div56": {
      "callbacks": {}
    },
    "Flex10": {
      "callbacks": {}
    },
    "Div57": {
      "callbacks": {}
    },
    "Div58": {
      "callbacks": {}
    },
    "Div35": {
      "callbacks": {}
    },
    "Div44": {
      "callbacks": {}
    },
    "Div45": {
      "callbacks": {}
    },
    "Div46": {
      "callbacks": {}
    },
    "Div49": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Div65": {
      "callbacks": {}
    },
    "Div66": {
      "callbacks": {}
    },
    "Flex15": {
      "callbacks": {}
    },
    "Div67": {
      "callbacks": {}
    },
    "Div68": {
      "callbacks": {}
    },
    "Flex16": {
      "callbacks": {}
    },
    "Div69": {
      "callbacks": {}
    },
    "Div70": {
      "callbacks": {}
    },
    "Div36": {
      "callbacks": {}
    },
    "Div42": {
      "callbacks": {}
    },
    "Div43": {
      "callbacks": {}
    },
    "Div48": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Div59": {
      "callbacks": {}
    },
    "Div60": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Div61": {
      "callbacks": {}
    },
    "Div62": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Div63": {
      "callbacks": {}
    },
    "Div64": {
      "callbacks": {}
    },
    "Div71": {
      "callbacks": {}
    },
    "Div72": {
      "callbacks": {}
    },
    "Flex17": {
      "callbacks": {}
    },
    "Div73": {
      "callbacks": {}
    },
    "Div75": {
      "callbacks": {}
    },
    "Div76": {
      "callbacks": {}
    },
    "Div74": {
      "callbacks": {}
    },
    "Div77": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {}
    },
    "Div93": {
      "callbacks": {}
    },
    "Div94": {
      "callbacks": {}
    },
    "Div95": {
      "callbacks": {}
    },
    "Div98": {
      "callbacks": {}
    },
    "Div97": {
      "callbacks": {}
    },
    "Div96": {
      "callbacks": {}
    },
    "Div107": {
      "callbacks": {}
    },
    "Div106": {
      "callbacks": {}
    },
    "Div105": {
      "callbacks": {}
    },
    "Div111": {
      "callbacks": {}
    },
    "Div112": {
      "callbacks": {}
    },
    "Flex21": {
      "callbacks": {}
    },
    "Div113": {
      "callbacks": {}
    },
    "Div115": {
      "callbacks": {}
    },
    "Div116": {
      "callbacks": {}
    },
    "Div114": {
      "callbacks": {}
    },
    "Div117": {
      "callbacks": {}
    },
    "Div120": {
      "callbacks": {}
    },
    "Div121": {
      "callbacks": {}
    },
    "Div122": {
      "callbacks": {}
    },
    "Div125": {
      "callbacks": {}
    },
    "Div126": {
      "callbacks": {}
    },
    "Div127": {
      "callbacks": {}
    },
    "Div131": {
      "callbacks": {}
    },
    "Div128": {
      "callbacks": {}
    },
    "Div129": {
      "callbacks": {}
    },
    "Div130": {
      "callbacks": {}
    },
    "Div135": {
      "callbacks": {}
    },
    "Div132": {
      "callbacks": {}
    },
    "Div133": {
      "callbacks": {}
    },
    "Div134": {
      "callbacks": {}
    },
    "Div139": {
      "callbacks": {}
    },
    "Div136": {
      "callbacks": {}
    },
    "Div137": {
      "callbacks": {}
    },
    "Div138": {
      "callbacks": {}
    },
    "Div141": {
      "callbacks": {}
    },
    "Div142": {
      "callbacks": {}
    },
    "Flex25": {
      "callbacks": {}
    },
    "Div143": {
      "callbacks": {}
    },
    "Div144": {
      "callbacks": {}
    },
    "Flex27": {
      "callbacks": {}
    },
    "Div161": {
      "callbacks": {}
    },
    "Div162": {
      "callbacks": {}
    },
    "Div163": {
      "callbacks": {}
    },
    "Div164": {
      "callbacks": {}
    },
    "Div165": {
      "callbacks": {}
    },
    "Div166": {
      "callbacks": {}
    },
    "Flex29": {
      "callbacks": {}
    },
    "Div167": {
      "callbacks": {}
    },
    "Div169": {
      "callbacks": {}
    },
    "Div170": {
      "callbacks": {}
    },
    "Div171": {
      "callbacks": {}
    },
    "Div172": {
      "callbacks": {}
    },
    "Div174": {
      "callbacks": {}
    },
    "Div177": {
      "callbacks": {}
    },
    "Div175": {
      "callbacks": {}
    },
    "Div176": {
      "callbacks": {}
    },
    "Div195": {
      "callbacks": {}
    },
    "Div193": {
      "callbacks": {}
    },
    "Div194": {
      "callbacks": {}
    },
    "Div168": {
      "callbacks": {}
    },
    "Div197": {
      "callbacks": {}
    },
    "Div198": {
      "callbacks": {}
    },
    "Div201": {
      "callbacks": {}
    },
    "Flex30": {
      "callbacks": {}
    },
    "Div202": {
      "callbacks": {}
    },
    "Div203": {
      "callbacks": {}
    },
    "Div204": {
      "callbacks": {}
    },
    "Div207": {
      "callbacks": {}
    },
    "Div208": {
      "callbacks": {}
    },
    "Div214": {
      "callbacks": {}
    },
    "Flex31": {
      "callbacks": {}
    },
    "Div210": {
      "callbacks": {}
    },
    "Div211": {
      "callbacks": {}
    },
    "Div212": {
      "callbacks": {}
    },
    "Div209": {
      "callbacks": {}
    },
    "Div213": {
      "callbacks": {}
    },
    "Div220": {
      "callbacks": {}
    },
    "Flex32": {
      "callbacks": {}
    },
    "Div216": {
      "callbacks": {}
    },
    "Div217": {
      "callbacks": {}
    },
    "Div218": {
      "callbacks": {}
    },
    "Div215": {
      "callbacks": {}
    },
    "Div219": {
      "callbacks": {}
    },
    "Div221": {
      "callbacks": {}
    },
    "Div222": {
      "callbacks": {}
    },
    "Flex33": {
      "callbacks": {}
    },
    "Div226": {
      "callbacks": {}
    },
    "Div227": {
      "callbacks": {}
    },
    "Div228": {
      "callbacks": {}
    },
    "Div229": {
      "callbacks": {}
    },
    "Div232": {
      "callbacks": {}
    },
    "Div233": {
      "callbacks": {}
    },
    "Flex34": {
      "callbacks": {}
    },
    "Div237": {
      "callbacks": {}
    },
    "Div238": {
      "callbacks": {}
    },
    "Div247": {
      "callbacks": {}
    },
    "Div248": {
      "callbacks": {}
    },
    "Flex36": {
      "callbacks": {}
    },
    "Div249": {
      "callbacks": {}
    },
    "Flex38": {
      "callbacks": {}
    },
    "Div253": {
      "callbacks": {}
    },
    "Div254": {
      "callbacks": {}
    },
    "Flex41": {
      "callbacks": {}
    },
    "Div259": {
      "callbacks": {}
    },
    "Div260": {
      "callbacks": {}
    },
    "Flex42": {
      "callbacks": {}
    },
    "Div261": {
      "callbacks": {}
    },
    "Div262": {
      "callbacks": {}
    },
    "Flex43": {
      "callbacks": {}
    },
    "Div263": {
      "callbacks": {}
    },
    "Div264": {
      "callbacks": {}
    },
    "Div250": {
      "callbacks": {}
    },
    "Flex44": {
      "callbacks": {}
    },
    "Div265": {
      "callbacks": {}
    },
    "Div266": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Div267": {
      "callbacks": {}
    },
    "Div268": {
      "callbacks": {}
    },
    "Flex46": {
      "callbacks": {}
    },
    "Div269": {
      "callbacks": {}
    },
    "Div270": {
      "callbacks": {}
    },
    "Flex47": {
      "callbacks": {}
    },
    "Div271": {
      "callbacks": {}
    },
    "Div272": {
      "callbacks": {}
    },
    "Div274": {
      "callbacks": {}
    },
    "Div275": {
      "callbacks": {}
    },
    "Div276": {
      "callbacks": {}
    },
    "Div277": {
      "callbacks": {}
    },
    "Flex48": {
      "callbacks": {}
    },
    "Div278": {
      "callbacks": {}
    },
    "Div279": {
      "callbacks": {}
    },
    "Flex50": {
      "callbacks": {}
    },
    "Div282": {
      "callbacks": {}
    },
    "Div285": {
      "callbacks": {}
    },
    "Div286": {
      "callbacks": {}
    },
    "Div287": {
      "callbacks": {}
    },
    "Div283": {
      "callbacks": {}
    },
    "Div303": {
      "callbacks": {}
    },
    "Div300": {
      "callbacks": {}
    },
    "Div301": {
      "callbacks": {}
    },
    "Div302": {
      "callbacks": {}
    },
    "Div284": {
      "callbacks": {}
    },
    "Div299": {
      "callbacks": {}
    },
    "Div296": {
      "callbacks": {}
    },
    "Div297": {
      "callbacks": {}
    },
    "Div298": {
      "callbacks": {}
    },
    "Div304": {
      "callbacks": {}
    },
    "Link1": {
      "custom": {
        "text": "Portfolio Creator.",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link2": {
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link3": {
      "custom": {
        "text": "Book A call",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link4": {
      "custom": {
        "text": "Projects",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link5": {
      "custom": {
        "text": "Blog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link6": {
      "custom": {
        "text": "Services",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image1": {
      "custom": {
        "alt": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "",
        "src": "/app-assets/arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1": {
      "custom": {
        "text": "I design products that delight and inspire people."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "custom": {
        "text": "Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link7": {
      "custom": {
        "text": "Download CV",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link8": {
      "custom": {
        "text": "Book a call",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link9": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image2": {
      "custom": {
        "alt": "",
        "src": "/app-assets/arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "",
        "src": "/app-assets/60ad1c2b0e1d633fc7ef2e69_Group%20160-min-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox4": {
      "custom": {
        "text": "Trusted by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "custom": {
        "alt": "",
        "src": "/app-assets/logoispum.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "custom": {
        "alt": "",
        "src": "/app-assets/logoispum.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "custom": {
        "alt": "",
        "src": "/app-assets/logi2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "",
        "src": "/app-assets/logi3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image18": {
      "custom": {
        "alt": "",
        "src": "/app-assets/logo4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "custom": {
        "text": "SERVICES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "custom": {
        "text": "Design that solves problems, one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "custom": {
        "alt": "",
        "src": "/app-assets/1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "custom": {
        "alt": "",
        "src": "/app-assets/circle-solid.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "custom": {
        "text": " Design Strategy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "",
        "src": "/app-assets/circle-solid.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": " Web and Mobile App Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "custom": {
        "alt": "",
        "src": "/app-assets/circle-solid.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "custom": {
        "text": "Front-end Development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "custom": {
        "alt": "",
        "src": "/app-assets/3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox22": {
      "custom": {
        "text": "Clean and functional"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image32": {
      "custom": {
        "alt": "",
        "src": "/app-assets/circle-solid.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "Device and user friendly"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image33": {
      "custom": {
        "alt": "",
        "src": "/app-assets/circle-solid.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "Efficient and maintainable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image34": {
      "custom": {
        "alt": "",
        "src": "/app-assets/circle-solid.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "custom": {
        "alt": "",
        "src": "/app-assets/2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "custom": {
        "text": "Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image29": {
      "custom": {
        "alt": "",
        "src": "/app-assets/circle-solid.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "custom": {
        "text": "Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "custom": {
        "alt": "",
        "src": "/app-assets/circle-solid.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox21": {
      "custom": {
        "text": "Figma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image31": {
      "custom": {
        "alt": "",
        "src": "/app-assets/circle-solid.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "PROJECTS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "custom": {
        "text": "I bring results.  My clients are proof."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link10": {
      "custom": {
        "text": "View all projects",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image46": {
      "custom": {
        "alt": "",
        "src": "/app-assets/c3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "custom": {
        "text": "Maize Website Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image48": {
      "custom": {
        "alt": "",
        "src": "/app-assets/c2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "custom": {
        "text": "Datadash Product Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "custom": {
        "text": "PRODUCT DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image51": {
      "custom": {
        "alt": "",
        "src": "/app-assets/c1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link11": {
      "custom": {
        "text": "View All",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image52": {
      "custom": {
        "alt": "",
        "src": "/app-assets/arr2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "custom": {
        "text": "BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "custom": {
        "text": "Latest Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link14": {
      "custom": {
        "text": "April 16,2021",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link15": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link16": {
      "custom": {
        "text": "6mins",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link17": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link18": {
      "custom": {
        "text": "Read the article",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image53": {
      "custom": {
        "alt": "",
        "src": "/app-assets/arr2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link25": {
      "custom": {
        "text": "5mins",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link26": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link27": {
      "custom": {
        "text": "April 16,2021",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link28": {
      "custom": {
        "text": "How to build rapport with your web design client",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image55": {
      "custom": {
        "alt": "",
        "src": "/app-assets/arr2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link29": {
      "custom": {
        "text": "Read the article",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link30": {
      "custom": {
        "text": "Read the article",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image56": {
      "custom": {
        "alt": "",
        "src": "/app-assets/arr2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link31": {
      "custom": {
        "text": "Top 6 free websites mock up tools 2021",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link32": {
      "custom": {
        "text": "April 16,2021",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link33": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link34": {
      "custom": {
        "text": "5mins",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link35": {
      "custom": {
        "text": "Read the article",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image57": {
      "custom": {
        "alt": "",
        "src": "/app-assets/arr2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link36": {
      "custom": {
        "text": "Logo design trends to avoid in 2021",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link37": {
      "custom": {
        "text": "April 16,2021",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link38": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link39": {
      "custom": {
        "text": "7mins",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link40": {
      "custom": {
        "text": "Read the article",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image58": {
      "custom": {
        "alt": "",
        "src": "/app-assets/arr2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link41": {
      "custom": {
        "text": "22 best UI designs tools",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link42": {
      "custom": {
        "text": "April 16,2021",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link43": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link44": {
      "custom": {
        "text": "7mins",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox46": {
      "custom": {
        "text": "PRODUCT DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "custom": {
        "text": "That's me!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "custom": {
        "text": "Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image72": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image73": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pic2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image76": {
      "custom": {
        "alt": "",
        "src": "/app-assets/pic3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image77": {
      "custom": {
        "alt": "",
        "src": "/app-assets/pic4.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "custom": {
        "text": "📚  Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link49": {
      "custom": {
        "text": "Stanford University",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link52": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link50": {
      "custom": {
        "text": "MSc (Human Computer Interaction)",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link51": {
      "custom": {
        "text": "• 2013-2015",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link53": {
      "custom": {
        "text": "• 2013-2014",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link54": {
      "custom": {
        "text": "UX Training Bootcamp",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link55": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link56": {
      "custom": {
        "text": "MIT Summer School",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link73": {
      "custom": {
        "text": "California State University",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link74": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link75": {
      "custom": {
        "text": "BSc in Software Engineering",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link76": {
      "custom": {
        "text": "• 2009-2012",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "custom": {
        "text": "💼  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image79": {
      "custom": {
        "alt": "",
        "src": "/app-assets/w1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link79": {
      "custom": {
        "text": "Senior Product Designer",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link77": {
      "custom": {
        "text": "SpaceFleet",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link80": {
      "custom": {
        "text": "• April 2019-Current",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link81": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link83": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link84": {
      "custom": {
        "text": "• April 2016-May 2017",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link85": {
      "custom": {
        "text": "Information Architect",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link82": {
      "custom": {
        "text": "MusicMash",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image80": {
      "custom": {
        "alt": "",
        "src": "/app-assets/w2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link87": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link88": {
      "custom": {
        "text": "• April 2016-May 2017",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link89": {
      "custom": {
        "text": "UI Designer",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link86": {
      "custom": {
        "text": "Kingdom",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image81": {
      "custom": {
        "alt": "",
        "src": "/app-assets/w3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": "TESTIMONIALS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "Word on the street"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image82": {
      "custom": {
        "alt": "",
        "src": "/app-assets/cute1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image83": {
      "custom": {
        "alt": "",
        "src": "/app-assets/coma.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "custom": {
        "text": "Founder, Double Bunch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "custom": {
        "text": "John Frankin"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link91": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link94": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "custom": {
        "text": "FAQ"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox71": {
      "custom": {
        "text": "Frequently asked questions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link99": {
      "custom": {
        "text": "What type of projects do you take on?",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link100": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link105": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link106": {
      "custom": {
        "text": "What is your hourly rate?",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link107": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link108": {
      "custom": {
        "text": "What time-zone do you work in?",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link109": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link110": {
      "custom": {
        "text": "What is the typical timeline for a project?",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link111": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link112": {
      "custom": {
        "text": "How do yoou charge for project?",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link113": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link114": {
      "custom": {
        "text": "What does your design process look like?",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link115": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link116": {
      "custom": {
        "text": "What metrics do you use to measure success?",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link117": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link118": {
      "custom": {
        "text": "What if I need help after project is complete?",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox72": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link119": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link121": {
      "custom": {
        "text": "Portfolio Creator.",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link122": {
      "custom": {
        "text": "hi@thefolio.com",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link123": {
      "custom": {
        "text": "",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link132": {
      "custom": {
        "text": "Dribble",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link133": {
      "custom": {
        "text": "Contact",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link134": {
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link144": {
      "custom": {
        "text": "Experience",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link145": {
      "custom": {
        "text": "Project",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link146": {
      "custom": {
        "text": "Twitter",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link141": {
      "custom": {
        "text": "Service",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link142": {
      "custom": {
        "text": "Blog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link143": {
      "custom": {
        "text": "Instagram",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "custom": {
        "text": "© All rights reserved. Conversionflow. Powered by Webflow / Image License Info / Instructions / Changelog / Style Guide"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
