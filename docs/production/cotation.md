### <span style="color:green">GET</span>  Payment Methods

````
BASE_URL/v1/misc/payin/services
````

## HEADERS

| Authorization | Basic TOKEN |
| ------------- | ----------- |



## Example Request

```curl


curl --location 'BASE_URL/v1/misc/payin/services' \
--header 'Authorization: Basic TOKEN'

```

## Example Response

::: details Body  

```json


{
  "code": 200,
  "message": "OK",
  "data": {
    "BJ": [
      {
        "name": "CREDIT_CARD",
        "display_name": "Credit Card",
        "channel": "credit_card",
        "type": "direct",
        "country": {
          "name": "Benin",
          "code": "BJ",
          "prefix": "+229"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "MOOV_BJ",
        "display_name": "Moov Benin Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Benin",
          "code": "BJ",
          "prefix": "+229"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "MTN_BJ",
        "display_name": "MTN Benin Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Benin",
          "code": "BJ",
          "prefix": "+229"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      }
    ],
    "BF": [
      {
        "name": "CREDIT_CARD",
        "display_name": "Credit Card",
        "channel": "credit_card",
        "type": "direct",
        "country": {
          "name": "Burkina Faso",
          "code": "BF",
          "prefix": "+226"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "ORANGE_BF",
        "display_name": "Orange Burkina Faso Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Burkina Faso",
          "code": "BF",
          "prefix": "+226"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "MOOV_BF",
        "display_name": "Moov Burkina Faso Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Burkina Faso",
          "code": "BF",
          "prefix": "+226"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      }
    ],
    "CI": [
      {
        "name": "CREDIT_CARD",
        "display_name": "Credit Card",
        "channel": "credit_card",
        "type": "direct",
        "country": {
          "name": "Côte d'Ivoire",
          "code": "CI",
          "prefix": "+225"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "MOOV_CI",
        "display_name": "Moov Côte d'Ivoire Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Côte d'Ivoire",
          "code": "CI",
          "prefix": "+225"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "MTN_CI",
        "display_name": "MTN Côte d'Ivoire Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Côte d'Ivoire",
          "code": "CI",
          "prefix": "+225"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "ORANGE_CI",
        "display_name": "Orange Côte d'Ivoire Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Côte d'Ivoire",
          "code": "CI",
          "prefix": "+225"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      }
    ],
    "CM": [
      {
        "name": "CREDIT_CARD",
        "display_name": "Credit Card",
        "channel": "credit_card",
        "type": "direct",
        "country": {
          "name": "Cameroon",
          "code": "CM",
          "prefix": "+237"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "MTN_CM",
        "display_name": "MTN Cameroon Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Cameroon",
          "code": "CM",
          "prefix": "+237"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "ORANGE_CM",
        "display_name": "Orange Cameroon Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Cameroon",
          "code": "CM",
          "prefix": "+237"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      }
    ],
    "ML": [
      {
        "name": "CREDIT_CARD",
        "display_name": "Credit Card",
        "channel": "credit_card",
        "type": "direct",
        "country": {
          "name": "Mali",
          "code": "ML",
          "prefix": "+223"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "MOOV_ML",
        "display_name": "Moov Mali Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Mali",
          "code": "ML",
          "prefix": "+223"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "ORANGE_ML",
        "display_name": "Orange Mali Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Mali",
          "code": "ML",
          "prefix": "+223"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      }
    ],
    "SN": [
      {
        "name": "CREDIT_CARD",
        "display_name": "Credit Card",
        "channel": "credit_card",
        "type": "direct",
        "country": {
          "name": "Senegal",
          "code": "SN",
          "prefix": "+221"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "FREE_SN",
        "display_name": "Free Senegal Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Senegal",
          "code": "SN",
          "prefix": "+221"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "ORANGE_SN",
        "display_name": "Orange Senegal Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Senegal",
          "code": "SN",
          "prefix": "+221"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      }
    ],
    "TG": [
      {
        "name": "CREDIT_CARD",
        "display_name": "Credit Card",
        "channel": "credit_card",
        "type": "direct",
        "country": {
          "name": "Togo",
          "code": "TG",
          "prefix": "+228"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "MOOV_TG",
        "display_name": "Moov Togo Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Togo",
          "code": "TG",
          "prefix": "+228"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      },
      {
        "name": "TMONEY_TG",
        "display_name": "T-Money Togo Mobile Money",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Togo",
          "code": "TG",
          "prefix": "+228"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Make sure you have enough balance.",
          "after_payment_instructions": "Check your account for the transaction details."
        }
      }
    ]
  }
}

```


:::


::: details Headers (12)

 *Server*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      nginx/1.25.1 

 *Content-Type*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   application/json


 *Transfer-Encoding*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      chunked

 *Connection*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  keep-alive
 
 *Vary*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Accept-Encoding



 *X-Powered-By*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  PHP/8.2.7


 *Cache-Control*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; no-cache, private

 
 *Date*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Mon, 26 Jun 2023 19:54:39 GMT
 

  *X-RateLimit-Limit*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  600

  *X-RateLimit-Remaining*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  599

*Access-Control-Allow-Origin*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  *


*Content-Encoding*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  gzip

  
 



:::
