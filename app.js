{
  "name":"DULLAH MD BOT V2 UPDATE",
  "description":"Best WhatsApp Bot Developed By Dulla Contact Us 255716945971 Thank you for choose Dullah Md",
  "keywords":["bot","node","baileys","whatsapp"],
  "logo":"https://telegra.ph/file/bb24465612098159bb5a9.jpg",
  "repository":"https://github.com/abdallahsalimjuma/Dullah_Md",
  "succes_url":"/",
  "stack":"container",
  "env":{
    "PREFIX":
    {
      "description":"choose your prefix of bot",
      "value":".",
      "required":true
    },
    "AUTO_READ_STATUS":
    {
      "description":"Your contact status will be read automatically(type yes to active or no to deactive  ; don't write in capital letter)",
      "value":"yes",
      "required":false
    }, "AUTO_DOWNLOAD_STATUS":
    {
      "description":"Your contact status will be download automatically and send to you(type yes to active or no to deactive ; don't write in capital letter)",
      "value":"no",
      "required":false
    }
    ,
     "PM_PERMIT" :
     {
      "description":"Other user can't use your bot in pm (type yes to active or no to deactive ; don't write in capital letter)",
      "value":"no",
      "required":true
    }
    ,
    "BOT_NAME" : {
       
      "description":"put A name for your bot",
      "value":"DULLAH MD 🌟",
      "required":false

    } ,
     "BOT_MENU_LINKS" : {
    
      "description":"add one or many link for your bot menu  ; eg : url1,url2,url3.....",
      "value":"https://telegra.ph/file/bb24465612098159bb5a9.jpg",
      "required":false
       
     },
    "PUBLIC_MODE":
    {
      "description":"type yes to put your bot on public mode or no to put it on private mod",
      "value":"no",
      "required": true 
    }
	,
    "HEROKU_APY_KEY": {
    "description": "insert your heroku api-key (this is optionnal)",
     "required" :true
    },
  "HEROKU_APP_NAME": {
    "description": "insert your heroku APP NAME (this is optionnal)",
     "required" :true
    }  
	  ,
    "SESSION_ID":
    {
      "description":"put your session ID , the code you receive after scanning Qr code",   
      "value":"",
      "required":true
      
    },
    "OWNER_NAME":
    {
    
    "desc": "Your Name",
    "required": false,
    "value": "DULLAH👊"
  },
    "NUMERO_OWNER":
  {
    
    "desc": "Your number , dont put '+' and put you area code(exemple of togo '228')",
    "required":false,
    "value": "255716945971"
	  
  },
    "WARN_COUNT":
  {
    "desc": "this is the limit of warn for warning commandes",
    "required": false,
    "value": "5"
  },
  "STARTING_BOT_MESSAGE":
  {
    "description": "if you don't want startting-bot-message put no else put yes",
    "required": true,
    "value": "no"
  },
  "PRESENCE":{
    "description":"Mark your presence: 1 to indicate that you are online even if you are not. 2 to indicate that you are currently typing a message. 3 to indicate that you are currently recording an audio. Or leave the field blank to indicate your real state.",
    "value":"1",
    "required": true 
  },
  "ANTI_DELETE_MESSAGE" : {
    "description": "if you want to enable anti delete message put yes else put no",
    "value": "yes",
    "required": true 
  }
  },

  "formation": {
		"worker": {
			"quantity": 1,
			"size": "basic"
		}
	},

  "addons":[
    {
      "plan":"heroku-postgresql"
    }
  ]
  }
