/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "ใช้",
      "close": "ปิด"
    },
    "header": {
      "sharingNotAvailable": "จะไม่สามารถใช้งานได้ จนกว่าคุณจะแบ่งปันเรื่องราว",
      "edit": "แก้ไข"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "บุ๊คมาร์ค",
        "logoSharing": "โลโก้และการแบ่งปัน",
        "theme": "รูปลักษณ์"
      },
      "bookmarks": {
        "title": "ส่วน",
        "bookmark": "ที่คั่น",
        "intro": "บุ๊คมาร์คจะเชื่อมโยงไปยังส่วนของเรื่องราวและแสดงที่บริเวณส่วนหัว สร้างบุ๊คมาร์คที่กระชับสำหรับส่วนเรื่องราวหลักของคุณ เพื่อช่วยให้ผู้อ่านมุ่งเน้นไปยังส่วนเนื้อหาที่ต้องการได้",
        "sequentialDefault": "ส่วนบรรยาย (ไม่พบข้อความ)",
        "immersiveDefault": "ส่วนข้อมูลหลัก (ไม่พบเนื้อหา)",
        "titleDefault": "ส่วนของชื่อเรื่อง (ไม่พบเนื้อหา)",
        "coverDefault": "ส่วนของปก (ไม่พบเนื้อหา)",
        "coverAppendage": "(ปก)"
      },
      "logoSharing": {
        "logo": "โลโก้",
        "logoButton": "ใช้ ${ESRI} โลโก้",
        "useOrgLogo": "ใช้โลโก้องค์กรของฉัน",
        "useOrgLogoHelp": "ใช้โลโก้ที่จัดทำโดยองค์กรของฉัน",
        "logoLink": "โลโก้ที่เชื่องโยงไปยัง",
        "logoUploadProgress": "การส่งโลโก้อยู่ระหว่างความคืบหน้า",
        "logoUploadSuccess": "การส่งโลโก้ประสบความสำเร็จ",
        "logoUploadError": "การส่งโลโก้ล้มเหลว, สลับกลับไปที่โลโก้ ${ESRI}",
        "customHeaderText": "สโลแกน",
        "taglineLinkDisabledTooltip": "ใส่สโลแกนเพื่อใช้งานการเชื่อมโยง",
        "link": "สโลแกนลิงค์",
        "enableSocialSharing": "แสดงผลปุ่มการแบ่งปัน"
      },
      "appearance": {
        "themeLabel": "หัวข้อ",
        "fontLabel": "ประเภทตัวอักษร",
        "previewLabel": "ภาพตัวอย่าง",
        "fontsTitleLabel": "ชื่อเรื่อง",
        "fontsBodyLabel": "เนื้อหา",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "ปก",
      "creditsLabel": "เครดิต",
      "betaFeedback": "ผลตอบรับ",
      "betaNote": "กรุณาแจ้งให้พวกเราได้รับทราบ เกี่ยวกับความคิดเห็นของคุณ ${APP_NAME} หรือข้อบกพร่องบางอย่างในการทำงาน",
      "notSharedNote": "เรื่องราวของคุณยังไม่ได้แบ่งปัน, มีเพียงคุณเท่านั้นที่สามารถมองเห็นได้",
      "organizationWarning": "เพื่อให้แน่ใจว่าเรื่องราวนี้ผู้ใช้งานอื่นสามารถเรียกดูได้ คุณจะต้องทำการแบ่งปันซีนนี้หรือซีนชั้นข้อมูลอื่นๆ และฝังแอพพลิเคชั่นกับระบบองค์กรของคุณ แผนที่และชั้นข้อมูลต่างๆจะถูกแบ่งปันโดยอัตโนมัติ",
      "publicWarning": "เพื่อให้มั่นใจได้ว่าคนอื่น ๆ สามารถดูเรื่องราวนี้ได้คุณต้องแชร์ฉากฉากเลเยอร์และแอปพลิเคชันฝังตัวกับทุกคน แผนที่และเลเยอร์แผนที่จะถูกแชร์โดยอัตโนมัติ",
      "addTitleNote": "เพิ่มชื่อเรื่องบนหน้าปกเพื่อบันทึก",
      "saveError": "พบข้อผิดพลาดระหว่างการบันทึกเรื่องราวของคุณ",
      "duplicate": "ทำซ้ำกัน",
      "organize": "องค์กร",
      "done": "เสร็จ",
      "invite": "ระหว่างที่คุณกำลังสร้างเรื่องราว, ส่วนงานนี้จะปรากฏขึ้นมา",
      "mystoriestooltip": "ตัวสร้าง Cascade เตือนถึงปัญหาในเรื่องราวของคุณและช่วยคุณแก้ไขปัญหาเหล่านั้น ซีนและแอพพลิเคชั่นต่างๆไม่ได้รับการตรวจสอบ โปรดทำการตรวจสอบด้วยตนเอง"
    },
    "immersiveViewPanel": {
      "transition": "ส่งผ่าน",
      "fade": "ค่อยๆลดลง",
      "fadeSlow": "ค่อยๆลดลงอย่างช้าๆ",
      "swipeVertical": "กวาดในแนวตั้ง",
      "swipeHorizontal": "กวาดในแนวนอน",
      "none": "ไม่มีเลย",
      "disabledConsecutiveSameMedia": "ไม่สามารถใช้งานได้เมื่อมีการเรียกดูที่ต่อเนื่องจากสื่อเดียวกัน",
      "disabledTooltipMap": "เมื่อต้องการใช้การเปลี่ยนแปลงชั้นข้อมูลที่สามารถเรียกดูได้ในทั้งสองวิว จะต้องมีความแตกต่างและมีคุณสมบัติของแผนที่ที่เหมือนกัน",
      "disabledConsecutiveSameMap": "ไม่สามารถใช้งานได้เมื่อมีการเรียกดูที่ต่อเนื่องจากแผนที่เดียวกัน",
      "disabledNotInBeta": "ไม่สามารถใช้งานได้เมื่อมีการเรียกดูที่ต่อเนื่องจากแผนที่เดียวกัน",
      "disabledNonConsecutive": "ไม่สามารถใช้งานได้เนื่องจากสื่อมีการใช้งานจากเหตุการณ์อื่นอยู่",
      "addMedia": "เพิ่มสื่อ",
      "invite": "ขณะที่คุณสร้างข้อมูลหลัก การแสดงผลจะปรากฏที่นี่"
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "รูปลักษณ์",
        "manage": "จัดการ",
        "size": "ขนาด",
        "background": "พื้นหลัง",
        "mobile": "อุปกรณ์สื่อสารเคลื่อนที่",
        "issues": "ปัญหา",
        "fixIssues": "แก้ไขปัญหา"
      },
      "manage": {
        "changeMedia": "เปลี่ยนสื่อ",
        "edit": "แก้ไข",
        "editAside": "เปิดแท็บบราวเซอร์ใหม่ภายหลังการบันทึกการแก้ไข  บันทึกและใส่เพิ่มเรื่องราวใหม่เมื่อมีการเปลี่ยนแปลง",
        "remove": "ลบออก"
      },
      "appearance": {
        "homeView": "การเรียกดูครั้งแรก",
        "audio": "เสียง",
        "on": "เปิด",
        "muted": "ปิดเสียง",
        "volumeAside": "วิดีโอนี้จะเล่นเองโดยอัตโนมัติเมื่อผู้อ่านเข้ามาในหน้าต่างนี้ ถ้าคุณปิดเสียงไว้ ผู้อ่านจะไม่สามารถใช้งานได้",
        "view": "วิว",
        "resetLocation": "ตั้งค่าสถานที่ตั้งใหม่",
        "resetLayers": "ตั้งค่าชั้นข้อมูลใหม่",
        "clearPopup": "ยกเลิก Pop-Up",
        "interaction": "ปฏิสัมพันธ์",
        "interactionDisabled": "ปิดการทำงานแบบปฏิสัมพันธ์",
        "buttonToEnable": "ปุ่มเปิดใช้งาน",
        "interactionEnabled": "เปิดการทำงานแบบปฏิสัมพันธ์",
        "interactionAside": "เมื่อสัมผัสอุปกรณ์จะแสดงปุ่มการทำงานแบบปฏิสัมพันธ์",
        "slide": "สไลด์",
        "noSlides": "ไม่มีสไลด์ที่สามารถใช้งานได้",
        "mapExtentPrompt": "อัพเดทแผนที่เพื่อบอกเล่าเรื่องราวของคุณ คลิ๊กที่เครื่องหมายถูกเพื่อบันทึกการเปลี่ยนแปลง"
      },
      "sectionAppearance": {
        "layout": "หน้ากระดาษ",
        "theme": "หัวข้อ"
      },
      "size": {
        "small": "เล็ก",
        "medium": "กลาง",
        "large": "ใหญ่",
        "noCrop": "ไม่ควรตัดภาพในแนวยาว",
        "noCropTallTooltip": "การไม่ครอบตัดภาพที่สูงทำให้เกิดผลอย่างมากสำหรับผู้อ่านที่ต้องเลื่อนเพื่อดูภาพทั้งหมด"
      },
      "background": {
        "noCrop": "ไม่สามารถตัดได้",
        "mostImportantPart": "เลือกจุดที่สำคัญที่สุด",
        "cropExplanationImmersive": "เลือกจุดบนรูปภาพเพื่อเลือกลักษณะที่จะถูกครอบตัดด้วยขนาดหน้าจอที่แตกต่างกัน จุดที่คุณเลือกจะมองเห็นได้เสมอ เลือก 'อย่าตัด' หากภาพของคุณต้องมองเห็นได้อย่างเต็มที่",
        "cropExplanation": "เลือกจุดบนรูปภาพเพื่อเลือกลักษณะที่จะถูกครอบตัดด้วยขนาดหน้าจอที่แตกต่างกัน จุดที่คุณเลือกจะมองเห็นได้เสมอ",
        "color": "สี",
        "previews": "พรีวิว"
      },
      "altMedia": {
        "alternativeMedia": "สื่อสำรอง",
        "explanation": "สื่อบางประเภทไม่ได้รับการสนับสนุนหรือทำงานได้ไม่ดีบนอุปกรณ์เคลื่อนที่ ใช้แผงควบคุมนี้เพื่อเลือกรายการอื่นที่เหมาะกับอุปกรณ์เคลื่อนที่ซึ่งจะปรากฏในตำแหน่งของสื่อประเภทนี้เมื่อเรื่องราวของคุณแสดงบนโทรศัพท์หรือแท็บเล็ต",
        "changeAltImage": "เปลี่ยนรูปภาพ",
        "uploadAltImage": "เพิ่มรูปภาพ"
      }
    },
    "imageGallery": {
      "addImage": "เพิ่มรูปภาพอื่น",
      "moveBackward": "ถอยกลับไปข้างหลัง",
      "moveForward": "เลื่อนไปข้างหน้า"
    },
    "cover": {
      "titlePrompt": "ใส่ชื่อเรื่องของคุณ",
      "subtitlePrompt": "เลื่อนลงมาเพื่อเริ่มต้นหรือใส่ชื่อเรื่องรอง",
      "mediaPlaceholder": "เพิ่มรูปภาพหรือวิดีโอ",
      "saveError": "บันทึกไม่สำเร็จ คุณมีชื่อเรื่องนี้แล้ว"
    },
    "credits": {
      "sectionInvite": "เพิ่มส่วนเครดิต",
      "warning": "ต้องกรอกทั้งสองแถวแนวตั้ง",
      "content": "หัวข้อ",
      "source": "แหล่งที่มา",
      "linkPrompt": "ลิงค์อื่นๆ",
      "introductionPlaceholder": "ใส่คำนำเรื่องอื่นๆในส่วนเครดิต"
    },
    "immersive": {
      "titleConfig": {
        "theme": "หัวข้อ"
      },
      "panelConfig": {
        "position": "ตำแหน่ง",
        "theme": "หัวข้อ",
        "size": "ขนาด",
        "background": "พื้นหลัง",
        "layout": "กำลังเลื่อน (สำหรับทุกหน้าต่าง)"
      }
    },
    "title": {
      "placeholder": "ใส่ชื่อเรื่อง..."
    },
    "media": {
      "imageUpload": "อยู่ระหว่างการอัพโหลดข้อมูลภาพ",
      "imageUploadSuccess": "อัพโหลดข้อมูลภาพสำเร็จ",
      "imageUploadFail": "อัพโหลดข้อมูลภาพไม่สำเร็จ"
    },
    "controller": {
      "sectionOrganize": "ส่วนต่างๆที่คุณจัดการไว้",
      "immersiveOrganize": "วิวต่างๆที่คุณจัดการไว้",
      "sectionDelete": "ส่วนต่างๆที่คุณลบทิ้งไป",
      "viewDelete": "วิวต่างๆที่คุณลบทิ้งไป"
    },
    "notification": {
      "cancel": "ยกเลิก",
      "close": "ปิด",
      "undo": "ย้อนกลับ"
    },
    "sections": {
      "sequence": "การเล่าเรื่อง",
      "immersive": "ที่น่าจดจำ",
      "title": "ชื่อ"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "ภาพ",
        "webmap": "แผนที่",
        "webscene": "ซีน",
        "video": "วิดีโอ",
        "content": "หัวข้อ",
        "webpage": "หน้าเว็บ"
      },
      "placeholders": {
        "generic": "ไม่สามารถเข้าสู่หัวข้อนี้ได้",
        "deleted": "รายการนี้ถูกลบแล้ว",
        "inaccessible": "ไม่สามารถเข้าสู่หัวข้อนี้ได้",
        "unauthorized": "คุณยังไม่ได้รับอนุญาตให้เข้าถึงหัวข้อนี้",
        "unshared": "รายการนี้ไม่ได้แชร์เหมือนกับเรื่องราวของคุณ",
        "othersUnshared": "รายการนี้ไม่ได้แชร์เหมือนกับเรื่องราวของคุณ",
        "subscriptionContent": "แผนที่นี้ประกอบด้วยชั้นข้อมูลของสมาชิก",
        "premiumContent": "แผนที่นี้ประกอบด้วยชั้นข้อมูลพรีเมี่ยม",
        "secureService": "แผนที่นี้ประกอบด้วยชั้นข้อมูลซีน"
      },
      "contentIssues": {
        "noAltImage": "สื่อไม่ได้รับการสนับสนุนบนอุปกรณ์เคลื่อนที่",
        "altImageBroken": "ไม่สามารถเข้าถึงภาพสำรองที่กำหนดไว้สำหรับรายการสื่อนี้"
      },
      "contentWarnings": {
        "noAltImage": "สื่อประเภทนี้ไม่ได้รับการสนับสนุนบนอุปกรณ์เคลื่อนที่ ระบุภาพสำรองที่จะแสดงเมื่อมีการดูเรื่องราวบนอุปกรณ์เคลื่อนที่",
        "noAltImageAlt": "สื่อประเภทนี้ไม่ได้รับการสนับสนุนบนอุปกรณ์เคลื่อนที่ บนแท็บบนมือถือให้รูปภาพอื่นที่จะปรากฏเมื่อมีการดูเรื่องราวบนอุปกรณ์เคลื่อนที่"
      },
      "mapIssues": {
        "fixButton": "แก้ไขปัญหา",
        "nofixButton": "ปัญหา",
        "mapLabel": "แผนที่:",
        "summaries": {
          "unshared": "หัวข้อที่ไม่ได้แบ่งปัน",
          "othersUnshared": "หัวข้อที่ไม่ได้แบ่งปันของผู้อื่น",
          "subscriptionContent": "เนื้อหาการสมัครสมาชิก",
          "premiumContent": "เนื้อหาพรีเมี่ยม",
          "secureContent": "หัวข้อที่ปลอดภัย",
          "deleted": "หัวข้อที่ถูกลบ",
          "inaccessible": "หัวข้อที่ไม่สามารถเข้าถึงได้",
          "unauthorized": "หัวข้อที่ไม่ได้รับอนุญาตให้เข้าถึงได้"
        },
        "descriptions": {
          "unshared": "หัวข้อนี้ไม่ได้ทำการแบ่งปันเช่นเดียวกับเรื่องราวของคุณ",
          "othersUnshared": "หัวข้อนี้เป็นของผู้อื่นและไม่ได้ทำการแบ่งปันเช่นเดียวกับเรื่องราวของคุณ",
          "othersUnsharedAuthorized": "หัวข้อนี้มีเจ้าของเป็นผู้ใช้งานอื่น แต่คุณสามารถทำการแบ่งปันได้",
          "inaccessible": "ไม่สามารถเข้าสู่หัวข้อนี้ได้",
          "deleted": "หัวข้อนี้ถูกลบทิ้งไปแล้ว",
          "unauthorized": "คุณยังไม่ได้รับอนุญาตให้เข้าถึงหัวข้อนี้",
          "popupFeatureLayer": "ป๊อปอัพแผ่นชั้นข้อมูลมาจากชิ้นข้อมูลที่ไม่ได้ทำการแบ่งปันเช่นเดียวกับเรื่องราวของคุณ",
          "subscriptionContent": "คุณจำเป็นต้องทำการอนุญาตให้ใช้งานหัวข้อต่างๆแบบสาธารณะ",
          "premiumContent": "คุณจำเป็นต้องทำการอนุญาตให้ใช้งานหัวข้อพิเศษแบบสาธารณะ",
          "secureService": "ไม่สามารถเข้าถึงหัวข้อที่ปลอดภัยจากการอ่านของคุณ.",
          "missingItemWarning": "รายการที่เกี่ยวข้องกับชั้นข้อมูลนี้ได้ถูกลบออก"
        },
        "tooltips": {
          "unshared": "คลิ๊กเพื่อเรียนรู้เพิ่มเติมเกี่ยวกับการแบ่งปัน",
          "othersUnshared": "คุณไม่ได้รับอนุญาตให้แบ่งปันหัวข้อของผู้อื่น สอบถามเจ้าของเพื่อทำการแบ่งปัน หรือนำแผนที่นั้นออกจากเรื่องราวของคุณ หรือแก้ไขโดยการนำชั้นข้อมูลนั้นออกไป คลิ๊กเพื่อเรียนรู้เพิ่มเติมเกี่ยวกับการแก้ไขแผนที่",
          "inaccessible": "นำแผนที่นี้ออกจากเรื่องราวของคุณหรือแก้ไขเพื่อนำชั้นข้อมูลที่ไม่สามารถเข้าถึงได้ออกไป คลิ๊กเพื่อเรียนรู้เพิ่มเติมเกี่ยวกับการแก้ไขแผนที่",
          "deleted": "นำแผนที่นี้ออกจากเรื่องราวของคุณหรือแก้ไขเพื่อนำชั้นข้อมูลที่ขาดหายออกไป คลิ๊กเพื่อเรียนรู้เพิ่มเติมเกี่ยวกับการแก้ไขแผนที่",
          "unauthorized": "นำแผนที่นี้ออกจากเรื่องราวของคุณหรือแก้ไขเพื่อนำชั้นข้อมูลที่ไม่ได้รับอนุญาตให้เข้าถึงออกไป คลิ๊กเพื่อเรียนรู้เพิ่มเติมเกี่ยวกับการแก้ไขแผนที่",
          "popupFeatureLayer": "ป๊อปอัพแผ่นชั้นข้อมูลมาจากชิ้นข้อมูลที่ไม่ได้ทำการแบ่งปันเช่นเดียวกับเรื่องราวของคุณ",
          "subscriptionContent": "หัวข้อเนื้อหาไม่ได้มีการซื้อเครดิต คลิ๊กเพื่อเรียนรู้เพิ่มเติม",
          "premiumContent": "เครดิตจะชาร์จเข้าองค์กรของคุณ ในแต่ละครั้งที่มีการเรียกดูชั้นข้อมูลพรีเมี่ยม คลิ๊กเพื่อเรียนรู้เพิ่มเติม",
          "secureService": "นำหัวข้อที่ปลอดภัยออกจากเรื่องราวของคุณ หรือคลิ๊กเพื่อเรียนรู้เกี่ยวกับการอนุญาตเข้าใช้หัวข้อที่ปลอดภัยจากบุคคลอื่น",
          "missingItemWarning": "ชั้นข้อมูลยังคงทำงานอยู่ แต่สัญลักษณ์, ป๊อปอัพ หรือชื่ออาจมีการเปลี่ยนแปลง กรุณายืนยันว่าชั้นข้อมูลที่ปรากฏอยู่ตรงกับความต้องการ หรือลบออกจากเรื่องราวของคุณ"
        },
        "fixButtons": {
          "share": "แบ่งปัน",
          "hide": "ซ่อน",
          "authorize": "อณุญาต",
          "remove": "ลบออก",
          "help": "ขอรับความช่วยเหลือ",
          "ignore": "เพิกเฉย",
          "confirm": "ยืนยัน",
          "edit": "แก้ไขแผนที่"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "แผนที่และบางชั้นข้อมูลมีการถูกแบ่งปัน.",
          "alsoSharedMaps": "บางแผนที่มีการถูกแบ่งปัน.",
          "alsoSharedLayers": "บางชั้นข้อมูลมีการถูกแบ่งปัน.",
          "sharedOthersContent": "คุณเคยใช้สิทธิ์ของการเป็นผู้ดูแลระบบเพื่อแบ่งปันเนื้อหาของผู้อื่น"
        }
      },
      "storyHealth": {
        "healthy": "ไม่พบประเด็น",
        "notHealthy": "แก้ไขปัญหา",
        "warnings": "ดูคำเตือน"
      }
    }
  }
});