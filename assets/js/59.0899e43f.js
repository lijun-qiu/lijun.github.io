(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{576:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"突然想试试将图片生成视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#突然想试试将图片生成视频"}},[s._v("#")]),s._v(" 突然想试试将图片生成视频")]),s._v(" "),t("p",[s._v("python有很好的模块能简单实现,记得先安装模块")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" moviepy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("editor "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ImageSequenceClip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" AudioFileClip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" CompositeAudioClip\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" cv2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取图像文件列表")]),s._v("\nimage_folder "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./imgs/video/img'")]),s._v("\nimages "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("img "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" img "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("listdir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("image_folder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" img"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("endswith"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".jpg"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置视频参数")]),s._v("\nduration "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 视频时长（秒）")]),s._v("\nfps "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 视频帧率")]),s._v("\nnum_frames "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("duration "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" fps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 视频帧数")]),s._v("\nnum_images "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("images"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 图像数量")]),s._v("\nimage_duration "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num_frames "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" num_images"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每张图像的帧数")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建视频帧列表")]),s._v("\nvideo_frames "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" image "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" images"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    img_path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("join"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("image_folder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" image"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    img "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    img "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cvtColor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("COLOR_RGB2BGR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加颜色空间转换代码")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("image_duration"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        video_frames"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建视频剪辑")]),s._v("\nvideo_clip "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ImageSequenceClip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("video_frames"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fps"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nvideo_clip "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" video_clip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("set_duration"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("duration"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将音频添加到视频剪辑")]),s._v("\naudio_file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./imgs/video/mp3/qintian.mp3'")]),s._v("\naudio_clip "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" AudioFileClip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("audio_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("subclip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" duration"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#控制视频时长,不然默认MP3的时长")]),s._v("\nvideo_clip "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" video_clip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("set_audio"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("audio_clip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将视频剪辑转换成视频文件")]),s._v("\noutput_file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./imgs/video/output_video2.mp4'")]),s._v("\nvideo_clip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write_videofile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("output_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fps"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" codec"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'libx264'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);