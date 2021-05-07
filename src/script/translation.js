function checkLanguage() {
    if (document.cookie.split(';').some((item) => item.includes('lang=th'))) {
        console.log('Rendering with Thai language')
        return ('th');
    } else if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
        console.log('Rendering with English language')
        return ('en');
    } else {
        console.warn('Language cookie check returned nothing!')
        return (null);
    }
}

var translation = {
    'index': {
        'welcome': {
            'th': 'ยินดีต้อนรับสู่อีโมเชียล',
            'en': 'Welcome to Emocial',
        },
        'language_select': {
            'title': {
                'th': 'เลือกภาษา',
                'en': 'Choose your language',
            },
            'choice': {
                'th': 'ไทย',
                'en': 'English',
            },
        },
    },
    'menu': {
        'home': {
            'th': 'หน้าหลัก',
            'en': 'Home',
        },
        'test': {
            'th': 'วิเคราะห์',
            'en': 'Test',
        },
        'about': {
            'th': 'เกี่ยวกับ',
            'en': 'About',
        },
        'history': {
            'th': 'ประวัติ',
            'en': 'History',
        },
        'settings': {
            'th': 'การตั้งค่า',
            'en': 'Settings',
        },
        'change_lang': {
            'th': 'เปลี่ยนภาษา',
            'en': 'Language',
        },

    },
    'home': {
        'welcome': {
            'title': {
                'th': 'ยินดีต้อนรับสู่อีโมเชียล!',
                'en': 'Welcome to Emocial!',
            },
            'desc': {
                'th': 'เราจะคำนวณโอกาสที่คุณอาจจะมีโรคซึมเศร้าผ่านการวิเคราะห์ทวีตจากบัญชีทวิตเตอร์ของคุณ คุณสามารถเริ่มใช้โปรแกรมอีโมเชียลได้โดยกดปุ่มด้านล่าง',
                'en': 'We will take your recent tweets and the result from your depression test. Then, we will analyze if you have any risk of having depression. You can start quickly by pressing the button right below.',
            },
            'button': {
                'th': 'เริ่มใช้อีโมเชียล',
                'en': 'Start',
            },
            'link': {
                'th': 'เรียนรู้เพิ่มเติม',
                'en': 'Learn more',
            },
        },
        'depression': {
            'title': {
                'th': 'ขยายความ "โรคซึมเศร้า"',
                'en': 'What is depression?',
            },
            'desc': {
                'th': ' โรคซึมเศร้าเป็นความเจ็บป่วยทางจิตที่พบบ่อยชนิดหนึ่ง ซึ่งส่งผลต่อความคิดและความรู้สึกของคุณ และอาจส่งผลกระทบต่อทั้งทางร่างกายและจิตใจ อาการของโรคซึมเศร้าอาจแตกต่างกันขึ้นอยู่กับหลายปัจจัย โดยอาการที่พบบ่อย คือ ความเศร้าอย่างต่อเนื่องและการสูญเสียความสนใจในกิจกรรมที่ผู้ป่วยเคยเพลิดเพลิน อาการที่พบบ่อยอื่นๆ ได้แก่ ความผิดปกติของการกิน การนอนหลับ ความโกรธ ความเหนื่อย ความรู้สึกไร้ค่า และการทำร้ายตัวเอง',
                'en': 'Depression is a common mental illness that affects how you think and feel. Its primary symptoms include constant sadness, and can affect you both physically and mentally. Depression can be different depending on many factors. The common symptoms are constant sadness and loss of interest in activities that patients used to enjoy. Other common symptoms are eating disorders, irregular sleep, anger, and exhaustion; feeling worthless, and self-harm.',
            },
            'link': {
                'th': 'ต่อไป',
                'en': 'Next',
            }
        },
        'help': {
            'title': {
                'th': 'ถ้ารู้ว่าคนที่เรารักอาจเป็นโรคซึมเศร้า ควรจะบอกอย่างไรดี',
                'en': 'What should I do if I think someone has depression?',
            },
            'desc': {
                'th': 'คนที่บอกควรเป็นคนที่มีความสัมพันธ์ใกล้ชิดกับผู้มีอาการ อย่าบอกผู้มีอาการตรงๆ แต่ค่อยๆ อธิบายว่าผู้นั้นเปลี่ยนแปลงไปอย่างไรและเหตุผลอื่นๆ ที่คุณคิดว่าผู้นั้นมีภาวะซึมเศร้า อย่างไรก็ตามอย่าวินิจฉัยด้วยตนเองและควรปรึกษาจิตแพทย์',
                'en': 'The person who tells them should be the person who has a close relationship with them. Don\'t tell them straight away but slowly explain how they have changed and other reasons why you think they have depression. However, don\'t self diagnose, and consult the psychiatrist instead.',
            },
            'link': {
                'th': 'กลับสู่ด้านบน',
                'en': 'Back',
            }
        },
    },
    'select': {
        'title': {
            'th': 'เลือกวิธีการวิเคราะห์',
            'en': 'Select a detection method',
        },
        'recommend': {
            'th': 'หมอของท่านแนะนำ: ',
            'en': 'Your doctor recommends: ',
        },
        'handle': {
            'th': '@แฮนเดิล',
            'en': '@handle',
        },
        'upload': {
            'title': {
                'th': 'อัพโหลดจากบัญชี',
                'en': 'Upload your tweets',
            },
            'desc': {
                'th': 'ระบบของเราจะอ่านทวีตในบัญชีทวิตเตอร์ที่พิมพ์เข้ามาด้านล่าง และวิเคราะห์โอกาสที่ท่านอาจจะมีโรคซึมเศร้า',
                'en': 'After you enter your Twitter® handle, our algorithm will analyze your Tweets® for risk of depression.',
            },
        },
        'compose': {
            'title': {
                'th': 'เขียนความรู้สึก',
                'en': 'Compose a tweet',
            },
            'desc': {
                'th': 'หากท่านเลือกใช้วิธีนี้ เราจะให้ที่ที่ท่านสามารถเขียนทุกสิ่งที่ท่านกำลังคิดอยู่ แล้วระบบจะวิเคราะห์โอกาสที่ท่านอาจจะมีโรคซึมเศร้าจากข้อความนั้น',
                'en': 'Write down whatever is on your mind, then our algorithm will analyze your text for risk of depression.',
            },
        },
        'questionnaire': {
            'title': {
                'th': 'ทำแบบสอบถาม',
                'en': 'Do a questionare',
            },
            'desc': {
                'th': 'ตอบคำถามปลายเปิด 2 คำถาม เพื่อให้เราเข้าใจความรู้สึกท่านได้ดีมากขึ้น',
                'en': 'Answer our questionare of open-ended questions.',
            },
        },
        'start': {
            'th': 'ใช้วิธีนี้',
            'en': 'Start',
        }
    },
    'compose': {
        'label': {
            'th': 'เล่ามาได้เลยด้านล่าง',
            'en': 'Tell us your story',
        },
        'submit': {
            'th': 'ส่ง',
            'en': 'Submit',
        },
    },
    'questionnaire': {
        'one': {
            'th': 'โปรดเล่า 2 สัปดาห์ที่ผ่านมา',
            'en': 'Tell us about the past 2 weeks of your life',
        },
        'two': {
            'th': 'หากท่านหมดความสนใจในสิ่งที่เคยชอบ เบื่ออาหาร นอนไม่หลับ หรือมีความคิดที่จะทำร้ายตัวเอง โปรดเล่ามาด้านล่าง',
            'en': 'Do you have any of these problems: loss of excitement in hobbies you used to enjoy, loss of appetite, difficulties sleeping, exhaustion, self-harming thoughts or behaviour? Please tell us about it.',
        },
        'next': {
            'th': 'ต่อไป',
            'en': 'Next',
        },
        'submit': {
            'th': 'ส่ง',
            'en': 'Submit',
        },
    },
    'result': {
        'loading': {
            'th': 'ระบบของเรากำลังวิเคราะห์ข้อความของท่าน กรุณารอสักครู่',
            'en': 'Our server is analyzing you answer. Sit tight!'
        },
        'title': {
            'th': 'ผลลัพธ์',
            'en': 'Result',
        },
        'positive': {
            'th': 'ผลลัพธ์การวิเคราะห์ข้อความของท่านโดยรวมปกติ',
            'en': 'We have not detected any serious issues.'
        },
        'negative': {
            'th': 'การวิเคราะห์เสร็จสิ้น หมอของท่านจะติดต่อท่านภายหลัง',
            'en': 'Your answer has been processed. Your doctor will get back to you shortly.'
        },
        'back': {
            'th': 'กลับสู่หน้าหลัก',
            'en': 'Back to Home',
        }
    },
    'history': {
        'today': {
            'th': 'วันนี้',
            'en': 'Today',
        },
        'overall': {
            'th': 'ผลโดยรวม',
            'en': 'Overall ',
        },
        'positive': {
            'th': 'เป็นบวก',
            'en': 'positive',
        },
        'negative': {
            'th': 'เป็นลบ',
            'en': 'negative',
        },
    },
    'details': {
        'qual_noun': {
            'th': 'ทวีต',
            'en': 'tweets',
        },
        'total': {
            'th': 'ทวีตรวม',
            'en': 'Total',
        },
        'positive': {
            'th': 'ผลเป็นบวก',
            'en': 'Positive',
        },
        'negative': {
            'th': 'ผลเป็นลบ',
            'en': 'Negative',
        },
        'increased': {
            'th': 'เพิ่มขึ้น ',
            'en': '+',
        },
        'decreased': {
            'th': 'ลดลง ',
            'en': '-',
        },
        'from_prev': {
            'th': '',
            'en': ' from previous',
        }
    },
    'settings': {
        'menu': {
            'account': {
                'th': 'บัญชี',
                'en': 'Account',
            },
            'language': {
                'th': 'ภาษา',
                'en': 'Language',
            },
            'watchlist': {
                'th': 'รายผู้ป่วย',
                'en': 'Watchlist',
            }
        },
        'account': {
            'login': {
                'th': 'เข้าสู่ระบบ',
                'en': 'Log in',
            },
            'signup': {
                'th': 'สร้างบัญชี',
                'en': 'Sign up',
            },
            'name': {
                'th': 'ชื่อบัญชี',
                'en': 'Username',
            },
            'type': {
                'title': {
                    'th': 'ประเภทผู้ใช้',
                    'en': 'I\'m a…',
                },
                'doctor': {
                    'th': 'แพทย์',
                    'en': 'Doctor',
                },
                'patient': {
                    'th': 'ผู้รับการรักษา',
                    'en': 'Patient',
                },
            },
            'save': {
                'th': 'บันทึก',
                'en': 'Save',
            },
            'log_out': {
                'th': 'ออกจากระบบ',
                'en': 'Log out',
            },
        },
        'watchlist': {
            'title': {
                'th': 'รายชื่อผู้ป่วย',
                'en': 'Watchlist',
            },
            'remove_patients': {
                'th': 'นำผู้ป่วยออกจากรายชื่อ',
                'en': 'Remove patients',
            },
            'add_patients': {
                'th': 'เพิ่มผู้ป่วย',
                'en': 'Add patients',
            },
        },
    },
    'not_found': {
        'title': {
            'th': 'ไม่มีหน้าที่เรียกหา',
            'en': 'Not Found',
        },
        'desc': {
            'th': 'ดูเหมือนว่าที่อยู่ที่ท่านได้ไม่มีอยู่จริง ถ้าคุณคลิกอะไรในแอปพลิเคชั่นของเราซึ่งนำคุณมาสู่จุดๆ นี้ละก็… อาจจะมีฆาตกรรมเกิดขึ้นวันนี้',
            'en': 'Looks like the link leads to nowhere. Oh well, time to kill one of our developers who did this.',
        },
        'link': {
            'th': 'กลับสู่หน้าหลัก',
            'en': 'Back to Home',
        },
    },
    'img_alt': {
        'depression': {
            'th': 'ผู้หญิงกำลังคุยกับคนที่หันหลังอยู่',
            'en': 'A women talking to a nondescript person',
        },
        'help': {
            'th': 'ผู้หญิงสองคนกำลังคุยกับขณะที่กำลังนั่งอยู่บนโซฟา',
            'en': 'Two women sat on couches talking to each other',
        },
        'avatar': {
            'th': 'รูปผู้ใช้',
            'en': 'User avatar',
        },
    },
};

export { checkLanguage, translation };