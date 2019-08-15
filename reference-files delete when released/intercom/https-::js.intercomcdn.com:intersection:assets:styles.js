(function () {
    console.debug('Injecting Intersection styles');
    let styleTag=document.createElement('style');
    styleTag.innerHTML=String.raw` .embercom-composer, .liquid-container {
        position: relative
    }
    #composer-content .embercom-composer-editor iframe, .modal-editor {
        max-width: 100%
    }
    .composer-attachment-delete-icon, .is-out-of-view {
        visibility: hidden
    }
    .liquid-container {
        overflow: hidden;
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        transform: translateY(0)
    }
    .liquid-child {
        overflow: hidden
    }
    .embercom-composer-placeholder {
        pointer-events: none;
        position: absolute;
        top: 30px;
        left: 12px;
        color: #888;
        background: 0 0
    }
    .embercom-composer-editor {
        background-clip: padding-box;
        box-sizing: border-box;
        outline: 0;
        height: 100%;
        width: 100%
    }
    , .embercom-composer-editor img, .embercom-composer-editor video {
        max-width: 100%
    }
    .embercom-composer-editor.has-error {
        border: 2px solid red;
        background: pink
    }
    .embercom-composer-editor b {
        font-weight: 600
    }
    .composer-is-hidden, .composer-is-read-only {
        display: none!important
    }
    .composer-has-disabled-pointer-events {
        pointer-events: none
    }
    #viewport-container-overlay {
        outline: #ff1493 dashed 2px;
        color: #ff1493;
        z-index: 2500;
        position: fixed;
        font-size: 10px;
        pointer-events: none
    }
    #dynamic-selection-overlay {
        outline: #006400 solid 2px;
        z-index: 3000;
        position: absolute;
        pointer-events: none
    }
    #dynamic-hover-insertion-overlay {
        background-color: purple;
        z-index: 3000;
        position: absolute;
        height: 8px;
        width: 8px;
        margin-top: -4px;
        margin-left: -4px;
        border-radius: 4px;
        pointer-events: none
    }
    #dynamic-hover-insertion-index {
        background-color: purple;
        text-align: center;
        line-height: 30px;
        font-weight: 700;
        color: #fff;
        font-size: 10px;
        z-index: 4000;
        position: absolute;
        height: 30px;
        width: 100px;
        margin-top: -15px;
        margin-left: -160px;
        pointer-events: none
    }
    #dynamic-hover-block-overlay {
        z-index: 3000;
        position: absolute;
        outline: purple dotted 2px;
        pointer-events: none
    }
    #editor-bottom-debug-outline, #editor-top-debug-outline {
        position: absolute;
        z-index: 3000;
        color: orange;
        border-top: 2px dashed orange;
        margin-left: -150px;
        text-align: center;
        width: 150px;
        font-size: 10px;
        pointer-events: none
    }
    #custom-template-debug-outline {
        text-overflow: clip;
        position: absolute;
        z-index: 3000;
        color: #0f0;
        border: 2px dotted #0f0;
        font-size: 10px;
        pointer-events: none
    }
    zws {
        position: absolute;
        z-index: -1
    }
    .is-selecting ic-block zws {
        display: none;
        position: relative
    }
    .embercom-composer-editor li code, .embercom-composer-editor p code {
        background: #d3d3d3;
        font-family: monospace
    }
    .embercom-composer-editor p a:hover {
        opacity: 1
    }
    .embercom-composer-editor a {
        color: #0071b2
    }
    ic-block {
        display: block;
        cursor: pointer;
        line-height: 0
    }
    .ic-custom-body .composer-attachment-list {
        margin: 10px 0
    }
    .composer-attachment-list ic-block {
        line-height: 16px
    }
    .ic-custom-body [data-type=attachment] {
        margin-bottom: 5px;
        padding-left: 21px;
        background: url(https://static.intercomcdn.com/assets/emails/v01/attachments-icon-69ca6ed6acb5bcbbd43e8b26c70a579f.png) no-repeat;
        left: 0;
        top: 3px
    }
    .composer-attachment-list ic-block a.uploading {
        opacity: .5
    }
    ic-block .intercom-interblocks-link, ic-block .intercom-interblocks-messenger-card {
        border: 1px solid #ccc;
        border-radius: 3px
    }
    ic-block .block-html, ic-block .block-iframe, ic-block .block-image, ic-block .block-video-file, ic-block .intercom-h2b-button, ic-block .intercom-interblocks-link, ic-block .intercom-interblocks-messenger-card {
        outline: transparent solid 2px
    }
    ic-block .block-image-container, ic-block .block-video-file-container {
        position: relative;
        display: block;
        width: 100%;
        border-radius: 5px
    }
    ic-block .block-video-file-container-uploaded {
        display: flex;
        justify-content: center;
        overflow: hidden;
        padding-top: 75%;
        border-radius: 5px
    }
    ic-block .block-video-file-container-uploaded:after {
        width: 100%;
        height: 80px;
        content: "";
        position: absolute;
        bottom: -1px;
        right: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, .0001), rgba(0, 0, 0, .5))
    }
    ic-block .block-video-file-player {
        position: absolute;
        top: 0;
        object-fit: cover;
        height: 100%;
        width: 100%
    }
    ic-block .block-video-file-captions {
        color: #fff;
        z-index: 1;
        font-size: 15px;
        font-weight: 600;
        line-height: 18px;
        padding: 14px 16px;
        font-family: intercom-font, "Helvetica Neue", Helvetica, Arial, sans-serif;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0
    }
    ic-block .block-video-file-container:hover .block-video-file-play-control {
        z-index: 1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-image: url(https://static.intercomassets.com/ember/embercom-composer/svgs/pause-d0eabfe1dcf318c54a0053f5fadf124c.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-color: #fff
    }
    ic-block .block-video-file-container:hover .block-video-file-play-control.paused {
        background-image: url(https://static.intercomassets.com/ember/embercom-composer/svgs/play-2961e3ca1c43cd9835f8dc08c2c2e293.svg)
    }
    ic-block .block-video-file-container:hover .block-video-file-play-control.paused.replay {
        background-image: url(https://static.intercomassets.com/ember/embercom-composer/svgs/replay-328aea980768e4112ac304041bf1e8f6.svg)
    }
    ic-block .block-video-file-container:hover .block-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .5);
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: null
    }
    ic-block .block-video-file-container:hover .block-video-file-audio-control {
        z-index: 2;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-image: url(https://static.intercomassets.com/ember/embercom-composer/svgs/unmute-2d4b9bbcd500269ecde24af3e9e49c91.svg);
        background-repeat: no-repeat;
        background-position: center
    }
    ic-block .block-video-file-container:hover .block-video-file-audio-control.muted {
        background-image: url(https://static.intercomassets.com/ember/embercom-composer/svgs/mute-7c98f12de9ff062dcf22eb133c3fb1b2.svg)
    }
    ic-block .block-video-file-container:hover .block-video-file-audio-control.replay {
        background-image: url(https://static.intercomassets.com/ember/embercom-composer/svgs/replay-328aea980768e4112ac304041bf1e8f6.svg)!important;
        background-color: #fff!important
    }
    ic-block .block-video-file .composer-file-uploadstatus {
        position: relative;
        padding-top: 75%;
        background: #FFF;
        border: 1px solid #888
    }
    ic-block .block-html:hover, ic-block .block-iframe:hover, ic-block .block-image:hover, ic-block .block-video-file:hover, ic-block .intercom-h2b-button:hover, ic-block .intercom-interblocks-link:hover, ic-block .intercom-interblocks-messenger-card:hover {
        cursor: pointer!important
    }
    [data-is-link-only-mode=true], [data-type=button] {
        line-height: inherit
    }
    [data-type=html] .block-html {
        line-height: 1
    }
    .intercom-h2b-button, .link-only-mode {
        display: inline-block
    }
    , ic-block[data-has-upload-error] .block-image, ic-block[data-has-upload-error] .block-video-file {
        outline-color: red!important
    }
    .block-is-current .block-html, .block-is-current .block-iframe, .block-is-current .block-image, .block-is-current .block-video-file, .block-is-current .intercom-h2b-button, .block-is-current .intercom-interblocks-content-card, .block-is-current .intercom-interblocks-link, .block-is-current .intercom-interblocks-messenger-card, .block-is-current[data-is-link-only-mode=true] a, ic-block[data-has-upload-error] .block-image, ic-block[data-has-upload-error] .block-video-file {
        outline-style: solid!important;
        outline-width: 1px!important;
        outline-offset: 2px
    }
    .embercom-composer-editor:focus .block-is-current .block-html, .embercom-composer-editor:focus .block-is-current .block-iframe, .embercom-composer-editor:focus .block-is-current .block-image, .embercom-composer-editor:focus .block-is-current .block-video-file, .embercom-composer-editor:focus .block-is-current .intercom-h2b-button, .embercom-composer-editor:focus .block-is-current .intercom-interblocks-content-card, .embercom-composer-editor:focus .block-is-current .intercom-interblocks-link, .embercom-composer-editor:focus .block-is-current .intercom-interblocks-messenger-card, .embercom-composer-editor:focus .block-is-current[data-has-upload-error] .block-image, .embercom-composer-editor:focus .block-is-current[data-has-upload-error] .block-video-file, .embercom-composer-editor:focus .block-is-current[data-is-link-only-mode=true] a {
        outline-color: #0F74AE!important
    }
    .block-is-current .block-html, .block-is-current .block-iframe, .block-is-current .block-image, .block-is-current .block-video-file, .block-is-current .intercom-h2b-button, .block-is-current .intercom-interblocks-content-card, .block-is-current .intercom-interblocks-link, .block-is-current[data-has-upload-error] .block-image, .block-is-current[data-has-upload-error] .block-video-file, .block-is-current[data-is-link-only-mode=true] a {
        outline-color: #B6C5CE!important
    }
    .embercom-composer.is-read-only .block-is-current .block-html, .embercom-composer.is-read-only .block-is-current .block-iframe, .embercom-composer.is-read-only .block-is-current .block-image, .embercom-composer.is-read-only .block-is-current .block-video-file, .embercom-composer.is-read-only .block-is-current .intercom-h2b-button, .embercom-composer.is-read-only .block-is-current .intercom-interblocks-link, .embercom-composer.is-read-only .block-is-current .intercom-interblocks-messenger-card, .embercom-composer.is-read-only .block-is-current[data-has-upload-error] .block-image, .embercom-composer.is-read-only .block-is-current[data-has-upload-error] .block-video-file, .embercom-composer.is-read-only .block-is-current[data-is-link-only-mode=true] a {
        outline-color: transparent!important
    }
    .block-is-current[data-has-no-image] .block-image, .block-is-current[data-has-no-image] .block-video-file {
        width: 100%;
        height: 100px
    }
    .block-is-current[data-has-no-image] .composer-upload-retry {
        display: none
    }
    [data-type=link], [data-type=messengerCard] {
        margin: 5px 0
    }
    [data-type=facebookLikeButton], [data-type=twitterFollowButton] {
        display: inline-block
    }
    [data-type=facebookLikeButton] .block-iframe, [data-type=twitterFollowButton] .block-iframe {
        width: 100%
    }
    [data-type=twitterFollowButton] .block-iframe {
        height: 20px
    }
    [data-type=facebookLikeButton] .block-iframe {
        height: 28px
    }
    [data-type=facebookLikeButton] span, [data-type=video] span, [data-type=button] a.intercom-h2b-button, [data-type=html] .block-html, [data-type=twitterFollowButton] span {
        pointer-events: none
    }
    [data-has-no-image] .block-image-container, [data-has-no-image] .block-video-file-container, [data-has-upload-error] .block-image-container, [data-has-upload-error] .block-video-file-container {
        position: relative
    }
    ic-block .composer-file-uploadstatus {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .9)
    }
    ic-block .composer-file-uploadstatus-inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 20px;
        width: 70%;
        text-align: center
    }
    ic-block[data-has-upload-error], ic-block[data-is-uploading], insert {
        position: relative
    }
    ic-block .composer-file-uploadstatus-loading-indicator {
        background-image: url(https://static.intercomassets.com/ember/embercom-composer/svgs/loading-indicator-b880ca6538dacce7d5740264bfd60bc8.svg)
    }
    ic-block .composer-file-error .composer-file-alert, ic-block .composer-file-error-message {
        display: table-cell;
        vertical-align: middle
    }
    ic-block .composer-file-error {
        width: 100%;
        display: table;
        color: red
    }
    insert {
        display: block;
        height: 0
    }
    #composer-read-only-content insert {
        display: none
    }
    insert-point {
        display: block;
        width: 100%;
        height: 5px;
        position: absolute;
        cursor: copy;
        left: 0
    }
    .is-selecting insert-point {
        cursor: text
    }
    insert:first-of-type insert-point {
        top: 0
    }
    insert:last-of-type insert-point {
        bottom: 0
    }
    .embercom-composer .ic-custom-body table[align=center] {
        margin: 0 auto!important
    }
    .modal-editor {
        position: relative;
        overflow: auto;
        height: 373px;
        margin: 0;
        padding: 25px 20px 20px;
        width: 100%;
        line-height: 1;
        border: none;
        background: #fff;
        color: #000;
        font-family: monospace;
        box-sizing: border-box;
        resize: none
    }
    #embedded_messenger .intercom-note-body.o__preview, #embedded_messenger .intercom-pointer-body.o__preview {
        overflow-x: hidden;
        overflow-y: auto;
        max-height: 207px
    }
    .modal-editor:focus {
        outline: 0
    }
    .embercom-composer-debug {
        width: 100%;
        max-width: 100%;
        position: absolute;
        top: -10px;
        left: calc(100% + 30px)
    }
    .embercom-composer-debug pre {
        word-break: break-word
    }
    .embercom-composer-debug h4 {
        margin: 5px 0
    }
    .button-bare {
        background: 0 0;
        border: none
    }
    .composer-offscreen {
        position: absolute;
        left: -99999px;
        width: 100%
    }
    [data-align=center] {
        text-align: center!important
    }
    [data-align=left] {
        text-align: left!important
    }
    [data-align=left] .intercom-h2b-button, [data-align=left] img {
        margin-left: 0!important
    }
    [data-align=right] {
        text-align: right!important
    }
    [data-align=right] .intercom-h2b-button, [data-align=right] img {
        margin-right: 0!important
    }
    .composer-has-no-buttons .intercom-h2b-button {
        text-align: left!important;
        margin-top: 0!important;
        text-transform: none!important
    }
    .composer-has-no-alignment [data-align=right] .intercom-h2b-button, .composer-has-no-alignment [data-align=right] img {
        margin-right: inherit!important
    }
    .composer-has-no-alignment [data-align=left] .intercom-h2b-button, .composer-has-no-alignment [data-align=left] img {
        margin-left: inherit!important
    }
    .composer-has-no-alignment [data-align=center], .composer-has-no-alignment [data-align=left], .composer-has-no-alignment [data-align=right] {
        text-align: left!important
    }
    .right-to-left [data-align=left], [dir=rtl] [data-align=left] {
        text-align: right!important
    }
    .right-to-left [data-align=left] .intercom-h2b-button, .right-to-left [data-align=left] img, [dir=rtl] [data-align=left] .intercom-h2b-button, [dir=rtl] [data-align=left] img {
        margin-left: 0!important
    }
    .right-to-left li, [dir=rtl] li {
        text-align: right!important;
        direction: rtl
    }
    .composer-attachment-can-delete .composer-attachment-delete-icon {
        visibility: visible
    }
    @-webkit-keyframes embercom-composer-rotate {
        0% {
            -webkit-transform: rotate(0)
        }
        8.3% {
            -webkit-transform: rotate(30deg)
        }
        16.7% {
            -webkit-transform: rotate(60deg)
        }
        25% {
            -webkit-transform: rotate(90deg)
        }
        33.3% {
            -webkit-transform: rotate(120deg)
        }
        41.7% {
            -webkit-transform: rotate(150deg)
        }
        50% {
            -webkit-transform: rotate(180deg)
        }
        58.3% {
            -webkit-transform: rotate(210deg)
        }
        66.7% {
            -webkit-transform: rotate(240deg)
        }
        75% {
            -webkit-transform: rotate(270deg)
        }
        83.3% {
            -webkit-transform: rotate(300deg)
        }
        91.7% {
            -webkit-transform: rotate(330deg)
        }
        100% {
            -webkit-transform: rotate(360deg)
        }
    }
    @-moz-keyframes embercom-composer-rotate {
        0% {
            -moz-transform: rotate(0)
        }
        8.3% {
            -moz-transform: rotate(30deg)
        }
        16.7% {
            -moz-transform: rotate(60deg)
        }
        25% {
            -moz-transform: rotate(90deg)
        }
        33.3% {
            -moz-transform: rotate(120deg)
        }
        41.7% {
            -moz-transform: rotate(150deg)
        }
        50% {
            -moz-transform: rotate(180deg)
        }
        58.3% {
            -moz-transform: rotate(210deg)
        }
        66.7% {
            -moz-transform: rotate(240deg)
        }
        75% {
            -moz-transform: rotate(270deg)
        }
        83.3% {
            -moz-transform: rotate(300deg)
        }
        91.7% {
            -moz-transform: rotate(330deg)
        }
        100% {
            -moz-transform: rotate(360deg)
        }
    }
    @-o-keyframes embercom-composer-rotate {
        0% {
            -o-transform: rotate(0)
        }
        8.3% {
            -o-transform: rotate(30deg)
        }
        16.7% {
            -o-transform: rotate(60deg)
        }
        25% {
            -o-transform: rotate(90deg)
        }
        33.3% {
            -o-transform: rotate(120deg)
        }
        41.7% {
            -o-transform: rotate(150deg)
        }
        50% {
            -o-transform: rotate(180deg)
        }
        58.3% {
            -o-transform: rotate(210deg)
        }
        66.7% {
            -o-transform: rotate(240deg)
        }
        75% {
            -o-transform: rotate(270deg)
        }
        83.3% {
            -o-transform: rotate(300deg)
        }
        91.7% {
            -o-transform: rotate(330deg)
        }
        100% {
            -o-transform: rotate(360deg)
        }
    }
    @keyframes embercom-composer-rotate {
        0% {
            transform: rotate(0)
        }
        8.3% {
            transform: rotate(30deg)
        }
        16.7% {
            transform: rotate(60deg)
        }
        25% {
            transform: rotate(90deg)
        }
        33.3% {
            transform: rotate(120deg)
        }
        41.7% {
            transform: rotate(150deg)
        }
        50% {
            transform: rotate(180deg)
        }
        58.3% {
            transform: rotate(210deg)
        }
        66.7% {
            transform: rotate(240deg)
        }
        75% {
            transform: rotate(270deg)
        }
        83.3% {
            transform: rotate(300deg)
        }
        91.7% {
            transform: rotate(330deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }
    .loader {
        display: inline-block;
        width: 15px;
        height: 15px;
        opacity: .6;
        background-image: url(https://static.intercomcdn.com/assets/loader-5a07498336fb5266d17bb7ce76da7364.svg);
        -webkit-animation-name: embercom-composer-rotate;
        -webkit-animation-duration: .8s;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-name: embercom-composer-rotate;
        -moz-animation-duration: .8s;
        -moz-animation-iteration-count: infinite;
        -o-animation-name: embercom-composer-rotate;
        -o-animation-duration: .8s;
        -o-animation-iteration-count: infinite;
        animation-name: embercom-composer-rotate;
        animation-duration: .8s;
        animation-iteration-count: infinite
    }
    .composer-popover-controller {
        direction: ltr
    }
    .m__inbox__emoji-dropdown .dropdown__list-item span {
        background-image: url(https://js.intercomcdn.com/images/emoji-spritemap-16.png);
        position: relative;
        top: 2px;
        margin: 1px
    }
    .pseudonym-warning {
        border-bottom: 1px dotted red;
        cursor: pointer
    }
    .ic-popup.pseudonym-warning-tooltip {
        display: none;
        padding: 5px;
        white-space: normal;
        text-align: center;
        font-size: 12px
    }
    .composer-style-basic {
        border-radius: 2px;
        padding: 4px 24px 4px 10px
    }
    .composer-style-basic>h1 {
        display: block;
        padding: 0;
        margin: 18px 0;
        font-size: 28px;
        line-height: 32px
    }
    .composer-style-basic>h2 {
        display: block;
        padding: 0;
        margin: 17px 0;
        font-size: 21px;
        line-height: 24px
    }
    .composer-style-basic>p {
        display: block;
        padding: 0;
        margin: 14px 0;
        font-size: 14px;
        line-height: 22px
    }
    .composer-style-basic>ol, .composer-style-basic>ul {
        display: block;
        padding: 0 0 0 40px;
        margin: 14px 0
    }
    .composer-style-basic>ol {
        list-style-type: decimal
    }
    .composer-style-basic>ul {
        list-style-type: disc
    }
    .composer-style-basic>ol>li, .composer-style-basic>ul>li {
        margin: 0;
        padding: 0;
        font-size: 14px;
        line-height: 22px
    }
    .composer-style-basic>pre {
        display: block;
        margin: 14px 0;
        padding: 0;
        white-space: pre;
        font-family: monospace;
        font-size: 14px;
        line-height: 22px;
        background-color: #d3d3d3
    }
    .composer-style-custom ic-attribute span, ic-attribute span {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif!important;
        font-size: 12px!important;
        line-height: 18px!important;
        border-radius: 4px;
        display: inline-block;
        font-weight: 400;
        vertical-align: middle;
        padding: 0 .6em;
        cursor: auto;
        text-transform: none;
        text-align: center;
        color: #000!important;
        background-color: #eee!important;
        border: 1px solid rgba(0, 0, 0, .2)!important;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none
    }
    ic-attribute span:before {
        font-family: "12px";
        font-size: 18px;
        line-height: 18px;
        display: inline-block;
        vertical-align: top;
        font-weight: 400!important;
        font-style: normal!important;
        text-transform: none!important;
        text-decoration: none!important;
        content: "A";
        margin-right: 6px
    }
    .ic-popup, input.fallback-input {
        font-size: 14px;
        line-height: 22px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
    }
    ic-attribute.is-warning span {
        background-color: #ffe2b3!important;
        border-color: #ffb948!important;
        color: #7b4600!important
    }
    ic-attribute.is-warning span:before {
        content: "B"
    }
    .embercom-composer.is-read-only ic-attribute span, .embercom-composer.is-read-only ic-attribute:hover span {
        cursor: default
    }
    .call-to-action, .is-hot, ic-attribute.is-hot span {
        cursor: pointer
    }
    .embercom-composer:not(.is-read-only) ic-attribute.is-hot:hover span {
        outline: 0;
        background-color: #EEF4FF!important;
        border-color: #286EFA!important;
        color: #286EFA!important
    }
    .embercom-composer:not(.is-read-only) ic-attribute.is-hot:active span {
        outline: 0;
        background-color: #CFD9E0!important
    }
    .composer-attribute-editor .composer-attribute-inserter, .composer-attribute-editor .composer-attribute-selector {
        position: relative;
        pointer-events: all
    }
    .composer-attribute-fallback-editor, .ic-popup {
        position: absolute
    }
    .ic-popup-short.composer-attribute-fallback-editor {
        display: block;
        height: inherit
    }
    .composer-attribute-fallback-editor .popup-inserter-row .popup-inserter-cell.attribute-icon-container {
        width: 36px;
        text-align: center;
        color: #888
    }
    .composer-attribute-fallback-editor .popup-inserter-row .attribute-text {
        white-space: normal;
        color: #888
    }
    .composer-attribute-fallback-editor .fallback-title {
        width: 100%;
        display: table;
        color: #fff
    }
    .composer-attribute-fallback-editor .fallback-title .popup-inserter-cell {
        padding-left: 10px;
        border-bottom: 1px solid #7b8992
    }
    .composer-attribute-fallback-editor .popup-inserter-row {
        background-color: #f5f5f5;
        border-bottom: 1px solid #f5f5f5;
        border-radius: 4px 4px 0 0
    }
    .composer-attribute-fallback-editor .popup-inserter-row.bottom {
        background-color: transparent;
        border-bottom: 0
    }
    input.fallback-input {
        padding: 4px 10px;
        border: 1px solid #889AA5;
        background: #FFF;
        box-sizing: border-box;
        width: 170px
    }
    .has-errors {
        color: #C00
    }
    .has-errors>input {
        border: 1px solid #C00;
        color: #C00
    }
    .fallback-inserter-icon:before {
        vertical-align: top;
        margin: -2px 3px 0 8px
    }
    .ic-popup {
        max-width: 300px;
        padding: 1px;
        box-shadow: 0 4px 14px 0 rgba(0, 0, 0, .2), 0 0 0 1px rgba(0, 0, 0, .05);
        white-space: nowrap;
        border-radius: 4px;
        background-clip: padding-box;
        z-index: 3
    }
    .ic-popup[disabled] {
        opacity: .3;
        pointer-events: none
    }
    .ic-popup:after, .ic-popup:before {
        position: absolute;
        display: block;
        margin: 0;
        width: auto;
        height: auto;
        border: none;
        background: 0 0;
        font-size: 17px;
        line-height: 19px
    }
    .ic-popup-short {
        display: table;
        height: 33px;
        padding: 0
    }
    .ic-popup-tiny {
        width: 30px;
        height: 24px;
        padding: 0
    }
    [class*=ic-popup-right]:after, [class*=ic-popup-right]:before, [class*=ic-popup-left]:after, [class*=ic-popup-left]:before {
        top: 50%;
        content: '\25B8'
    }
    [class*=ic-popup-left]:after, [class*=ic-popup-left]:before {
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        left: auto
    }
    [class*=ic-popup-left]:before {
        right: -7px;
        text-shadow: 1px 2px 6px rgba(0, 0, 0, .1)
    }
    [class*=ic-popup-left]:after {
        right: -6px
    }
    [class*=ic-popup-right]:after, [class*=ic-popup-right]:before {
        -webkit-transform: translateY(-50%) rotate(180deg);
        transform: translateY(-50%) rotate(180deg);
        margin-top: 1px
    }
    [class*=ic-popup-right]:before {
        left: -6px;
        text-shadow: 1px -1px 6px rgba(0, 0, 0, .1)
    }
    [class*=ic-popup-right]:after {
        left: -5px
    }
    .ic-popup-left-top:after, .ic-popup-left-top:before, .ic-popup-right-top:after, .ic-popup-right-top:before {
        top: 15px
    }
    .ic-popup-left-bottom:after, .ic-popup-left-bottom:before, .ic-popup-right-bottom:after, .ic-popup-right-bottom:before {
        top: auto;
        bottom: 0
    }
    [class*=ic-popup-below]:after, [class*=ic-popup-below]:before, [class*=ic-popup-above]:after, [class*=ic-popup-above]:before {
        left: 50%;
        content: '\25BE'
    }
    [class*=ic-popup-above]:after, [class*=ic-popup-above]:before {
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%)
    }
    [class*=ic-popup-above]:before {
        bottom: -11px;
        text-shadow: 0 2px 1px rgba(0, 0, 0, .1)
    }
    [class*=ic-popup-above]:after {
        bottom: -10px
    }
    [class*=ic-popup-below]:after, [class*=ic-popup-below]:before {
        -webkit-transform: translateX(-50%) rotate(180deg);
        transform: translateX(-50%) rotate(180deg)
    }
    [class*=ic-popup-below]:before {
        top: -12px
    }
    [class*=ic-popup-below]:after {
        top: -11px
    }
    @-moz-document url-prefix() {
        [class*=ic-popup-right]:before {
            left: -7px
        }
        [class*=ic-popup-right]:after {
            left: -6px
        }
        [class*=ic-popup-above]:before {
            bottom: -10px;
            text-shadow: 0 1px 0 rgba(0, 0, 0, .3)
        }
        [class*=ic-popup-above]:after {
            bottom: -10px
        }
        [class*=ic-popup-below]:before {
            top: -10px
        }
        [class*=ic-popup-below]:after {
            top: -9px
        }
    }
    .ic-popup-above-left:after, .ic-popup-above-left:before, .ic-popup-below-left:after, .ic-popup-below-left:before {
        left: 15px
    }
    .ic-popup-above-right:after, .ic-popup-above-right:before, .ic-popup-below-right:after, .ic-popup-below-right:before {
        left: auto;
        right: 15px
    }
    .ic-popup {
        background-color: #282f33;
        color: #fff
    }
    .ic-popup:before {
        color: rgba(0, 0, 0, .28)
    }
    .ic-popup:after {
        color: #282f33
    }
    .ic-popup.is-light-theme {
        background-color: #fff;
        color: #000
    }
    .ic-popup.is-light-theme:before {
        color: rgba(0, 0, 0, .1)
    }
    .ic-popup.is-light-theme:after {
        color: #fff
    }
    .ic-popup.is-light-theme.is-hot:hover {
        color: #286efa
    }
    .ic-popup.is-light-theme .call-to-action {
        color: #000
    }
    .ic-popup.is-light-theme .call-to-action:hover {
        color: #286efa
    }
    .ic-popup-icon {
        padding: 1px 0;
        display: inline-block;
        vertical-align: bottom;
        line-height: 20px
    }
    .ic-popup .ic-popup-content {
        white-space: normal;
        padding: 8px 15px;
        font-size: 14px;
        text-align: left
    }
    .ic-popup.is-light-theme .ic-popup-content.bottom {
        border-radius: 0 0 3px 3px;
        background-clip: padding-box
    }
    .ic-popup-tiny {
        text-align: center;
        font-size: 12px
    }
    .ic-popup-scrollable {
        overflow-y: auto;
        max-height: 415px
    }
    .ic-mirror-popup, .ic-mirror-popup .ic-popup-scrollable {
        transform: scale(-1, 1)
    }
    .ic-mirror-popup .ic-popup {
        margin-left: 100%
    }
    .intercom-conversation-preview .composer-anchor-editor, .intercom-conversation-preview .composer-anchor-preview, .intercom-conversation-preview .composer-video-inserter {
        display: none!important
    }
    .insertion-configuration-popover {
        max-width: 480px;
        min-width: 30px;
        white-space: normal
    }
    .composer-anchor-editor, .composer-anchor-preview, .composer-attribute-fallback-editor, .composer-editor-is-active, .composer-facebook-inserter, .composer-facebook-like-button-editor, .composer-twitter-follow-button-editor, .composer-twitter-inserter, .composer-video-editor, .composer-video-inserter {
        max-width: 330px;
        width: 330px
    }
    .popup-inserter-row {
        display: table-row
    }
    .popup-inserter-row-uses-flexbox {
        display: flex;
        flex-direction: row;
        flex: 0 0 auto;
        min-width: 0;
        min-height: 0
    }
    .popup-inserter-row .popup-inserter-cell {
        text-align: left;
        display: table-cell;
        vertical-align: middle;
        padding: 0 3px;
        line-height: 32px;
        position: relative
    }
    .popup-inserter-row-uses-flexbox .popup-inserter-cell {
        flex: 0 0 auto;
        min-width: 0;
        min-height: 0;
        display: block
    }
    .popup-inserter-row-uses-flexbox .popup-inserter-cell.o__flexes-to-1 {
        flex: 1 1 auto
    }
    .popup-inserter-row-uses-flexbox .popup-inserter-cell.o__has-columns {
        display: flex;
        flex-direction: row
    }
    .popup-inserter-cell-icon {
        display: inline-block;
        vertical-align: bottom;
        padding: 6px 0;
        line-height: 20px
    }
    .popup-inserter-row label.popup-inserter-cell {
        width: 0;
        text-align: left;
        font-weight: 500;
        padding: 0 10px
    }
    .popup-inserter-row-uses-flexbox label.popup-inserter-cell {
        width: auto
    }
    .popup-inserter-row div.divider {
        background: #f5f5f5;
        width: 1px;
        padding: 0;
        margin: 0 3px
    }
    .popup-inserter-row.ic-popup-content {
        padding: 0;
        line-height: 20px
    }
    .popup-inserter-row div.popup-inserter-cell input {
        box-sizing: border-box;
        background-color: transparent;
        height: 31px;
        font-size: 14px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-weight: 400;
        outline: 0;
        border: 0;
        padding-left: 5px;
        flex: 1 1 auto;
        min-width: 0;
        min-height: 0
    }
    .popup-inserter-row div.popup-inserter-cell input.with-icon {
        padding-right: 30px
    }
    .popup-inserter-row div.popup-inserter-cell input::-webkit-input-placeholder {
        color: #888
    }
    .small-caps {
        font-size: 14px;
        color: #888;
        font-weight: 500
    }
    .attribute-selector-for-input {
        position: absolute;
        top: -208px;
        left: calc(100% + 7px);
        width: 248px;
        height: 450px
    }
    .popup-inserter-row div.info-tooltip {
        top: -100%;
        margin-left: -68px;
        display: none;
        padding: 6px
    }
    .composer-text-formatter, .popup-inserter-row .info-icon:hover div.info-tooltip {
        display: block
    }
    .popup-inserter-row .popup-inserter-cell.attribute-selector-container {
        padding: 0
    }
    @media screen and (-webkit-min-device-pixel-ratio:0) {
        .attribute-selector-container.inserter-is-hidden {
            width: 2px
        }
    }
    .has-input-error {
        border: 1px solid #C00!important
    }
    .ic-popup.is-light-theme.has-input-error:before {
        color: #C00!important
    }
    .text-formatter-option-wrapper {
        display: table
    }
    .text-formatter-option-cell {
        display: table-cell;
        padding: 3px 5px 0
    }
    .text-formatter-option {
        font-family: Georgia, Times, 'Times New Roman', serif;
        cursor: pointer;
        vertical-align: top;
        color: #286efa;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        box-sizing: border-box;
        min-width: 26px;
        padding: 2px 3px;
        text-align: center;
        border-radius: 4px;
        background-color: #eef4ff;
        display: block
    }
    .text-formatter-option.is-inactive {
        color: #888;
        background-color: transparent
    }
    .text-formatter-option.is-disabled, .text-formatter-option.is-disabled:hover {
        color: #eee;
        cursor: default
    }
    .text-formatter-option.is-inactive:hover, .text-formatter-option:hover {
        color: #286efa
    }
    .anchor-editor-icon, .popup-inserter-row .popup-inserter-cell.anchor-editor-icon {
        box-sizing: border-box;
        text-align: center;
        padding: 0 5px;
        width: 30px;
        height: 100%
    }
    .anchor-editor-icon:hover {
        color: #286efa;
        cursor: pointer
    }
    .anchor-editor-icon-beside-input {
        position: absolute;
        right: 0
    }
    .anchor-editor-icon-beside-input:hover div.info-tooltip {
        display: block;
        margin-left: -36px
    }
    .popup-inserter-row .anchor-editor-icon.delete {
        height: 100%;
        padding-top: 1px
    }
    .block-link-editor {
        display: table
    }
    .block-link-editor-activate {
        display: table-cell;
        cursor: pointer;
        padding: 4px
    }
    .hide-media-inserter, .intercom-conversation-preview .composer-media-editor, .intercom-conversation-preview .composer-media-inserter-container, .is-typing .composer-media-editor {
        display: none!important
    }
    .block-link-editor-activate:hover, .block-link-editor-icon:hover {
        color: #282F33
    }
    .block-link-editor-icon {
        text-align: center;
        padding: 0 5px;
        width: 30px
    }
    .block-link-editor-icon.is-active {
        color: #1686ca
    }
    .composer-media-inserter-container {
        margin: -7px
    }
    .composer-media-editor, .composer-media-inserter-container {
        position: absolute;
        width: 100%;
        pointer-events: none
    }
    .composer-media-editor:before {
        position: relative;
        top: 14px;
        left: 20px;
        display: none;
        height: 0;
        border-top: #e9eef2 1px dashed;
        content: '';
        pointer-events: none
    }
    .composer-media-editor.is-inserter:before {
        display: block
    }
    .composer-media-inserter {
        pointer-events: all;
        z-index: 1!important
    }
    .composer-media-selector {
        pointer-events: all;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        width: 160px;
        padding: 3px 0 2px
    }
    .composer-media-selector-with-social {
        width: 190px
    }
    .composer-media-selector-option {
        display: block;
        margin: 0;
        padding: 7px 15px 8px;
        text-align: left;
        background: 0 0;
        border: none;
        line-height: 20px;
        font-size: 14px;
        font-weight: 500;
        width: 100%
    }
    .composer-divider, .composer-media-selector-option:before {
        background: rgba(0, 0, 0, .1)
    }
    .composer-attribute-heading, .selectable-list-item {
        font-size: 14px!important;
        text-align: left!important;
        font-weight: 500!important;
        line-height: 20px!important
    }
    .composer-media-selector-option:focus {
        outline: 0
    }
    .composer-media-inserter-container {
        position: absolute;
        width: 140px
    }
    .composer-media-inserter-container:after {
        position: absolute;
        top: 50%;
        width: 100%;
        display: block;
        height: 0;
        border-top: #e9eef2 1px dashed;
        content: '';
        pointer-events: none
    }
    .composer-media-inserter-container .composer-facebook-inserter, .composer-media-inserter-container .composer-media-inserter, .composer-media-inserter-container .composer-media-selector, .composer-media-inserter-container .composer-social-inserter, .composer-media-inserter-container .composer-twitter-inserter, .composer-media-inserter-container .composer-video-inserter, .composer-media-inserter-container .insertion-configuration-popover {
        position: relative;
        pointer-events: all
    }
    .composer-attribute-editor {
        z-index: 1;
        position: absolute;
        width: 100%;
        pointer-events: none;
        margin-left: 7px
    }
    .hide-attribute-inserter, .intercom-conversation-preview .composer-attribute-inserter, .is-typing .composer-attribute-editor {
        display: none!important
    }
    .composer-attribute-inserter {
        pointer-events: all!important;
        z-index: 1!important
    }
    .composer-attribute-selector {
        pointer-events: all!important;
        width: 248px!important
    }
    .composer-attribute-heading {
        padding: 15px 15px 5px!important;
        margin: 0!important;
        color: #888!important
    }
    .composer-divider {
        margin: 0!important;
        border: 0!important;
        height: 1px!important;
        width: 100%!important
    }
    .composer-html-editor-textarea-container {
        position: relative
    }
    .m__html-editor__attribute-container {
        position: absolute;
        right: 0;
        top: 0
    }
    .composer-button-editor {
        width: initial
    }
    .composer-button-editor .anchor-editor-cell {
        padding-top: 3px;
        padding-bottom: 3px
    }
    .button-editor-separator {
        display: block;
        height: 1px;
        background: #E9EEF2;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0
    }
    .has-input-error .button-editor-separator {
        background-color: #b22222
    }
    .button-editor-icon.is-active {
        color: #74cfff
    }
    .selectable-list {
        margin: 0 0 10px!important;
        padding: 0!important;
        list-style: none!important
    }
    .selectable-list-item {
        cursor: pointer!important;
        padding: 6px 15px!important;
        box-sizing: border-box!important;
        color: #222!important;
        pointer-events: all!important;
        white-space: nowrap!important;
        margin-bottom: 0!important;
        list-style: none!important
    }
    .selectable-list-item:hover {
        color: #286efa!important
    }
    .selectable-list-item.has-expander {
        text-align: center!important;
        display: -webkit-box!important;
        display: -webkit-flex!important;
        display: -ms-flexbox!important;
        display: flex!important;
        -webkit-box-align: center!important;
        -webkit-align-items: center!important;
        -ms-flex-align: center!important;
        align-items: center!important;
        -webkit-box-pack: center!important;
        -webkit-justify-content: center!important;
        -ms-flex-pack: center!important;
        justify-content: center!important;
        padding-top: 10px!important;
        padding-bottom: 6px!important
    }
    .selectable-list-expander {
        color: #888!important;
        line-height: 20px!important
    }
    .selectable-list-item.has-expander:hover {
        background: 0 0!important
    }
    .selectable-list-item.has-expander:hover .selectable-list-expander {
        color: #286efa!important
    }
    .popup-inserter-row div.video-insterter-info-tooltip {
        top: -100%;
        margin-left: -68px;
        display: none;
        font-size: 12px;
        padding: 6px
    }
    .popup-inserter-row .info-icon:hover div.video-insterter-info-tooltip {
        display: block
    }
    .composer-social-inserter {
        width: 200px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
    }
    .social-inserter-option {
        height: 33px;
        line-height: 33px;
        padding: 0 10px;
        display: inline-block;
        font-size: 13px;
        border: none;
        border-right: 1px solid #E9EEF2;
        color: #7b919c;
        font-weight: 700;
        background-color: #fff;
        text-align: center;
        cursor: pointer;
        user-select: none
    }
    .social-inserter-option:last-of-type {
        border-right: none
    }
    .social-inserter-option:hover {
        color: #282f33
    }
    .social-inserter-icon {
        margin-right: 3px;
        line-height: 20px;
        padding: 6px 0;
        display: inline-block;
        vertical-align: top
    }
    .social-inserter-input {
        width: 300px
    }
    .embercom-composer .entity_mention span {
        background-color: #FFEED9!important;
        border-radius: 10px;
        text-decoration: none!important;
        padding: 1px 7px 2px;
        color: #37474F!important;
        border: 1px solid #efd2ae!important;
        font-weight: 700!important;
        font-size: 13px;
        cursor: text!important;
        white-space: nowrap!important
    }
    .embercom-composer a.entity_mention:hover {
        opacity: 1
    }
    .widget-container {
        display: none
    }
    .widget-component {
        position: relative;
        cursor: pointer;
        display: inline-block;
        border: 1px solid transparent
    }
    .widget-component .o__confirm {
        max-width: 490px!important
    }
    .widget-component.widget-component-readonly {
        cursor: default
    }
    .widget-component.customisable-widget-selected {
        outline-offset: 2px;
        outline: #0071b0 solid 1px
    }
    .widget-component.customisable-widget-selected.customisable-widget-editing {
        outline-color: #cbcbcb!important
    }
    .customisable-widget-placeholder {
        background-color: #f3f3f3;
        width: 100%;
        opacity: .8;
        font-weight: 700;
        border: 1px dashed #cbcbcb;
        color: #676767;
        font-size: 14px;
        box-sizing: border-box;
        text-align: center
    }
    .customisable-widget-editor-text {
        position: absolute;
        z-index: 2;
        width: 100%;
        top: 0
    }
    .customisable-widget-editor-text textarea {
        width: 100%;
        text-align: center;
        padding: 10px 5px;
        line-height: 1.5em;
        border: none;
        outline: 0;
        font-size: 13px;
        resize: none;
        background-color: transparent
    }
    .customisable-widget-editor-text textarea::-webkit-input-placeholder {
        color: #d1d1d1
    }
    .customisable-widget-editor-text textarea::-moz-placeholder {
        color: #d1d1d1;
        opacity: 1
    }
    .customisable-widget-editor-text textarea:-ms-input-placeholder {
        color: #d1d1d1
    }
    .customisable-widget.logo .customisable-widget-placeholder {
        height: 60px;
        width: 170px;
        padding-top: 20px
    }
    .customisable-widget.logo img {
        float: left
    }
    .customisable-widget.social .customisable-widget-placeholder {
        position: absolute;
        top: 0;
        height: 100px;
        width: 220px;
        left: calc(50% - 110px);
        padding-top: 40px
    }
    .customisable-widget.address .customisable-widget-placeholder {
        position: absolute;
        top: 0;
        height: 36px;
        width: 220px;
        left: calc(50% - 110px);
        padding-top: 8px
    }
    .ic-popup.social-widget-editor {
        width: 300px
    }
    .customisable-widget.social h2 {
        padding: 0 5px
    }
    .customisable-widget.social a {
        pointer-events: none
    }
    .customisable-widget.address .widget-component {
        width: 100%
    }
    .customisable-widget.address .widget-component.customisable-widget-editing.customisable-widget-selected {
        outline-style: none
    }
    .customisable-widget.address .widget-component.customisable-widget-editing .customisable-widget-placeholder, .customisable-widget.address .widget-component.customisable-widget-editing.customisable-widget-selected p {
        visibility: hidden
    }
    .customisable-widget-popover .ic-popup {
        padding: 7px 12px 7px 13px;
        font-weight: 700;
        font-size: 13px;
        line-height: 19px;
        box-sizing: border-box
    }
    .customisable-widget-popover .ic-popup:hover {
        color: #282F33
    }
    .customisable-widget.social .widget-component {
        padding: 0 15px
    }
    .customisable-widget-resizing img {
        opacity: .1
    }
    .customisable-widget-loader {
        background: 0 0;
        width: 100%;
        height: 100%;
        position: absolute
    }
    .customisable-widget-loader .loader {
        position: absolute;
        opacity: 1;
        left: calc(50% - 7px);
        top: calc(50% - 7px)
    }
    .text-editor {
        padding: 16px
    }
    .f__text.text-editor-textarea {
        resize: none;
        height: 84px
    }
    #embedded_messenger .intercom-attribute-collector-card {
        position: relative;
        margin: 10px 20px 0 auto;
        width: 295px;
        height: auto
    }
    #embedded_messenger .intercom-attribute-collector-card-body {
        border: none;
        box-shadow: 0 2px 8px 0 rgba(35, 47, 53, .09)
    }
    #embedded_messenger .intercom-text-input {
        position: relative;
        border: none
    }
    #embedded_messenger .intercom-text-input input {
        border: none;
        border-radius: 5px;
        box-sizing: border-box;
        color: #a5adb6;
        font-size: 14px;
        height: 52px;
        outline: 0;
        padding: 12px 35px 12px 20px;
        width: 100%
    }
    #embedded_messenger .intercom-text-input-submit-button {
        background-image: url(https://js.intercomcdn.com/images/next-icon@2x.25fd06c0.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 8px 13px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        position: absolute;
        top: 6px;
        right: 6px;
        bottom: 6px;
        margin: 0;
        width: 35px
    }
    #embedded_messenger .intercom-author-summary {
        color: #8f919d;
        font-size: 14px;
        line-height: 1.2;
        display: inline-block;
        vertical-align: middle
    }
    #embedded_messenger .intercom-note .intercom-author-summary, #embedded_messenger .intercom-pointer .intercom-author-summary {
        width: calc(100% - 32px - 16px - 36px)
    }
    #embedded_messenger .intercom-chat .intercom-author-summary {
        width: 100%
    }
    #embedded_messenger .intercom-author-summary-name {
        font-weight: 700;
        color: #606273
    }
    #embedded_messenger .intercom-author-summary-name-from {
        overflow: hidden;
        text-overflow: ellipsis
    }
    #embedded_messenger .intercom-author-last-active {
        color: #8f919d;
        opacity: .7
    }
    #embedded_messenger .intercom-authored-container {
        box-sizing: border-box;
        position: relative;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 14px rgba(0, 0, 0, .15);
        font-size: 13px;
        line-height: 1.5;
        width: 100%;
        height: 100%
    }
    #embedded_messenger .intercom-authored-container-top {
        padding: 25px;
        pointer-events: none
    }
    #embedded_messenger .intercom-authored-container-avatar {
        float: left;
        margin-right: 14px
    }
    #embedded_messenger .intercom-authored-container-avatar .intercom-avatar {
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 15px
    }
    #embedded_messenger .intercom-authored-container-avatar .intercom-avatar img {
        width: 30px;
        height: 30px
    }
    #embedded_messenger .intercom-avatar {
        margin: 0 auto;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle
    }
    #embedded_messenger .intercom-avatar img {
        border-radius: 50%;
        vertical-align: baseline
    }
    #embedded_messenger .intercom-avatar-initial {
        text-transform: uppercase;
        color: #fff;
        font-weight: 700;
        text-align: center
    }
    #embedded_messenger .intercom-chat {
        position: relative;
        margin: 20px 20px 20px auto;
        width: 295px;
        height: auto;
        min-height: 90px
    }
    #embedded_messenger .intercom-chat.o__preview {
        cursor: pointer
    }
    #embedded_messenger .intercom-chat-card {
        height: 100%;
        position: relative;
        background-color: #fff;
        border-radius: 8px 8px 8px 0;
        box-sizing: border-box;
        padding: 0 0 15px;
        box-shadow: 0 2px 8px 0 rgba(35, 47, 53, .09)
    }
    #embedded_messenger .intercom-chat-card:after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 100%;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 13px 5px;
        border-color: transparent transparent #fff
    }
    #embedded_messenger .intercom-chat-avatar {
        position: absolute;
        bottom: 0;
        left: -50px;
        border-radius: 100%
    }
    #embedded_messenger .intercom-chat-avatar .intercom-avatar {
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 25px
    }
    #embedded_messenger .intercom-chat-avatar .intercom-avatar img {
        width: 30px;
        height: 30px
    }
    #embedded_messenger .intercom-chat-author {
        font-size: 10px;
        color: rgba(73, 76, 93, .3);
        padding: 15px 20px 10px;
        pointer-events: none
    }
    #embedded_messenger .intercom-chat-composer {
        position: relative;
        box-sizing: border-box;
        padding: 17px 20px;
        margin-top: 10px;
        pointer-events: none;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 52px;
        background-color: #f0f3f5;
        border-radius: 8px;
        border: none;
        font-size: 15px;
        color: #a5adb6;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16)
    }
    #embedded_messenger .intercom-chat-composer .intercom-composer-placeholder {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 140px;
        line-height: 18px
    }
    #embedded_messenger .intercom-chat-composer .intercom-composer-emoji-button {
        height: 52px;
        right: 40px
    }
    #embedded_messenger .intercom-chat-composer .intercom-composer-upload-button {
        height: 52px;
        right: 12px
    }
    #embedded_messenger .intercom-chat-body {
        padding: 0 20px 10px
    }
    #embedded_messenger .intercom-chat-body.o__preview {
        max-height: 300px;
        overflow-x: hidden;
        overflow-y: auto
    }
    #embedded_messenger .intercom-chat-body:after {
        position: absolute;
        content: ' ';
        bottom: 15px;
        left: 0;
        right: 0;
        height: 15px;
        background: linear-gradient(rgba(255, 255, 255, 0), #fff 15px);
        border-radius: 0 0 8px 8px
    }
    #embedded_messenger .intercom-composer-emoji-button, #embedded_messenger .intercom-composer-upload-button {
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        bottom: 0;
        width: 34.5px;
        height: 55px;
        pointer-events: none
    }
    #embedded_messenger .intercom-composer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #f0f3f5
    }
    #embedded_messenger .intercom-composer-upload-button {
        background-image: url(https://js.intercomcdn.com/images/attachment.35cbfe8a.png);
        background-size: 15.5px 17.4px;
        right: 29px
    }
    @media (min-resolution:1.3dppx) {
        #embedded_messenger .intercom-composer-upload-button {
            background-image: url(https://js.intercomcdn.com/images/attachment@2x.98dfd51f.png)
        }
    }
    #embedded_messenger .intercom-composer-emoji-button {
        background-image: url(https://js.intercomcdn.com/images/composer-emoji-button-icon.9f4323a8.png);
        background-size: 18px 18px;
        right: 63.5px
    }
    @media (min-resolution:1.3dppx) {
        #embedded_messenger .intercom-composer-emoji-button {
            background-image: url(https://js.intercomcdn.com/images/composer-emoji-button-icon@2x.b570fd40.png)
        }
    }
    @font-face {
        font-family: intercom-font;
        src: url(https://js.intercomcdn.com/fonts/proximanova-regular.ed964b0f.woff) format('woff')
    }
    @font-face {
        font-family: intercom-font;
        src: url(https://js.intercomcdn.com/fonts/proximanova-medium.2efd48a8.woff) format('woff');
        font-weight: 700
    }
    @font-face {
        font-family: intercom-font;
        src: url(https://js.intercomcdn.com/fonts/proximanova-regular-italic.9a7c1f02.woff) format('woff');
        font-style: italic
    }
    @font-face {
        font-family: intercom-font;
        src: url(https://js.intercomcdn.com/fonts/proximanova-medium-italic.04e5c3d8.woff) format('woff');
        font-weight: 700;
        font-style: italic
    }
    @font-face {
        font-family: ios-android-iconsregular;
        src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAjYABEAAAAADMQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABgAAAABwAAAAcccC8S0dERUYAAAGcAAAAHQAAACAARgAET1MvMgAAAbwAAABAAAAAYBwwDx1jbWFwAAAB/AAAAHYAAAGWEF81S2N2dCAAAAJ0AAAAAgAAAAIAAAAAZnBnbQAAAngAAAGxAAACZVO0L6dnYXNwAAAELAAAAAgAAAAIAAAAEGdseWYAAAQ0AAACGwAAArhqitlCaGVhZAAABlAAAAAvAAAANgyiag1oaGVhAAAGgAAAAB0AAAAkDzAHWGhtdHgAAAagAAAAPQAAAFxDMAM2bG9jYQAABuAAAAAgAAAANAL0A35tYXhwAAAHAAAAACAAAAAgATYAt25hbWUAAAcgAAAA/AAAAgAGBlIvcG9zdAAACBwAAACDAAABAz+61RJwcmVwAAAIoAAAAC4AAAAusPIrFHdlYmYAAAjQAAAABgAAAAbetFabAAAAAQAAAADMPaLPAAAAANLBikkAAAAA0sGPMnjaY2BkYGDgA2IJBhBgYmAEQgkgZgHzGAAFUgBLAAAAeNpjYGbxZJzAwMrAwmrEOoOBgVEOQjNfY0hjEmJABYwCaAIMDgyML5nYG/43MDCwOzHsA6lBklVgYAQArugIcXjaY2BgYGaAYBkGRgYQmADkMYL5LAwlQFqCQQAowgEUU2BYoMCloK8Qr/rnYdjTsy+Z/v/9/x+sByTDgCTDAJH5/+R/6gO2+4/ub74lLrdPykNcDGy2BAN2wAhyByMbEDNDBZiABBOGKqDDhgpgJUsXAAe6INgAAAAAAAB42l1Ru05bQRDdDQ8DgcTYIDnaFLOZkMZ7oQUJxNWNYmQ7heUIaTdykYtxAR9AgUQN2q8ZoKGkSJsGIRdIfEI+IRIza4iiNDs7s3POmTNLypGqd+lrz1PnJJDC3QbNNv1OSLWzAPek6+uNjLSDB1psZvTKdfv+Cwab0ZQ7agDlPW8pDxlNO4FatKf+0fwKhvv8H/M7GLQ00/TUOgnpIQTmm3FLg+8ZzbrLD/qC1eFiMDCkmKbiLj+mUv63NOdqy7C1kdG8gzMR+ck0QFNrbQSa/tQh1fNxFEuQy6axNpiYsv4kE8GFyXRVU7XM+NrBXbKz6GCDKs2BB9jDVnkMHg4PJhTStyTKLA0R9mKrxAgRkxwKOeXcyf6kQPlIEsa8SUo744a1BsaR18CgNk+z/zybTW1vHcL4WRzBd78ZSzr4yIbaGBFiO2IpgAlEQkZV+YYaz70sBuRS+89AlIDl8Y9/nQi07thEPJe1dQ4xVgh6ftvc8suKu1a5zotCd2+qaqjSKc37Xs6+xwOeHgvDQWPBm8/7/kqB+jwsrjRoDgRDejd6/6K16oirvBc+sifTv7FaAAAAAAEAAf//AA942qWRz4vaUBDH570YYyrdTdZo8FBr1K5CwMTEH1hKkOLBg4dFgiz7Fyyyp1KK9FBk6UlkWcRT6blIkWVC6XVPIr3k2pOUUnoq+w8Us25fpIX23DnMj+/MGx6fAQJ/WQXgf2vKhL4A0T4kIAtlQMlAxccHFqZ9zBrI+wQ1A+FzqCqSlyE6xn0vR3QwK0SuNuq2ZqmppKwI0byWKx4mNEVN2VajXtNkjYBpdiKLdpVZe+N2THNOjrvd09Nul7gbl9DIvGMx62yO2Yxlkbesw/qcG36PkAWhUZd/D3EAkTZEoopEEEN5vS0MyZqsh9vCzrHw8t96GM6wHTR3943/Ev0EPNuxW0Bz3MQM3nEnJtfnnpnBdXBtse45rIRX/HcQYJ+xKIIFI0AwMOZj3kDdx4rBmHyQ0pWYjrKP+wbes5H4yFt430COgbJ3oNiDmORJDFTCx4TkKSwr+ViSvDLLMj5mJE9kmeB7VaJ75ZJ88JHy8b18uqA2wavo8oGXUZpNs9KQtYamavIjhrKoCZpas5OJqkNtK0OTyh7N58q0oTDa9Vr1MBs9pycj0p3S9s9W9PXt19n2x+h29WL+xjm76PUuzpw/8clyPF4utzfLVWQynW6eP46kZjNst7ezo8uB4wwuj3q/IxsbT5bL8Bag3A2EG+FpeIuHRCTsGkUGkygOd8VdOUFv54IeK48dbhG4ob5ohXorcH8BTWy7hAB42mNgZGBgAOIrwurh8fw2XxnkORhA4NLBfiME/T+L/Q27E5DLwcAEEgUAH8wKhQB42mNgZGBgd/rvxMDAwQAC7G8YGBlQgSgAQYcCnQAAAHja42CAAKZVEJoFipkXMjCwOyFopmwGBsYLQGwKwQwvgHQxkE6H0CA5ZqAYBwMjA+MaJiWGJgYRAGULCaQAAAB42mNgAAIOIBRgkGBQwAM1GMoYZjCsYbRhjAEARZQEdQABAAAAGQAzAAUAAAAAAAIAAQACABYAAAEAAIAAAAAAeNqNkM9KAlEUh7/rmGCISxetxL2ikxi4jqBACAVdjzXJgEx0s0X7nqFFz9ID9OcJegsfod/cOUS4UYZz7nfO+Z1z7h2gwSsRrlrH0QHjCk1FJUeivnGVmKnxES1ejGvSvBkfM+Td+EOarfEnfVcz/qLpRsbfNNx5yT8RJ+6ajHse6ZKQc4tXlOnsyt+Ic9WmpKx4Yi2NP0C/X9HemTlX5K0zV3VAT39h/5yLcG7UsdKEPExJFKfStVnyLH8Z1BNZoe2xUHXJ3V9nuWumuxSbr8K2InsW/Clj2VA+DplY2gEjzU81Iwkv2OgryMv+32nGgzKZ8l7q9S/uuExDeNp9zcsOgkAUA9DbQUF8P1DjX8yMXpQlQfgVNTHGjQv/XmC6tpuTNGkqRv7nIAIjBpFEGGCIGAlGSDHGBFPMMMcCS6ywxgYZtthhH9+e3/fdJZ/Xw1pLS9vp24I66umRnqjSnJ7phRa0DPomqEFtqs7aab+vtbr2FuG/1VH/A0l6MMAAuAH/hbABjQBLsAhQWLEBAY5ZsUYGK1ghsBBZS7AUUlghsIBZHbAGK1xYWbAUKwAAAAFWm96zAAA=) format('woff');
        font-weight: 400;
        font-style: normal
    }
    #embedded_messenger .mobile__ios-android-icons {
        font-family: ios-android-iconsregular;
        speak: none;
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        line-height: 1
    }
    #embedded_messenger .mobile__ios-android-icons.o__ios-arrow::before {
        content: '\e900'
    }
    #embedded_messenger .mobile__ios-android-icons.o__ios-camera::before {
        content: '\e901'
    }
    #embedded_messenger .mobile__ios-android-icons.o__ios-close::before {
        content: '\e902'
    }
    #embedded_messenger .mobile__ios-android-icons.o__android-inbox::before {
        content: '\e156'
    }
    #embedded_messenger .mobile__ios-android-icons.o__android-close::before {
        content: '\e5cd'
    }
    #embedded_messenger .intercom-launcher {
        position: relative;
        margin: auto 20px 20px auto;
        bottom: auto;
        right: auto;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        cursor: default;
        box-shadow: 0 0 8px rgba(0, 0, 0, .14)
    }
    #embedded_messenger .intercom-launcher.o__preview, #embedded_messenger .intercom-note.o__preview, #embedded_messenger .intercom-pointer.o__preview, #embedded_messenger .intercom-post.o__preview, #embedded_messenger .intercom-reaction.o__editable, #embedded_messenger .intercom-snippet, #embedded_messenger .messenger-container.o__preview, #embedded_messenger .mobile__note-android.o__preview, #embedded_messenger .mobile__note-ios.o__preview, #embedded_messenger .mobile__post-android.o__preview, #embedded_messenger .mobile__post-ios.o__preview, #embedded_messenger .snippet-mobile-chat-container, #embedded_messenger .snippet-mobile.o__preview, .reaction-picker-popover__icon, .reaction-picker-popover__remove-emoji {
        cursor: pointer
    }
    #embedded_messenger .intercom-launcher.o__preview-with-badge {
        position: absolute;
        bottom: 0;
        right: 0
    }
    #embedded_messenger .intercom-launcher.o__android, #embedded_messenger .intercom-launcher.o__ios {
        left: 20px
    }
    #embedded_messenger .intercom-launcher.o__preview-with-badge.o__android, #embedded_messenger .intercom-launcher.o__preview-with-badge.o__ios {
        bottom: 48px
    }
    #embedded_messenger .intercom-conversation-unread-count, #embedded_messenger .intercom-launcher-badge {
        background: #fc576b;
        width: 22px;
        height: 22px;
        line-height: 22px;
        border-radius: 50%;
        color: #fff;
        font-size: 12px;
        font-weight: 500;
        text-align: center;
        box-shadow: 0 1px 0 rgba(0, 0, 0, .27);
        position: absolute;
        top: -3px;
        right: -3px
    }
    #embedded_messenger .intercom-launcher-open-icon {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 32px 40px;
        background-image: url(https://js.intercomcdn.com/images/launcher-icon-new.24c1008f.png)
    }
    @media (min-resolution:1.3dppx) {
        #embedded_messenger .intercom-launcher-open-icon {
            background-image: url(https://js.intercomcdn.com/images/launcher-icon-new@2x.7e6b8b52.png)
        }
    }
    #embedded_messenger.o__read-only {
        pointer-events: none
    }
    #embedded_messenger .mobile__messenger__device-shell {
        background-color: #fff;
        padding: 30px;
        margin: auto
    }
    #embedded_messenger .mobile__messenger__device-shell.o__android {
        width: 401px;
        min-height: 781px
    }
    #embedded_messenger .mobile__messenger__device-shell.o__ios {
        width: 437px;
        min-height: 886px
    }
    #embedded_messenger .mobile__messenger__device-screen {
        position: relative;
        z-index: 1;
        background-color: #fff;
        border: 2px solid #eaedef
    }
    #embedded_messenger .mobile__messenger__device-screen.o__blur {
        filter: blur(4px)
    }
    #embedded_messenger .mobile__messenger__device-screen.o__ios {
        width: 375px;
        margin-left: 33px
    }
    #embedded_messenger .mobile__messenger__device-screen.o__ios.o__preview {
        margin-top: 107px
    }
    #embedded_messenger .mobile__messenger__device-screen.o__android {
        width: 360px;
        margin-left: 22px
    }
    #embedded_messenger .mobile__messenger__device-screen.o__android.o__preview {
        margin-top: 62px
    }
    #embedded_messenger .mobile__messenger__device-shell-container {
        position: absolute;
        opacity: 0
    }
    #embedded_messenger .mobile__messenger__device-shell-container.o__visible {
        opacity: 1
    }
    #embedded_messenger .mobile__messenger__content-viewport {
        position: relative;
        word-wrap: break-word
    }
    #embedded_messenger .mobile__messenger__content-viewport.o__web.o__chat, #embedded_messenger .mobile__messenger__content-viewport.o__web.o__note {
        padding-right: 280px
    }
    #embedded_messenger .mobile__messenger__content-viewport.o__android {
        font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
        min-height: 615px
    }
    #embedded_messenger .mobile__messenger__content-viewport.o__android.o__preview {
        max-height: 615px
    }
    #embedded_messenger .mobile__messenger__content-viewport.o__ios {
        min-height: 647px
    }
    #embedded_messenger .mobile__messenger__content-viewport.o__ios.o__post.o__preview {
        max-height: 647px
    }
    #embedded_messenger .mobile__messenger__content-viewport.o__ios.o__chat.o__with-visible-app-overlay {
        min-height: 631px
    }
    #embedded_messenger .mobile-messenger__header {
        height: 56px;
        box-sizing: border-box;
        pointer-events: none
    }
    #embedded_messenger .mobile-messenger__header.o__android {
        padding: 12px 24px
    }
    #embedded_messenger .mobile-messenger__header.o__android.o__chat {
        padding: 12px 16px;
        color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .14)
    }
    #embedded_messenger .mobile-messenger__header.o__ios {
        padding: 10px 24px
    }
    #embedded_messenger .mobile-messenger__header.o__ios.o__chat {
        height: 44px;
        padding: 6px 24px;
        background-color: #fbfbfb
    }
    #embedded_messenger .mobile-messenger__header.o__ios.o__note {
        border-radius: 6px 6px 0 0
    }
    #embedded_messenger .mobile__messenger {
        position: relative;
        height: 100%
    }
    #embedded_messenger .mobile-messenger__navigation-text {
        font-size: 17px;
        margin-top: 7px
    }
    #embedded_messenger .mobile-messenger__navigation-text.o__back {
        width: 12px;
        height: 22px;
        float: left;
        margin-right: 24px
    }
    #embedded_messenger .mobile-messenger__navigation-text.o__close {
        float: right
    }
    #embedded_messenger .mobile-messenger__header__from {
        display: inline-block;
        font-size: 13px;
        line-height: 17px;
        width: 255px;
        color: #57575d
    }
    #embedded_messenger .mobile-messenger__header__from.o__android.o__chat, #embedded_messenger .mobile-messenger__header__from.o__post {
        color: #fff
    }
    #embedded_messenger .mobile-messenger__header__from.o__ios.o__chat {
        width: 240px
    }
    #embedded_messenger .mobile-messenger__header__from.o__android.o__chat {
        width: 220px
    }
    #embedded_messenger .mobile-messenger__header-last-seen {
        color: #92929c
    }
    #embedded_messenger .mobile-messenger__header-last-seen.o__android.o__chat, #embedded_messenger .mobile-messenger__header-last-seen.o__post {
        color: rgba(255, 255, 255, .7)
    }
    #embedded_messenger .mobile-messenger__from-avatar {
        border-radius: 50%;
        width: 28px;
        height: 28px;
        float: left;
        margin-right: 16px;
        margin-top: 2px
    }
    #embedded_messenger .mobile-messenger__from-avatar.o__post {
        width: 32px;
        height: 32px
    }
    #embedded_messenger .mobile__ios-android-icons.o__android-close {
        font-size: 24px;
        margin-top: 5px
    }
    #embedded_messenger .mobile__ios-android-icons.o__android-close, #embedded_messenger .mobile__ios-android-icons.o__ios-close {
        float: right
    }
    #embedded_messenger .mobile__ios-android-icons.o__ios-close {
        margin-top: 12px
    }
    #embedded_messenger .mobile__ios-android-icons.o__android-close.o__note, #embedded_messenger .mobile__ios-android-icons.o__ios-close.o__note {
        opacity: .5
    }
    #embedded_messenger .mobile__messenger__reply-bar {
        width: 100%;
        box-sizing: border-box;
        position: relative
    }
    #embedded_messenger .mobile__messenger__reply-bar.o__android {
        height: 56px;
        padding: 18px 24px
    }
    #embedded_messenger .mobile__messenger__reply-bar.o__android.o__chat {
        box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, .05), 0 -1px 0 0 rgba(168, 183, 191, .12)
    }
    #embedded_messenger .mobile__messenger__reply-bar.o__ios {
        height: 52px;
        padding: 16px 24px
    }
    #embedded_messenger .mobile__messenger__reply-bar.o__ios.o__chat {
        height: 44px;
        padding: 12px 14px 9px
    }
    #embedded_messenger .mobile__messenger__reply-bar.o__reactions {
        padding: 0
    }
    #embedded_messenger .mobile__messenger__reply-text {
        color: #d3d3d8;
        font-size: 16px;
        pointer-events: none
    }
    #embedded_messenger .mobile__messenger__reply-text.o__post {
        color: rgba(255, 255, 255, .4)
    }
    #embedded_messenger .mobile__messenger__attachment.o__post {
        fill: rgba(255, 255, 255, .4)
    }
    #embedded_messenger .mobile__messenger__reply-text.o__send {
        font-weight: 500
    }
    #embedded_messenger .mobile__messenger__ios-camera {
        margin-right: 19px
    }
    #embedded_messenger .mobile__messenger__chat-avatar {
        border-radius: 50%;
        width: 28px;
        height: 28px;
        position: absolute;
        left: 8px;
        bottom: 0
    }
    #embedded_messenger .mobile__messenger ic-block[data-type=attachment], #embedded_messenger .mobile__messenger__chat-content-container {
        position: relative
    }
    #embedded_messenger .mobile__messenger .embercom-composer-editor ol, #embedded_messenger .mobile__messenger .embercom-composer-editor ul {
        margin-left: -20px
    }
    #embedded_messenger .mobile__messenger .embercom-composer-editor img {
        display: block;
        max-width: 100%;
        margin: 8px 0
    }
    #embedded_messenger .mobile__messenger .embercom-composer-editor iframe {
        width: 100%;
        margin: 8px auto
    }
    #embedded_messenger .mobile__messenger .embercom-composer-editor h1:first-child, #embedded_messenger .mobile__messenger .embercom-composer-editor h2:first-child, #embedded_messenger .mobile__messenger .embercom-composer-editor p:first-child {
        margin-top: 0
    }
    #embedded_messenger .mobile__messenger a.intercom-h2b-button, #embedded_messenger .mobile__messenger.o__note ic-block[data-type=attachment] a, #embedded_messenger .mobile__messenger.o__post ic-block[data-type=attachment] a {
        color: #fff;
        margin: 9px 0 0;
        padding: 7px 0 9px;
        box-sizing: border-box;
        border-radius: 4px;
        width: 100%;
        text-decoration: none;
        text-align: center;
        font-size: 15px;
        line-height: 24px;
        display: inline-block;
        font-weight: 400;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }
    #embedded_messenger .mobile__messenger.o__note ic-block[data-type=attachment] a, #embedded_messenger .mobile__messenger.o__post ic-block[data-type=attachment] a {
        padding-left: 40px;
        padding-right: 40px
    }
    #embedded_messenger .mobile__messenger.o__note ic-block[data-type=attachment] a {
        color: #696972
    }
    #embedded_messenger .mobile__messenger.o__chat ic-block[data-type=attachment] a {
        line-height: 24px;
        padding-left: 20px;
        color: #686fe4
    }
    #embedded_messenger .mobile__messenger ic-block[data-type=attachment] a::before {
        background-image: url(https://js.intercomcdn.com/images/attachment.35cbfe8a.png);
        background-size: 17px 18px;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        top: 20px;
        left: 14px;
        width: 17px;
        height: 18px;
        content: ''
    }
    #embedded_messenger .mobile__messenger.o__chat ic-block[data-type=attachment] a::before {
        left: 0;
        top: 0
    }
    #embedded_messenger .mobile__messenger.o__note ic-block[data-type=attachment] .composer-attachment-delete-icon, #embedded_messenger .mobile__messenger.o__post ic-block[data-type=attachment] .composer-attachment-delete-icon {
        position: absolute;
        right: -5px;
        top: 2px
    }
    #embedded_messenger .mobile__messenger ic-block[data-type=facebookLikeButton], #embedded_messenger .mobile__messenger ic-block[data-type=twitterFollowButton] {
        display: block
    }
    #embedded_messenger .mobile__messenger ic-block[data-type=facebookLikeButton] a.link-only-mode.intercom-h2b-button, #embedded_messenger .mobile__messenger ic-block[data-type=twitterFollowButton] a.link-only-mode.intercom-h2b-button {
        text-transform: none;
        padding-right: 10px
    }
    #embedded_messenger .mobile__messenger ic-block[data-type=facebookLikeButton] a.link-only-mode.intercom-h2b-button i::before, #embedded_messenger .mobile__messenger ic-block[data-type=twitterFollowButton] a.link-only-mode.intercom-h2b-button i::before {
        font-family: Socialicious;
        font-size: 1em;
        font-style: normal;
        color: #fff;
        float: left;
        margin-left: 12px
    }
    #embedded_messenger .mobile__messenger ic-block[data-type=twitterFollowButton] a.link-only-mode.intercom-h2b-button i::before {
        content: 'H'
    }
    #embedded_messenger .mobile__messenger ic-block[data-type=facebookLikeButton] a.link-only-mode.intercom-h2b-button i::before {
        content: 'g'
    }
    #embedded_messenger .mobile__messenger__device-body {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        background-position-x: center;
        background-repeat: repeat-y
    }
    #embedded_messenger .mobile__messenger__device-body.o__android {
        top: 80px;
        background-size: 360px 76px;
        background-image: url(/embercom-composer/images/android-app-row@2x.png)
    }
    #embedded_messenger .mobile__messenger__device-body.o__ios {
        top: 64px;
        background-size: 375px 73px;
        background-image: url(/embercom-composer/images/ios-app-row@2x.png)
    }
    #embedded_messenger .mobile__messenger__device-header {
        position: absolute;
        pointer-events: none
    }
    #embedded_messenger .mobile__messenger__device-footer {
        position: absolute;
        bottom: 0;
        pointer-events: none
    }
    #embedded_messenger .intercom-note {
        margin: 20px 20px 20px auto;
        width: 342px;
        max-width: 342px;
        background: #fff;
        border-radius: 7px;
        box-shadow: 0 3px 32px 0 rgba(0, 0, 0, .14);
        font-size: 14px;
        color: #6e7a89
    }
    #embedded_messenger .intercom-note-body {
        padding-bottom: 17px
    }
    #embedded_messenger .intercom-note-footer {
        position: relative;
        bottom: -20px;
        left: 0;
        right: 0
    }
    #embedded_messenger .intercom-note-footer .intercom-composer-emoji-button, #embedded_messenger .intercom-note-footer .intercom-composer-upload-button {
        height: 100%
    }
    #embedded_messenger .intercom-note-footer-visible {
        bottom: 0
    }
    #embedded_messenger .intercom-note-close {
        float: right;
        display: inline-block;
        width: 12px;
        background-position: center;
        line-height: 31px;
        position: absolute;
        top: 20px;
        right: 20px;
        background-image: url(https://js.intercomcdn.com/images/close.c8b28aea.png);
        background-size: 12px 12px;
        background-repeat: no-repeat;
        pointer-events: none
    }
    @media (min-resolution:1.3dppx) {
        #embedded_messenger .intercom-note-close {
            background-image: url(https://js.intercomcdn.com/images/close@2x.7ae99936.png)
        }
    }
    #embedded_messenger .intercom-note-composer {
        width: 100%;
        background-color: #ecf0f3;
        box-sizing: border-box;
        padding: 15px 25px;
        border-radius: 0 0 8px 8px;
        color: #959ea9;
        font-size: 14px;
        line-height: 26px;
        pointer-events: none
    }
    #embedded_messenger .intercom-pointer {
        margin: 100px auto 50px;
        width: 272px;
        max-width: 272px;
        background: #fff;
        border-radius: 7px;
        font-size: 14px;
        color: #6e7a89
    }
    #embedded_messenger .intercom-pointer-arrow {
        content: '';
        width: 0;
        height: 0;
        transform-origin: 0 0;
        transform: rotate(-45deg);
        border: 8px solid #fff;
        box-sizing: border-box;
        position: absolute;
        top: 1px;
        left: 45%;
        box-shadow: 2px -2px 2px 0 rgba(0, 0, 0, .1)
    }
    #embedded_messenger .intercom-pointer .intercom-authored-container {
        border-radius: 5px;
        box-shadow: 0 2px 32px rgba(0, 0, 0, .14);
        border: 1px solid rgba(0, 0, 0, .1)
    }
    #embedded_messenger .intercom-pointer .intercom-authored-container-top {
        padding: 25px 17px;
        pointer-events: none
    }
    #embedded_messenger .intercom-pointer-footer {
        position: relative;
        bottom: -20px;
        left: 0;
        right: 0
    }
    #embedded_messenger .intercom-pointer-footer .intercom-composer-emoji-button {
        height: 100%
    }
    #embedded_messenger .intercom-pointer-footer .intercom-reaction {
        font-size: 24px;
        width: 35px
    }
    #embedded_messenger .intercom-pointer-footer .intercom-reaction-picker.o__web {
        background: #fff
    }
    #embedded_messenger .intercom-pointer-footer-visible {
        bottom: 0;
        padding-top: 20px
    }
    #embedded_messenger .intercom-pointer-close {
        float: right;
        display: inline-block;
        width: 12px;
        background-position: center;
        line-height: 31px;
        position: absolute;
        top: 20px;
        right: 20px;
        background-image: url(https://js.intercomcdn.com/images/close.c8b28aea.png);
        background-size: 12px 12px;
        background-repeat: no-repeat;
        pointer-events: none
    }
    @media (min-resolution:1.3dppx) {
        #embedded_messenger .intercom-pointer-close {
            background-image: url(https://js.intercomcdn.com/images/close@2x.7ae99936.png)
        }
    }
    #embedded_messenger .intercom-pointer .intercom-composer-placeholder-icon {
        margin-top: -3px;
        float: left
    }
    #embedded_messenger .intercom-pointer .intercom-composer-placeholder {
        margin-left: 3px
    }
    #embedded_messenger .intercom-pointer-composer {
        width: 100%;
        box-sizing: border-box;
        border-top: 1px solid #e6e6e6;
        padding: 16.5px 17px;
        border-radius: 0 0 8px 8px;
        color: #959ea9;
        font-size: 14px;
        pointer-events: none
    }
    #embedded_messenger .intercom-pointer .intercom-reaction-picker {
        height: 55px;
        box-sizing: border-box;
        border-top: 1px solid #e6e6e6;
        padding: 12px 5px
    }
    #embedded_messenger .intercom-pointer .intercom-interblocks-messenger-card {
        margin: 17px;
        width: auto
    }
    #embedded_messenger .intercom-notification {
        padding-top: 10px;
        height: 110px;
        clear: both
    }
    #embedded_messenger .intercom-notification-chat-full {
        padding-top: 10px;
        clear: both
    }
    #embedded_messenger .intercom-overlay {
        align-items: center;
        justify-content: center;
        min-width: 100%;
        min-height: 100%;
        box-sizing: border-box
    }
    #embedded_messenger .intercom-overlay-inner {
        height: 100%;
        width: 100%;
        overflow: visible;
        box-sizing: border-box;
        padding: 40px 20px
    }
    #embedded_messenger .intercom-modal-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .85)
    }
    #embedded_messenger .intercom-post {
        width: 90%;
        height: 100%;
        max-width: 800px;
        background: #fff;
        border-radius: 7px;
        box-shadow: 0 3px 32px 0 rgba(0, 0, 0, .14);
        font-size: 15px;
        color: #6e7a89;
        margin: 0 auto
    }
    #embedded_messenger .intercom-post-close {
        float: right;
        line-height: 35px;
        display: inline-block;
        background-position: center;
        width: 35px;
        position: absolute;
        top: 20px;
        right: 30px;
        background-image: url(https://js.intercomcdn.com/images/close.c8b28aea.png);
        background-size: 12px 12px;
        background-repeat: no-repeat;
        pointer-events: none
    }
    @media (min-resolution:1.3dppx) {
        #embedded_messenger .intercom-post-close {
            background-image: url(https://js.intercomcdn.com/images/close@2x.7ae99936.png)
        }
    }
    #embedded_messenger .intercom-post-body {
        height: 100%;
        padding-bottom: 17px
    }
    #embedded_messenger .intercom-post-footer {
        position: relative;
        bottom: -20px;
        left: 0;
        right: 0
    }
    #embedded_messenger .intercom-post-footer .intercom-composer-emoji-button, #embedded_messenger .intercom-post-footer .intercom-composer-upload-button {
        height: 100%
    }
    #embedded_messenger .intercom-post-footer-visible {
        bottom: 0
    }
    #embedded_messenger .intercom-post-composer {
        width: 100%;
        background-color: #ecf0f3;
        box-sizing: border-box;
        padding: 15px 38px;
        border-radius: 0 0 8px 8px;
        color: #959ea9;
        font-size: 14px;
        line-height: 26px;
        pointer-events: none
    }
    #embedded_messenger .intercom-post-composer .intercom-composer-write-reply {
        background-image: url(https://js.intercomcdn.com/images/chat-icon.42259c1f.png);
        background-size: 20px 19px;
        background-repeat: no-repeat;
        background-position: 0 50%;
        display: inline-block;
        padding-left: 28px
    }
    @media (min-resolution:1.3dppx) {
        #embedded_messenger .intercom-post-composer .intercom-composer-write-reply {
            background-image: url(https://js.intercomcdn.com/images/chat-icon@2x.6e419f8c.png)
        }
    }
    #embedded_messenger .intercom-reaction-picker {
        height: 45px;
        padding: 5px;
        border-radius: 0 0 6px 6px;
        text-align: center
    }
    #embedded_messenger .intercom-reaction-picker.o__web {
        background-color: #f0f3f5
    }
    #embedded_messenger .intercom-reaction-picker.o__preview {
        pointer-events: none
    }
    #embedded_messenger .intercom-reaction {
        width: 50px;
        height: 100%;
        display: inline-block;
        text-align: center;
        font-size: 32px;
        line-height: 1.5;
        box-sizing: border-box;
        border: 2px dashed transparent
    }
    #embedded_messenger .intercom-reaction.o__editable.o__insert, #embedded_messenger .intercom-reaction.o__editable:hover {
        border-color: #c9d7df
    }
    #embedded_messenger .intercom-reaction.o__editable.o__web.o__insert, #embedded_messenger .intercom-reaction.o__editable.o__web:hover {
        background-color: #eaeff2
    }
    #embedded_messenger .intercom-reaction.o__editable.o__insert {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        color: #c9d7df;
        box-sizing: border-box;
        position: absolute;
        font-size: 22px;
        line-height: 45px;
        display: none
    }
    #embedded_messenger .intercom-reaction.o__editable.o__insert.o__mobile_post {
        color: #fff
    }
    #embedded_messenger .intercom-reaction-picker-add-reaction.o__open .intercom-reaction.o__editable.o__insert, #embedded_messenger .intercom-reaction-picker:hover .intercom-reaction.o__editable.o__insert {
        display: inherit
    }
    #embedded_messenger .intercom-reaction-picker-plus {
        position: relative;
        top: -10px
    }
    #embedded_messenger .intercom-reaction-picker-add-reaction {
        margin-left: 12px
    }
    .reaction-picker-popover {
        width: 100%;
        max-width: 340px;
        height: 255px;
        position: fixed!important;
        padding-top: 0;
        padding-bottom: 0;
        border: 1px solid #c9d7df;
        background-color: #fff
    }
    .reaction-picker-popover__icon {
        font-size: 24px;
        text-align: center;
        color: #60686e;
        padding: 5px;
        width: 30px;
        line-height: 30px;
        display: inline-table;
        vertical-align: middle
    }
    .reaction-picker-popover__icon:hover {
        transform: scale(1.1)
    }
    .reaction-picker-popover__panel {
        overflow-y: scroll;
        height: 100%;
        position: relative;
        z-index: 1
    }
    .reaction-picker-popover__header {
        margin-left: 25px;
        margin-right: 30px;
        margin-top: 20px
    }
    .reaction-picker-popover__icons {
        margin-left: 15px
    }
    .reaction-picker-popover__icons:last-child {
        margin-bottom: 20px
    }
    .reaction-picker-popover__mask {
        height: 30px;
        width: 100%;
        position: absolute;
        left: 0;
        content: '';
        border-radius: 0 3px;
        pointer-events: none;
        display: block;
        z-index: 2
    }
    .reaction-picker-popover__mask__top {
        background: linear-gradient(#fff, rgba(255, 255, 255, 0) 20px);
        top: 0
    }
    .reaction-picker-popover__mask__bottom {
        background: linear-gradient(rgba(255, 255, 255, 0), #fff 20px);
        bottom: 0
    }
    .reaction-picker-popover__remove-emoji {
        float: right;
        text-decoration: underline
    }
    @media (-webkit-min-device-pixel-ratio:2), (min-resolution:192dpi) {
        .reaction-picker-popover__icon {
            font-size: 28px
        }
    }
    .reaction-picker-popover__image {
        background-image: url(https://js.intercomcdn.com/images/emoji-spritemap-16.png);
        background-size: 464px, 464px;
        background-repeat: no-repeat;
        cursor: pointer
    }
    @media (min-device-pixel-ratio:1.3), (min-resolution:1.3dppx) {
        .reaction-picker-popover__image {
            background-image: url(https://js.intercomcdn.com/images/emoji-spritemap-32.png)
        }
    }
    .reaction-picker-popover__image.o__large {
        background-image: url(https://js.intercomcdn.com/images/emoji-spritemap-32.png);
        background-size: 928px, 928px
    }
    #embedded_messenger .intercom-snippet {
        position: absolute;
        bottom: 96px;
        right: 20px;
        max-height: 120px;
        width: 304px;
        z-index: 1
    }
    #embedded_messenger .intercom-snippet .intercom-authored-container-top {
        padding: 0
    }
    #embedded_messenger .intercom-snippet .intercom-authored-container {
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16)
    }
    #embedded_messenger .intercom-snippet-body {
        margin: 5px 0 0;
        font-size: 15px;
        line-height: 19px;
        overflow: hidden;
        width: 264px;
        max-height: calc(100% - 50px);
        color: #6e7a89
    }
    #embedded_messenger .intercom-snippet-body .intercom-block {
        color: #6e7a89
    }
    #embedded_messenger .intercom-snippet-body .intercom-block-heading {
        font-size: 18px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical
    }
    #embedded_messenger .intercom-snippet-body .intercom-block-heading span {
        color: #4d4e5f
    }
    #embedded_messenger .intercom-chat-snippet .intercom-snippet-body {
        margin-top: 12px
    }
    #embedded_messenger .intercom-chat-snippet-avatar {
        position: absolute;
        bottom: 0;
        left: -3px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16);
        border-radius: 50%
    }
    #embedded_messenger .intercom-chat-snippet-avatar.o__with-team {
        box-shadow: none
    }
    #embedded_messenger .intercom-chat-snippet-avatar .intercom-avatar {
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 25px
    }
    #embedded_messenger .intercom-chat-snippet-avatar .intercom-avatar img {
        width: 50px;
        height: 50px
    }
    #embedded_messenger .intercom-chat-snippet-card {
        margin-left: 60px;
        padding: 17px 22px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 6px 6px 6px 0;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16);
        font-size: 13px;
        line-height: 1.5;
        height: 100%;
        position: relative
    }
    #embedded_messenger .snippet-mobile, #embedded_messenger .snippet-mobile-chat {
        background-color: #fff;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, .03), 0 1px 3px 0 rgba(0, 0, 0, .09), 0 2px 12px 0 rgba(0, 0, 0, .25);
        box-sizing: border-box
    }
    #embedded_messenger .intercom-chat-snippet-card:after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 100%;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 13px 5px;
        border-color: transparent transparent #fff
    }
    #embedded_messenger .intercom-chat-snippet-body {
        width: 204px;
        max-height: calc(100% - 25px)
    }
    #embedded_messenger .mobile__note-android__content.o__preview, #embedded_messenger .mobile__note-ios__content.o__preview {
        max-height: 301px
    }
    #embedded_messenger .snippet-mobile {
        border-radius: 4px;
        height: 90px;
        position: absolute;
        bottom: 58px
    }
    #embedded_messenger .snippet-mobile.o__android {
        width: 328px;
        left: 16px;
        padding: 14px 20px
    }
    #embedded_messenger .snippet-mobile.o__ios {
        width: 340px;
        left: 18px;
        padding: 16px 24px
    }
    #embedded_messenger .snippet-mobile-content {
        display: inline-block
    }
    #embedded_messenger .snippet-mobile-content.o__android {
        max-width: 224px;
        color: #696972
    }
    #embedded_messenger .snippet-mobile-content.o__ios {
        max-width: 228px;
        color: rgba(87, 87, 93, .7)
    }
    #embedded_messenger .snippet-mobile-from {
        font-size: 16px;
        color: #424242
    }
    #embedded_messenger .snippet-mobile-intercom-avatar {
        border-radius: 50%;
        float: left;
        height: 48px;
        width: 48px;
        line-height: 48px;
        margin-right: 16px
    }
    #embedded_messenger .snippet-mobile-intercom-avatar.o__android {
        margin-top: 6px
    }
    #embedded_messenger .snippet-mobile-intercom-avatar.o__ios {
        margin-top: 4px
    }
    #embedded_messenger .snippet-mobile-intercom-avatar img {
        border-radius: 50%;
        height: 48px;
        width: 48px
    }
    #embedded_messenger .snippet-mobile-chat {
        border-radius: 11px;
        width: 256px;
        padding: 10px 18px;
        position: absolute;
        bottom: 65px;
        left: 85px
    }
    #embedded_messenger .snippet-mobile-chat-content.o__android {
        color: #696972
    }
    #embedded_messenger .snippet-mobile-chat-content.o__ios {
        color: rgba(87, 87, 93, .7)
    }
    #embedded_messenger .snippet-mobile-chat-caret {
        position: absolute;
        bottom: 62px;
        left: 80px
    }
    #embedded_messenger .snippet-mobile-chat-avatar {
        border-radius: 50%;
        width: 48px;
        height: 48px;
        line-height: 48px;
        position: absolute;
        left: 16px;
        bottom: 65px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .5)
    }
    #embedded_messenger .intercom-team-avatar {
        width: 35px;
        height: 35px;
        position: relative;
        float: left;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        font-weight: 700
    }
    #embedded_messenger .intercom-team-avatar-small {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        border: 2px solid #fff
    }
    #embedded_messenger .intercom-team-avatar-large {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #fff
    }
    #embedded_messenger .intercom-first-of-two-admins {
        top: 9px;
        left: -2px;
        z-index: 1
    }
    #embedded_messenger .intercom-second-of-two-admins {
        top: 9px;
        right: -2px;
        z-index: 2
    }
    #embedded_messenger .intercom-first-of-three-admins {
        top: -1;
        left: 6px;
        z-index: 2
    }
    #embedded_messenger .intercom-second-of-three-admins {
        top: 15px;
        right: 14px;
        z-index: 3
    }
    #embedded_messenger .intercom-third-of-three-admins {
        top: 15px;
        left: 14px;
        z-index: 1
    }
    #embedded_messenger .u__truncate {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }
    #embedded_messenger .u__hidden-scrollbar {
        overflow: hidden;
        overflow-y: auto
    }
    #embedded_messenger .u__hidden-scrollbar::-webkit-scrollbar {
        width: 0;
        background: 0 0
    }
    #embedded_messenger .web-chrome__container {
        border: 1px solid #d5dce0;
        box-shadow: 0 1px 7px 0 rgba(202, 203, 204, .2);
        background-color: #fff;
        position: relative;
        margin: auto
    }
    #embedded_messenger .web-chrome__container.o__chat::after, #embedded_messenger .web-chrome__container.o__note::after {
        background: linear-gradient(to right, rgba(255, 255, 255, 1) 0, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, .14) 65%, rgba(255, 255, 255, 0) 100%);
        content: '';
        position: absolute;
        left: -10px;
        top: -5px;
        bottom: -5px;
        width: 80%
    }
    #embedded_messenger .web-chrome__browser-header {
        pointer-events: none
    }
    #embedded_messenger .web-chrome__app-nav {
        position: absolute;
        pointer-events: none;
        width: 100%
    }
    #embedded_messenger .web-chrome__app-name {
        position: absolute;
        top: 15px;
        left: 26px;
        font-size: 11px;
        color: #91a4ad;
        width: 130px
    }
    #embedded_messenger .web-chrome__app-body {
        position: absolute;
        top: 51px;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(/embercom-composer/images/chrome-app-row@2x.png);
        background-color: #fff;
        background-position-x: center;
        background-size: 475px 57px;
        background-repeat: repeat-y
    }
    #embedded_messenger .web-chrome__messenger-container {
        font-family: intercom-font, "Helvetica Neue", Helvetica, Arial, sans-serif;
        display: table;
        width: 100%;
        height: 400px
    }
    #embedded_messenger .web-chrome__messenger-preview-container {
        display: table-cell;
        vertical-align: bottom
    }
    #embedded_messenger .web-chrome__messenger-preview-container.o__post {
        vertical-align: middle
    }
    #embedded_messenger .web-chrome__messenger-preview-container.o__chat, #embedded_messenger .web-chrome__messenger-preview-container.o__note {
        position: relative;
        z-index: 1
    }
    #embedded_messenger .mobile__chat-android {
        background-color: #fff
    }
    #embedded_messenger .mobile__chat-android__content {
        min-height: 501px;
        border-top: 1px solid rgba(168, 183, 191, .12);
        border-bottom: 1px solid rgba(168, 183, 191, .12)
    }
    #embedded_messenger .mobile__chat-android .attachment-list-container, #embedded_messenger .mobile__chat-android .embercom-composer-editor {
        margin: 16px 24px 16px 48px;
        padding: 16px;
        color: #57575d;
        background: #eeeef2;
        border-radius: 12px;
        height: auto;
        width: 250px;
        font-size: 16px;
        line-height: 20px;
        box-sizing: border-box
    }
    #embedded_messenger .mobile__chat-android .attachment-list-container {
        margin-top: -28px;
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }
    #embedded_messenger .mobile__chat-android .embercom-composer-editor p {
        margin: 16px 0 0
    }
    #embedded_messenger .mobile__chat-android .embercom-composer-editor pre.code {
        padding: 10px;
        background-color: #696972;
        font-size: 14px;
        color: #fff
    }
    #embedded_messenger .mobile__chat-android .embercom-composer-editor b, #embedded_messenger .mobile__chat-android .embercom-composer-editor h1, #embedded_messenger .mobile__chat-android .embercom-composer-editor h2 {
        font-weight: 500
    }
    #embedded_messenger .mobile__chat-android .embercom-composer-editor h1+ol, #embedded_messenger .mobile__chat-android .embercom-composer-editor h1+p, #embedded_messenger .mobile__chat-android .embercom-composer-editor h1+ul, #embedded_messenger .mobile__chat-android .embercom-composer-editor h2+ol, #embedded_messenger .mobile__chat-android .embercom-composer-editor h2+p, #embedded_messenger .mobile__chat-android .embercom-composer-editor h2+ul {
        margin-top: 16px
    }
    #embedded_messenger .mobile__chat-android .embercom-composer-editor h1, #embedded_messenger .mobile__chat-android .embercom-composer-editor h2, #embedded_messenger .mobile__chat-android .embercom-composer-editor ol, #embedded_messenger .mobile__chat-android .embercom-composer-editor p, #embedded_messenger .mobile__chat-android .embercom-composer-editor ul {
        margin-top: 8px;
        font-size: 16px
    }
    #embedded_messenger .mobile__note-android__overlay {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        padding: 100px 0
    }
    #embedded_messenger .mobile__note-android {
        width: 328px;
        min-height: 320px;
        color: #616161;
        border-radius: 4px;
        background: #fafafa;
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .5), 0 2px 4px 0 rgba(0, 0, 0, .5);
        margin: auto
    }
    #embedded_messenger .mobile__note-android__from {
        position: absolute;
        top: 17px;
        left: 64px;
        right: 64px;
        font-size: 16px
    }
    #embedded_messenger .mobile__note-android__content {
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        min-height: 301px
    }
    #embedded_messenger .mobile__note-android .attachment-list-container, #embedded_messenger .mobile__note-android .embercom-composer-editor {
        padding: 25px 20px;
        color: #616161;
        font-size: 16px;
        line-height: 24px
    }
    #embedded_messenger .mobile__note-android .embercom-composer-editor h1 {
        font-size: 24px;
        line-height: 36px;
        font-weight: 400;
        margin-top: 16px
    }
    #embedded_messenger .mobile__note-android .embercom-composer-editor h2 {
        font-size: 16px;
        margin-top: 24px;
        font-weight: 400
    }
    #embedded_messenger .mobile__note-android .embercom-composer-editor h1+ol, #embedded_messenger .mobile__note-android .embercom-composer-editor h1+p, #embedded_messenger .mobile__note-android .embercom-composer-editor h1+ul {
        margin-top: 16px
    }
    #embedded_messenger .mobile__note-android .embercom-composer-editor h2+ol, #embedded_messenger .mobile__note-android .embercom-composer-editor h2+p, #embedded_messenger .mobile__note-android .embercom-composer-editor h2+ul {
        margin-top: 8px
    }
    #embedded_messenger .mobile__note-android .embercom-composer-editor p {
        margin: 16px 0 0
    }
    #embedded_messenger .mobile__note-android .embercom-composer-editor pre.code {
        padding: 10px;
        background-color: #696972;
        font-size: 14px;
        color: #fff
    }
    #embedded_messenger .mobile__note-android .embercom-composer-editor b {
        font-weight: 500
    }
    #embedded_messenger .mobile__note-android ic-block[data-type=attachment] a {
        background-color: #fafafa;
        border: 1px solid #d3d3d8
    }
    #embedded_messenger .mobile__post-android {
        color: #fff;
        width: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, .8) 100%)
    }
    #embedded_messenger .mobile__post-android__content {
        border-top: 1px solid rgba(255, 255, 255, .1);
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        min-height: 501px
    }
    #embedded_messenger .mobile__post-android .attachment-list-container, #embedded_messenger .mobile__post-android .embercom-composer-editor {
        padding: 5px 30px 20px;
        font-size: 16px;
        line-height: 24px
    }
    #embedded_messenger .mobile__post-android .embercom-composer-editor h1 {
        line-height: 40px;
        font-weight: 300;
        font-size: 28px;
        margin-top: 30px
    }
    #embedded_messenger .mobile__post-android .embercom-composer-editor h2 {
        font-size: 16px;
        margin-top: 28px;
        font-weight: 400
    }
    #embedded_messenger .mobile__post-android .embercom-composer-editor h1+ol, #embedded_messenger .mobile__post-android .embercom-composer-editor h1+p, #embedded_messenger .mobile__post-android .embercom-composer-editor h1+ul {
        margin-top: 20px
    }
    #embedded_messenger .mobile__post-android .embercom-composer-editor h2+ol, #embedded_messenger .mobile__post-android .embercom-composer-editor h2+p, #embedded_messenger .mobile__post-android .embercom-composer-editor h2+ul {
        margin-top: 12px
    }
    #embedded_messenger .mobile__post-android .embercom-composer-editor p {
        margin: 16px 0 0
    }
    #embedded_messenger .mobile__post-android .embercom-composer-editor pre.code {
        padding: 10px;
        background-color: #696972;
        font-size: 14px;
        color: #fff
    }
    #embedded_messenger .mobile__post-android .embercom-composer-editor b {
        font-weight: 500
    }
    #embedded_messenger .mobile__post-android .composer-media-inserter-container::after {
        border-top-color: rgba(111, 133, 146, .7)
    }
    #embedded_messenger .mobile__post-android ic-block[data-type=attachment] a {
        background-color: rgba(251, 251, 251, .5)
    }
    #embedded_messenger .mobile__chat-ios {
        background-color: #fff
    }
    #embedded_messenger .mobile__chat-ios__app-background {
        background-color: rgba(255, 255, 255, .65);
        height: 8px;
        margin: 4px 12px 0
    }
    #embedded_messenger .mobile__chat-ios__app-overlay {
        background-color: #000;
        height: 12px;
        padding: 4px 12px 0
    }
    #embedded_messenger .mobile__chat-ios__navigation-bar {
        border-bottom: 1px solid #ccc;
        background: #f9f9f9
    }
    #embedded_messenger .mobile__chat-ios__content {
        min-height: 520px;
        border-top: 1px solid rgba(0, 0, 0, .1);
        border-bottom: 1px solid rgba(0, 0, 0, .1)
    }
    #embedded_messenger .mobile__chat-ios__content.o__with-visible-app-overlay {
        min-height: 557px
    }
    #embedded_messenger .mobile__chat-ios .attachment-list-container, #embedded_messenger .mobile__chat-ios .embercom-composer-editor {
        box-sizing: border-box;
        margin: 12px 83px 12px 44px;
        padding: 14px;
        color: #57575d;
        background: #e5e5ea;
        border-radius: 17px;
        height: auto;
        width: 246px;
        font-size: 16px;
        line-height: 24px
    }
    #embedded_messenger .mobile__chat-ios .attachment-list-container {
        margin-top: -28px;
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }
    #embedded_messenger .mobile__chat-ios .embercom-composer-editor h1, #embedded_messenger .mobile__chat-ios .embercom-composer-editor h2, #embedded_messenger .mobile__chat-ios .embercom-composer-editor ol, #embedded_messenger .mobile__chat-ios .embercom-composer-editor p, #embedded_messenger .mobile__chat-ios .embercom-composer-editor ul {
        margin-top: 8px;
        font-size: 16px
    }
    #embedded_messenger .mobile__chat-ios .embercom-composer-editor pre.code {
        padding: 10px;
        background-color: #696972;
        font-size: 14px;
        color: #fff
    }
    #embedded_messenger .mobile__chat-ios .embercom-composer-editor h1, #embedded_messenger .mobile__chat-ios .embercom-composer-editor h2 {
        font-weight: 700
    }
    #embedded_messenger .mobile__note-ios {
        background-color: #fff;
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .3), 0 2px 4px 0 rgba(0, 0, 0, .1);
        width: 340px;
        border-radius: 6px;
        margin: auto
    }
    #embedded_messenger .mobile__note-ios__overlay {
        width: 100%;
        height: 100%;
        background-color: rgba(42, 48, 55, .5);
        padding: 118px 0
    }
    #embedded_messenger .mobile__note-ios__content {
        border-top: 1px solid rgba(0, 0, 0, .07);
        border-bottom: 1px solid rgba(0, 0, 0, .07);
        background-color: #fff;
        min-height: 301px
    }
    #embedded_messenger .mobile__note-ios .attachment-list-container, #embedded_messenger .mobile__note-ios .embercom-composer-editor {
        padding: 25px 20px;
        color: #57575d;
        font-size: 16px;
        line-height: 24px
    }
    #embedded_messenger .mobile__note-ios .embercom-composer-editor h1 {
        font-size: 22px;
        font-weight: 300;
        margin-top: 22px;
        line-height: 32px
    }
    #embedded_messenger .mobile__note-ios .embercom-composer-editor h2 {
        margin-top: 20px;
        font-size: 16px;
        font-weight: 400
    }
    #embedded_messenger .mobile__note-ios .embercom-composer-editor h1+p {
        margin-top: 22px
    }
    #embedded_messenger .mobile__note-ios .embercom-composer-editor h2+p {
        margin-top: 20px
    }
    #embedded_messenger .mobile__note-ios .embercom-composer-editor p {
        margin: 16px 0 0
    }
    #embedded_messenger .mobile__note-ios .embercom-composer-editor pre.code {
        padding: 10px;
        background-color: #696972;
        font-size: 14px;
        color: #fff
    }
    #embedded_messenger .mobile__note-ios ic-block[data-type=attachment] a {
        color: #696972;
        border: 1px solid #ebebeb
    }
    #embedded_messenger .mobile__post-ios {
        color: #fff;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, .8) 20%, rgba(0, 0, 0, .8) 80%, rgba(0, 0, 0, 1) 100%)
    }
    #embedded_messenger .mobile__post-ios__content {
        min-height: 512px;
        border-top: 1px solid rgba(255, 255, 255, .1);
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        padding-top: 24px
    }
    #embedded_messenger .mobile__post-ios .attachment-list-container, #embedded_messenger .mobile__post-ios .embercom-composer-editor {
        padding: 5px 25px 20px;
        font-size: 16px;
        line-height: 24px
    }
    #embedded_messenger .mobile__post-ios .embercom-composer-editor h1 {
        line-height: 36px;
        font-weight: 300;
        font-size: 26px;
        margin-top: 30px
    }
    #embedded_messenger .mobile__post-ios .embercom-composer-editor h2 {
        margin-top: 20px;
        font-size: 16px;
        font-weight: 400
    }
    #embedded_messenger .mobile__post-ios .embercom-composer-editor h1+p {
        margin-top: 30px
    }
    #embedded_messenger .mobile__post-ios .embercom-composer-editor h2+p {
        margin-top: 12px
    }
    #embedded_messenger .mobile__post-ios .embercom-composer-editor p {
        line-height: 24px;
        margin: 16px 0 0
    }
    #embedded_messenger .mobile__post-ios .embercom-composer-editor pre.code {
        padding: 10px;
        background-color: #696972;
        font-size: 14px;
        color: #fff
    }
    #embedded_messenger .mobile__post-ios .composer-media-inserter-container::after {
        border-top-color: rgba(111, 133, 146, .7)
    }
    #embedded_messenger .mobile__post-ios ic-block[data-type=attachment] a {
        background-color: rgba(255, 255, 255, .2)
    }
    #embedded_messenger .email__desktop__container {
        border-radius: 6px;
        background-color: #fff;
        box-shadow: 0 1px 7px 0 rgba(202, 203, 204, .2);
        border: 1px solid #d5dce0
    }
    #embedded_messenger .email__desktop__header {
        width: 100%;
        height: 38px;
        box-sizing: border-box;
        border-radius: 6px 6px 0 0;
        background-color: #fcfcfd;
        padding: 10px 14px;
        border-bottom: solid 1px #d5dce0
    }
    #embedded_messenger .email__desktop__header-dot {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #e7ebed;
        margin-right: 4px
    }
    #embedded_messenger .email__desktop__header-row {
        width: 100%;
        height: 38px;
        box-sizing: border-box;
        border-bottom: solid 1px #f1f4f6;
        padding: 10px
    }
    #embedded_messenger .email__desktop__header-label {
        font-size: 13px;
        line-height: 20px;
        color: #78909c;
        font-weight: 400;
        margin: 0 3px
    }
    #embedded_messenger .email__desktop__custom-email-template #email_template .ic_button_in_content input {
        color: inherit;
        text-decoration: inherit;
        font-weight: inherit;
        text-size: inherit;
        font-family: inherit;
        left: 0;
        padding: 3px 0;
        width: 100%
    }
    #embedded_messenger .email__desktop__custom-email-template #email_template .ic_button_in_content a, #embedded_messenger .email__desktop__custom-email-template #email_template .ic_button_in_content span {
        padding: 0
    }
    .embercom-composer .composer-template-container #backgroundTable .message_wrapper_table ic-block a.intercom-h2b-button, .embercom-composer .composer-template-container #backgroundTable .message_wrapper_table ic-block a.intercom-h2b-button:link, .embercom-composer .composer-template-container #backgroundTable .message_wrapper_table ic-block a.intercom-h2b-button:visited, .embercom-composer .composer-template-container .comment_wrapper_table.admin_comment ic-block a.intercom-h2b-button, .embercom-composer .composer-template-container .comment_wrapper_table.admin_comment ic-block a.intercom-h2b-button:link, .embercom-composer .composer-template-container .comment_wrapper_table.admin_comment ic-block a.intercom-h2b-button:visited {
        display: inline-block!important;
        color: #fff!important;
        min-height: 20px!important;
        padding: 9px 15px!important;
        font-weight: 700!important;
        border-radius: 5px!important;
        background-clip: padding-box!important;
        font-size: 15px!important;
        text-decoration: none!important;
        text-align: center!important;
        line-height: 18px!important
    }
    .embercom-composer .composer-template-container .announcement .content-td ic-block a.intercom-h2b-button, .embercom-composer .composer-template-container .announcement .content-td ic-block a.intercom-h2b-button:link, .embercom-composer .composer-template-container .announcement .content-td ic-block a.intercom-h2b-button:visited, .embercom-composer .composer-template-container .company .content-td ic-block a.intercom-h2b-button, .embercom-composer .composer-template-container .company .content-td ic-block a.intercom-h2b-button:link, .embercom-composer .composer-template-container .company .content-td ic-block a.intercom-h2b-button:visited, .embercom-composer .composer-template-container .personal .content-td ic-block a.intercom-h2b-button, .embercom-composer .composer-template-container .personal .content-td ic-block a.intercom-h2b-button:link, .embercom-composer .composer-template-container .personal .content-td ic-block a.intercom-h2b-button:visited {
        border: none!important
    }
    .vertical-collection-visual-debugger {
        height: 100%;
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: left;
        background: rgba(50, 50, 50, 1);
        width: 125px
    }
    .vertical-collection-visual-debugger .vc_visualization-container {
        transform: scale(.25);
        left: 0;
        position: relative
    }
    .vertical-collection-visual-debugger .vc_visualization-screen {
        position: absolute;
        background: 0 0;
        box-sizing: content-box;
        border-top: 2px dashed #ff0;
        border-bottom: 2px dashed #ff0;
        width: 500px
    }
    .vertical-collection-visual-debugger .vc_visualization-scroll-container {
        position: absolute;
        width: 500px;
        background: rgba(100, 230, 100, .65)
    }
    .vertical-collection-visual-debugger .vc_visualization-item-container {
        position: absolute;
        width: 500px;
        background: rgba(255, 255, 255, .15)
    }
    .vertical-collection-visual-debugger .vc_visualization-virtual-component {
        box-sizing: border-box;
        background: rgba(230, 100, 230, .6);
        border: 1px dotted #bbb;
        border-top: 0;
        color: #fff;
        text-align: center;
        font-size: 2.5em;
        width: 250px
    }
    .vertical-collection-visual-debugger .vc_visualization-virtual-component:first-of-type {
        border-top: 1px dotted #bbb
    }
    .vertical-collection-visual-debugger .vc_visualization-virtual-component.culled {
        background: 0 0
    }
    .occluded-content {
        display: block;
        position: relative;
        width: 100%;
        min-height: .01px;
        color: transparent
    }
    , table .occluded-content, tbody .occluded-content, tfoot .occluded-content, thead .occluded-content {
        display: table-row;
        position: relative;
        width: 100%
    }
    ol .occluded-content, ul .occluded-content {
        display: list-item;
        position: relative;
        width: 100%;
        list-style-type: none;
        height: 0
    }
    .heading, dd, dl, dt, h1, h2, h3, h4, p {
        padding: 0;
        margin: 0
    }
    a>.heading, a>.text {
        display: inline-block
    }
    .table, .tbl {
        border-collapse: separate;
        border-spacing: 0
    }
    .avatar, .avatar__container.o__s, .avatar__media, .btn, .btn__toggle-list {
        vertical-align: bottom
    }
    .avatar, .avatar__badge, .avatar__container.o__s, .avatar__media, .btn, .card, .kv__key, .tbl__fixed__wrapper {
        box-sizing: border-box
    }
    .btn, .f__invisible-text, .f__text, .form__input, .nav__secondary__input, .toggle__on-off, .toggle__on-off__label {
        -webkit-appearance: none
    }
    .ds-new__table, .table, .tbl {
        border-spacing: 0
    }
    @-webkit-keyframes reveal_conversation_card {
        0% {
            height: 0
        }
        100% {
            height: 500px
        }
    }
    @keyframes reveal_conversation_card {
        0% {
            height: 0
        }
        100% {
            height: 500px
        }
    }
    @-webkit-keyframes fade_in {
        0% {
            opacity: 0
        }
        100% {
            opacity: 1
        }
    }
    @keyframes fade_in {
        0% {
            opacity: 0
        }
        100% {
            opacity: 1
        }
    }
    @-webkit-keyframes fade_out_inbox_item {
        0% {
            opacity: 1;
            height: 110px;
            border-bottom-width: 1
        }
        100% {
            opacity: 0;
            height: 0;
            border-bottom-width: 0
        }
    }
    @keyframes fade_out_inbox_item {
        0% {
            opacity: 1;
            height: 110px;
            border-bottom-width: 1
        }
        100% {
            opacity: 0;
            height: 0;
            border-bottom-width: 0
        }
    }
    @-webkit-keyframes is_typing_part_avatar_animation_on {
        0% {
            transform: scale(.6);
            opacity: 0
        }
        100% {
            transform: scale(1);
            opacity: 1
        }
    }
    @keyframes is_typing_part_avatar_animation_on {
        0% {
            transform: scale(.6);
            opacity: 0
        }
        100% {
            transform: scale(1);
            opacity: 1
        }
    }
    @-webkit-keyframes reveal_loading_indicator {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 0
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 1
        }
    }
    @keyframes reveal_loading_indicator {
        0% {
            transform: scale(0);
            opacity: 0
        }
        100% {
            transform: scale(1);
            opacity: 1
        }
    }
    @-webkit-keyframes rotate {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0)
        }
        8.3% {
            -webkit-transform: rotate(30deg);
            transform: rotate(30deg)
        }
        16.7% {
            -webkit-transform: rotate(60deg);
            transform: rotate(60deg)
        }
        25% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg)
        }
        33.3% {
            -webkit-transform: rotate(120deg);
            transform: rotate(120deg)
        }
        41.7% {
            -webkit-transform: rotate(150deg);
            transform: rotate(150deg)
        }
        50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg)
        }
        58.3% {
            -webkit-transform: rotate(210deg);
            transform: rotate(210deg)
        }
        66.7% {
            -webkit-transform: rotate(240deg);
            transform: rotate(240deg)
        }
        75% {
            -webkit-transform: rotate(270deg);
            transform: rotate(270deg)
        }
        83.3% {
            -webkit-transform: rotate(300deg);
            transform: rotate(300deg)
        }
        91.7% {
            -webkit-transform: rotate(330deg);
            transform: rotate(330deg)
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }
    @keyframes rotate {
        0% {
            transform: rotate(0)
        }
        8.3% {
            transform: rotate(30deg)
        }
        16.7% {
            transform: rotate(60deg)
        }
        25% {
            transform: rotate(90deg)
        }
        33.3% {
            transform: rotate(120deg)
        }
        41.7% {
            transform: rotate(150deg)
        }
        50% {
            transform: rotate(180deg)
        }
        58.3% {
            transform: rotate(210deg)
        }
        66.7% {
            transform: rotate(240deg)
        }
        75% {
            transform: rotate(270deg)
        }
        83.3% {
            transform: rotate(300deg)
        }
        91.7% {
            transform: rotate(330deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }
    @font-face {
        font-family: Socialicious;
        src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAgkABEAAAAAC0gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABgAAAABwAAAAcfnSSxEdERUYAAAGcAAAAHAAAAB4AJwAZT1MvMgAAAbgAAABIAAAAYFCahDBjbWFwAAACAAAAAF8AAAFqTLZB8GN2dCAAAAJgAAAACAAAAAgAFABGZnBnbQAAAmgAAAGxAAACZVO0L6dnYXNwAAAEHAAAAAgAAAAIAAAAEGdseWYAAAQkAAABWAAAAXS88bHZaGVhZAAABXwAAAAyAAAANgtWHu5oaGVhAAAFsAAAABwAAAAkBL4ComhtdHgAAAXMAAAANAAAAEwVigCMbG9jYQAABgAAAAATAAAAKAWWBeRtYXhwAAAGFAAAACAAAAAgATAAcm5hbWUAAAY0AAABTAAAAk8lKO9vcG9zdAAAB4AAAABiAAAAuC1g0ZhwcmVwAAAH5AAAADcAAAA3UyaHHXdlYmYAAAgcAAAABgAAAAa3WljrAAAAAQAAAADUUbVqAAAAANURdYEAAAAA1RFn2HjaY2BkYGDgAWIxIGZiYARCISBmAfMYAARkAEF42mNgZtRjnMDAysDC6MNozMDAoAalNzMYMeoAaaAUdhCQ5prC4MDgofqH8cH/BwwMTHsY9IDCjCA5xi9AHgODAgMjAL6QC5V42mNgYGBmgGAZBkYGEEgB8hjBfBYGDyDNx8DBwMTABmSnK3Ap6CvEq/75/x8oDuIzwPj/d/+f+4D1/sP7m26JQc1BAoxsDHBBRiYgwYSugIFowIxfmoVhkAIALEUTJgAAAAAAABQARnjaXVG7TltBEN0NDwOBxNggOdoUs5mQxnuhBQnE1Y1iZDuF5QhpN3KRi3EBH0CBRA3arxmgoaRImwYhF0h8Qj4hEjNriKI0Ozuzc86ZM0vKkap36WvPU+ckkMLdBs02/U5ItbMA96Tr642MtIMHWmxm9Mp1+/4LBpvRlDtqAOU9bykPGU07gVq0p/7R/AqG+/wf8zsYtDTT9NQ6CekhBOabcUuD7xnNussP+oLV4WIwMKSYpuIuP6ZS/rc052rLsLWR0byDMxH5yTRAU2ttBJr+1CHV83EUS5DLprE2mJiy/iQTwYXJdFVTtcz42sFdsrPoYIMqzYEH2MNWeQweDg8mFNK3JMosDRH2YqvECBGTHAo55dzJ/qRA+UgSxrxJSjvjhrUGxpHXwKA2T7P/PJtNbW8dwvhZHMF3vxlLOvjIhtoYEWI7YimACURCRlX5hhrPvSwG5FL7z0CUgOXxj3+dCLTu2EQ8l7V1DjFWCHp+29zyy4q7VrnOi0J3b6pqqNIpzftezr7HA54eC8NBY8Gbz/v+SoH6PCyuNGgOBEN6N3r/orXqiKu8Fz6yJ9O/sVoAAAAAAQAB//8AD3jaTZDLTsJgFITP+fvTCpRLLe0fL9BClYaAlFqkViISYzDqykRivEQSX8CdL+CGGJ+EVdGlPIMr3Zm4dkvYQm13fsnkzCxOMhmIQQjOyAQ44CEOImQAbKkobcqcXEwikzkm4WzRGY0KeDEKeRmRyfxoAAEE8y8I8Co0i88AF4BAIUcAfdiGNrxWEKpji/v1bestmWH6BnNC+w6VIAAblqroO9a4iVUYW7a07IPnVyS/7jVsV2Utt7WPLZcXIpXNksArOVZHo2zygsrKZphUxhslU42uUKK96+f+SUHV1/V0sajXtNUGR9P08UwkZGuFxVkzI9JsHAve3rF8WCPkvv+QZlqK5sqyoGNW80QRMXWnaK6OIqqKnaBEIRapYTgPDINvfMIfyAG4juLsOK4R1mujGzXLozHs3t7QQUzfJR1zrd39mE4vDxL5cy6V751G//+w4Q+tq0kBeNpjYGRgYADiSbtbtsXz23xlkGdiAIGrgqWNEDr9BgPD/ztMDEx7gFwOBrA0ADzqCvAAAHjaY2BkYGDa8/8SiGQAAiYGBkYGVCAMAF/TA2V42mP8wgABqxgYmBgYWIC4gzEOyN7DwACjGV4C8XogLoHicCDuAWI1KA2UYwSaAwB4SQojeNpjYGBQA8NJDJvwwF0AveYLewAAAQAAABMAMwAFAAAAAAACAAEAAgAWAAABAAA7AAAAAHjaTZDNSsNAFIXPNLGgiCiCiKvgz7bU1lKtq250UYJiwa7TNG0H00bzI7rK42n1CVy6FXwHT27H0AyZ+ebcM+dOAmAXP1AontW5IuuSLaEl2zgqucr1mFVlr3N3iBPDiq5rwxVWeoatFbY5/nkNL7gxXOWJN8Pb2MfC8A428W34HXv4NbxAXVmGP7ClmoY/saG6S/6ycKB6eRL52gu1r6MscdxgpLOZcxdMstCLnUEwHEfzNIePCI94RQyNCaZI4WBGTjg05tRqyOW9R0BXoUbUHZxSrcu4xC36VApeVad0ptJhjufyRA1tqc7g4YGZhWdMNWTyEA1SS95zNLm7YOeEHp9VTzy+3CCj6vL0iLuMWQPykDlFr7Ts5Zq7dvmNsah1mRvo4IwdOqQWlYbcvM20gBkeE0OmRPJXioSrMrePJ1Y1KzG94R/bjlB8eNptxU0OREAUReF3y7/WDCzDpDwKPex0YmAnJmZ2aj0dou7QSU4+MXL3P0TlqfoaYqSRBQYBQkSIkSBFhhwvFHijRJXs26rWWtpSpR3tqaMDHelEP/Tr1dnrvG7+nXaIINwAALgB/4WwAY0AS7AIUFixAQGOWbFGBitYIbAQWUuwFFJYIbCAWR2wBitcWACwAyBFsAMrRFmwFCsAAAFY67dZAAA=) format("woff");
        font-weight: 400;
        font-style: normal;
        font-stretch: normal
    }
    @font-face {
        font-family: '12px';
        src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAg4ABEAAAAAC4QAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABgAAAABwAAAAchGmqz0dERUYAAAGcAAAAHAAAAB4AJwAbT1MvMgAAAbgAAABJAAAAYGdJi1xjbWFwAAACBAAAAGUAAAFyS/VOJmN2dCAAAAJsAAAAEgAAABIEgAHgZnBnbQAAAoAAAAGxAAACZVO0L6dnYXNwAAAENAAAAAgAAAAIAAAAEGdseWYAAAQ8AAABOAAAAXDXTihUaGVhZAAABXQAAAAyAAAANhBNWWZoaGVhAAAFqAAAABsAAAAkBS8B1mhtdHgAAAXEAAAANgAAAFQbFQAibG9jYQAABfwAAAATAAAALAXUBjBtYXhwAAAGEAAAACAAAAAgATIAd25hbWUAAAYwAAABIgAAAiAE5lKIcG9zdAAAB1QAAABzAAAA0scuf1BwcmVwAAAHyAAAAGcAAABsPZu+h3dlYmYAAAgwAAAABgAAAAbUOlsXAAAAAQAAAADV7pT1AAAAANc9kSAAAAAA1z2EuXjaY2BkYGDgAWIxIGZiYARCESBmAfMYAAR6AEN42mNgYYxinMDAysDC1M8Uw8DA4A2hGRMYjBj1gHygFHYQ6h3ux3CAQUH1D7PAfwUGBqZehgdAYUaQHOMPpgVASoGBEQDxXwuOAAAAeNpjYGBgZoBgGQZGBhDIAfIYwXwWhgAgLQCEIHkFBieGBQpcCvoK8ap//v8HizgCRRhgIv8f/z/8P+0B+/3H97fckoCahgIY2RjgwoxMQIIJXQHEKXgBCyvD4ABsZOkCAF+gFaYAAAAAAABwAJYAOABUARcBFwAhAn8AAHjaXVG7TltBEN0NDwOBxNggOdoUs5mQxnuhBQnE1Y1iZDuF5QhpN3KRi3EBH0CBRA3arxmgoaRImwYhF0h8Qj4hEjNriKI0Ozuzc86ZM0vKkap36WvPU+ckkMLdBs02/U5ItbMA96Tr642MtIMHWmxm9Mp1+/4LBpvRlDtqAOU9bykPGU07gVq0p/7R/AqG+/wf8zsYtDTT9NQ6CekhBOabcUuD7xnNussP+oLV4WIwMKSYpuIuP6ZS/rc052rLsLWR0byDMxH5yTRAU2ttBJr+1CHV83EUS5DLprE2mJiy/iQTwYXJdFVTtcz42sFdsrPoYIMqzYEH2MNWeQweDg8mFNK3JMosDRH2YqvECBGTHAo55dzJ/qRA+UgSxrxJSjvjhrUGxpHXwKA2T7P/PJtNbW8dwvhZHMF3vxlLOvjIhtoYEWI7YimACURCRlX5hhrPvSwG5FL7z0CUgOXxj3+dCLTu2EQ8l7V1DjFWCHp+29zyy4q7VrnOi0J3b6pqqNIpzftezr7HA54eC8NBY8Gbz/v+SoH6PCyuNGgOBEN6N3r/orXqiKu8Fz6yJ9O/sVoAAAAAAQAB//8AD3jaTU5BTsJAFP0zQzsqkHQo7aQoSsHQRIhAS2mb9AyuMHFFPICLnsQryBE6c4Ym3MCVC5Z24d4YMc5oTPx5P/+995OXBxh8AHSFt0CAwrVAMMslbdC3UJjGSy4JVhQE0bahbUnNo89cIu1HzGdBxEY+On7d7fD2cO/jDYABAAXeonfFjqENDDgA43GQxE4Uj/jfJoHDaVUUafqLtFICLat1Uaz3qZ59pYWKU+0QpPgJP6o0D/pwC9IDmAjcqGVfE4fUsqVJD9eoPJ+V1rOwjbq0LcHRRFCjFhfq2hbrlL2s5Ey2mqdZloHwMOsIamXZfJG4kR8mq3gZkPGQEtPpXi5Xods1hySio6Yboo/QPWkfvDvv0EZ8MB8oFGfpZjzu2C5Hcjr9uuGunf880EOlWv+bBXwDQIRSZ3jaY2BkYGAAYlZbk554fpuvDPLMH4AiDNdtJypA6JadIJppAdMCIMXBwATiAQAFeAkaAAB42mNgZGBg6v2vACQXMDCASUYGVCAKAE8eAwoAeNpjzGFQZAACxgAGBqYIIF4AxowgNlhsAYJmeADEK4C4AIpDgLgNiFWhNFCO8QsDAwCVSApJAAB42mNgYNCCwhCGDXjhDgDT+AwFAAABAAAAFQAeAAUAAAAAAAIAAQACABYAAAEAAFUAAAAAeNp1kMtKw1AURVdMFQXJUMRREEeCpQ+roc47UBCxaseJtjaYPoyp1Imf4Tf5+AJ/xLH7JtfgA7kcWGdn333ODbDKEy5OZQXYVBXssKyu4AU8ti27VAksV1hnYHmROY+Wl6R/WH5mzfEsv1Bztiy/4jlnlt/EUcHvLhvOlEsmTHkgJeaaIRk+I/GdTsxYWp2GHHNO6aubkRDKXdd2tfwccM4RPY5FX96dP+5C93/pF+rSfNJEs/wfqSd0pRj+rg7lzPKtx9yXN8yfCvR1pNQbZRrPQGqi5Eizq7RUe+yyr9P6d8+eukg3TXpWphv1St2hfGZLX0lms4A2TXnaSmxKaeS7BvL2lRHmqZnmmAmhXjlTdcrsLrdSYk1N5Ug+AZLCSn0AAHjabcXLDsFQFAXQvVvaetPEHzA/PVyPYSPpryBpGhMD3+bfRLjbzJosJPh6PeH4ZwkwYYoUK6zZY58ZcxYccMgRx5xwyhnnXLDMzu3jdqlint+7q1ltn93sd6Vdb/RWB73Te33QR13HvYmHeGhObwd2J6oAeNrbwfi/dQNjL4P3Bo6AiI2MjH2RG93YtCMUNwhEem8QCQIyGiJlN7Bpx0QwbGBScN3ArO2ygUXBdRMTN5M2mMMM5LAIQTiMG1ihStgUXHcxsNb/Z2DS3sjsVqbtErlBRBsAP0ogCAAAAVsX1DkAAA==) format("woff");
        font-weight: 400;
        font-style: normal;
        font-stretch: normal
    }
    a {
        color: inherit;
        text-decoration: underline
    }
    @font-face {
        font-family: IntercomText;
        font-weight: 300;
        font-style: normal;
        src: url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Book.eot);
        src: url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Book.eot?#iefix) format("embedded-opentype"), url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Book.woff2) format("woff2"), url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Book.woff) format("woff")
    }
    @font-face {
        font-family: IntercomText;
        font-weight: 400;
        font-style: normal;
        src: url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Regular.eot);
        src: url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Regular.eot?#iefix) format("embedded-opentype"), url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Regular.woff2) format("woff2"), url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Regular.woff) format("woff")
    }
    @font-face {
        font-family: IntercomText;
        font-weight: 500;
        font-style: normal;
        src: url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Medium.eot);
        src: url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Medium.eot?#iefix) format("embedded-opentype"), url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Medium.woff2) format("woff2"), url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Medium.woff) format("woff")
    }
    @font-face {
        font-family: IntercomText;
        font-weight: 600;
        font-style: normal;
        src: url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Semibold.eot);
        src: url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Semibold.eot?#iefix) format("embedded-opentype"), url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Semibold.woff2) format("woff2"), url(https://fonts.intercomcdn.com/intercom-text/IntercomText-Semibold.woff) format("woff")
    }
    @font-face {
        font-family: IntercomGrot;
        font-weight: 300;
        font-style: normal;
        src: url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-Light.eot);
        src: url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-Light.eot?#iefix) format("embedded-opentype"), url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-Light.woff2) format("woff2"), url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-Light.woff) format("woff")
    }
    @font-face {
        font-family: IntercomGrot;
        font-weight: 350;
        font-style: normal;
        src: ucl("https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-Book.eot");
        src: url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-Book.eot?#iefix) format("embedded-opentype"), url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-Book.woff2) format("woff2"), url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-Book.woff) format("woff")
    }
    @font-face {
        font-family: IntercomGrot;
        font-weight: 400;
        font-style: normal;
        src: url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-Regular.eot);
        src: url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-Regular.eot?#iefix) format("embedded-opentype"), url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-Regular.woff2) format("woff2"), url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-Regular.woff) format("woff")
    }
    @font-face {
        font-family: IntercomGrot;
        font-weight: 800;
        font-style: normal;
        src: url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-ExtraBold.eot);
        src: url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-ExtraBold.eot?#iefix) format("embedded-opentype"), url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-ExtraBold.woff2) format("woff2"), url(https://fonts.intercomcdn.com/intercom-grot/IntercomGrot-ExtraBold.woff) format("woff")
    }
    @font-face {
        font-family: Graphik;
        src: url(https://fonts.intercomcdn.com/graphik/Graphik-Regular.woff);
        font-weight: 400;
        font-style: normal
    }
    @font-face {
        font-family: Graphik;
        src: url(https://fonts.intercomcdn.com/graphik/Graphik-Semibold.woff);
        font-weight: 600;
        font-style: normal
    }
    @font-face {
        font-family: Graphik;
        src: url(https://fonts.intercomcdn.com/graphik/Graphik-Bold.woff);
        font-weight: 700;
        font-style: normal
    }
    @font-face {
        font-family: Graphik;
        src: url(https://fonts.intercomcdn.com/graphik/Graphik-RegularItalic.woff);
        font-weight: 400;
        font-style: italic
    }
    @font-face {
        font-family: Graphik;
        src: url(https://fonts.intercomcdn.com/graphik/Graphik-SemiboldItalic.woff);
        font-weight: 600;
        font-style: italic
    }
    @font-face {
        font-family: Graphik;
        src: url(https://fonts.intercomcdn.com/graphik/Graphik-BoldItalic.woff);
        font-weight: 700;
        font-style: italic
    }
    .text {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        color: #222;
        line-height: 20px;
        font-size: 14px;
        font-weight: 400
    }
    .text.o__label, .text.o__muted {
        color: #737376
    }
    .text.o__label, .text.o__strong {
        font-weight: 500
    }
    .text.o__small {
        color: #737376;
        font-size: 13px
    }
    .text.o__standalone-link, .text.o__standalone-link>a {
        color: #286efa;
        text-decoration: none;
        cursor: pointer
    }
    .text.o__standalone-link:focus, .text.o__standalone-link:hover, .text.o__standalone-link>a:focus, .text.o__standalone-link>a:hover, a:focus>.text.o__standalone-link, a:focus>.text.o__standalone-link>a {
        color: #0549d1;
        text-decoration: underline
    }
    .text.o__inline-link {
        text-decoration: underline;
        cursor: pointer
    }
    .text.o__inline-link:focus, .text.o__inline-link:hover, a:focus>.text.o__inline-link {
        opacity: .8
    }
    .text.o__subtle-link, .text.o__subtle-link>a {
        text-decoration: none;
        cursor: pointer
    }
    .text.o__subtle-link:focus, .text.o__subtle-link:hover, .text.o__subtle-link>a:focus, .text.o__subtle-link>a:hover, a:focus>.text.o__subtle-link, a:focus>.text.o__subtle-link>a {
        color: #286efa;
        text-decoration: underline
    }
    .heading {
        font-family: IntercomText, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        color: #222;
        font-weight: 400
    }
    .heading.o__size-1 {
        font-size: 22px;
        line-height: 32px
    }
    .heading.o__size-2 {
        font-size: 18px;
        line-height: 28px
    }
    .heading.o__size-3 {
        font-size: 16px;
        line-height: 24px;
        font-weight: 500
    }
    .heading.o__size-4 {
        font-size: 14px;
        line-height: 24px;
        font-weight: 500
    }
    .t__h1, .t__h1__deem, .t__h2, .t__h2__deem {
        font-weight: 400;
        font-family: IntercomText, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
    }
    .heading.o__muted {
        color: #737376
    }
    .heading.o__standalone-link, .heading.o__standalone-link>a {
        color: #286efa;
        text-decoration: none;
        cursor: pointer
    }
    .heading.o__standalone-link:focus, .heading.o__standalone-link:hover, .heading.o__standalone-link>a:focus, .heading.o__standalone-link>a:hover, a:focus>.heading.o__standalone-link, a:focus>.heading.o__standalone-link>a {
        color: #0549d1;
        text-decoration: underline
    }
    .heading.o__subtle-link, .heading.o__subtle-link>a {
        text-decoration: none;
        cursor: pointer
    }
    .heading.o__subtle-link:focus, .heading.o__subtle-link:hover, .heading.o__subtle-link>a:focus, .heading.o__subtle-link>a:hover, a:focus>.heading.o__subtle-link, a:focus>.heading.o__subtle-link>a {
        color: #286efa;
        text-decoration: underline
    }
    .t__body, .t__h1, .t__h2 {
        color: #222
    }
    .t__body {
        font-size: 14px;
        line-height: 20px
    }
    .t__h1, .t__h1__deem {
        font-size: 24px;
        line-height: 27px
    }
    .t__h2, .t__h2__deem {
        font-size: 18px;
        line-height: 24px
    }
    .t__h1__deem, .t__h2__deem {
        color: #737376
    }
    .t__h3 {
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        color: #222
    }
    .t__group-label, .t__h4 {
        line-height: 18px;
        font-weight: 500
    }
    .t__h4 {
        font-size: 14px;
        color: #222
    }
    .t__group-label {
        font-size: 13px;
        color: #737376
    }
    .t__conversation-summary, .t__light-text {
        font-size: 13px;
        font-weight: 400;
        color: #737376
    }
    .t__light-text {
        line-height: 20px
    }
    .t__conversation-summary {
        line-height: 18px
    }
    .t__label {
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        color: #737376
    }
    .t__label a:hover {
        color: #286efa
    }
    .t__smaller {
        font-size: 13px
    }
    .t__big-number {
        font-size: 26px;
        line-height: 33px;
        font-weight: 500;
        color: #222
    }
    .t__btn-label {
        font-size: 14px;
        line-height: 18px;
        font-weight: 500
    }
    .t__body.o__no-visual-margins, .t__h3.o__no-visual-margins {
        display: block;
        margin: -5px 0
    }
    .t__light-text.o__no-visual-margins {
        display: block;
        margin: -5px 0 -6px
    }
    .t__label.o__no-visual-margins {
        display: block;
        margin: -6px 0
    }
    .t__em-link, .t__em-link__outer, a.t__em-link {
        color: #286efa;
        text-decoration: none
    }
    .t__em-link:hover, .t__em-link__outer:hover .t__em-link__inner, a.t__em-link:hover {
        color: #0549d1;
        text-decoration: underline
    }
    .t__em-link.o__active, .t__em-link__outer.o__active .t__em-link__inner, a.t__em-link.o__active {
        text-decoration: none;
        font-weight: 500;
        cursor: default;
        pointer-events: none
    }
    .t__solo-link, .t__solo-link__outer {
        text-decoration: none;
        cursor: pointer
    }
    .t__solo-link:active, .t__solo-link:hover, .t__solo-link__outer:active .t__solo-link__inner, .t__solo-link__outer:hover .t__solo-link__inner {
        text-decoration: underline;
        color: #286efa
    }
    .t__solo-link.o__active, .t__solo-link__outer.o__active {
        font-weight: 500;
        cursor: default;
        pointer-events: none
    }
    .t__growth-only-link-with-constant-underline__outer {
        text-decoration: none
    }
    .t__growth-only-link-with-constant-underline, .t__growth-only-link-with-constant-underline__inner {
        text-decoration: underline
    }
    .t__notice-h1 {
        font-size: 24px;
        line-height: 33px;
        font-weight: 500;
        color: #222
    }
    .t__notice-text {
        font-size: 16px;
        line-height: 24px;
        color: #737376
    }
    .t__breadcrumb {
        font-size: 10px;
        font-weight: 500;
        color: #737376;
        text-transform: uppercase
    }
    .t__breadcrumb:link {
        text-decoration: none;
        color: #737376
    }
    .t__breadcrumb:hover {
        text-decoration: underline
    }
    .t__campaign__stat, .t__hero-title, .t__message-editor-stat {
        font-family: IntercomText, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-weight: 400
    }
    .t__hero-title {
        font-size: 34px;
        line-height: 34px
    }
    .btn, .btn__tertiary, .btn__tertiary__deemphasized {
        font-size: 14px;
        line-height: 18px;
        font-weight: 500;
        text-decoration: none
    }
    .t__object__highlight, .t__object__text {
        color: #737376
    }
    .t__object.o__active .t__object__text, .t__object:active .t__object__text, .t__object:focus .t__object__text, .t__object:hover .t__object__text, .t__object__strong-highlight {
        color: #222
    }
    .t__object.o__active .t__object__highlight, .t__object.o__active .t__object__strong-highlight, .t__object:active .t__object__highlight, .t__object:active .t__object__strong-highlight, .t__object:focus .t__object__highlight, .t__object:focus .t__object__strong-highlight, .t__object:hover .t__highlight, .t__object:hover .t__object__strong-highlight {
        color: #286efa
    }
    .layout__box {
        flex: 0 0 auto;
        min-width: 0;
        min-height: 0
    }
    .layout__box.o__has-columns {
        display: flex;
        flex-direction: row
    }
    .layout__box.o__has-rows {
        display: flex;
        flex-direction: column
    }
    .layout__box.o__scrolls {
        overflow: auto;
        -webkit-overflow-scrolling: touch
    }
    .layout__box.o__flexes-to-1 {
        flex: 1 1 auto
    }
    .layout__box.o__flexes-to-2 {
        flex: 2 1 auto
    }
    .layout__box.o__flexes-to-3 {
        flex: 3 1 auto
    }
    .layout__box.o__flexes-to-4 {
        flex: 4 1 auto
    }
    .layout__box.o__flexes-to-5 {
        flex: 5 1 auto
    }
    .layout__box.o__flexes-to-6 {
        flex: 6 1 auto
    }
    .layout__box.o__flexes-to-7 {
        flex: 7 1 auto
    }
    .layout__box.o__flexes-to-8 {
        flex: 8 1 auto
    }
    .layout__box.o__flexes-to-9 {
        flex: 9 1 auto
    }
    .layout__box.o__flexes-to-10 {
        flex: 10 1 auto
    }
    .layout__box.o__centers-horizontally {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center
    }
    .layout__box.o__centers-vertically {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start
    }
    .layout__box.o__centers-all {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center
    }
    .c__darkest {
        color: #222
    }
    .c__deemphasized-text, .c__light, .c__lightest {
        color: #737376
    }
    .c__white {
        color: #fff
    }
    .c__error {
        color: #fd3a57
    }
    .c__active {
        color: #259b24
    }
    .c__recipients-stat {
        color: #0549d1
    }
    .c__opens-stat {
        color: #14a64e
    }
    .c__replies-stat {
        color: #bf9603
    }
    .c__clicks-stat {
        color: #c701f1
    }
    .c__unsubscribes-stat {
        color: #fd3a57
    }
    .c__goal-stat {
        color: #286efa
    }
    .c__bounces-stat {
        color: #8a572e
    }
    .c__deactivated {
        color: #737376
    }
    .c__positive {
        color: #1c903e
    }
    .c__negative {
        color: #c80000
    }
    .c__note-lightest {
        color: #9c8c7b
    }
    .c__horizontal-select-active {
        color: #38474f
    }
    .c__horizontal-select-inactive, .c__large-horizontal-select-inactive {
        color: #737376
    }
    .c__averages {
        color: #4c748c
    }
    .sp__hr {
        height: 0;
        margin: 20px 0;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, .1);
        background-color: transparent
    }
    .sp__hr-background {
        background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .2), transparent);
        background-position: 50%;
        background-repeat: repeat-x;
        background-size: auto 1px;
        z-index: -1
    }
    .avatar, .avatar__media, .btn.o__subtle {
        background-clip: padding-box
    }
    .sp__hr-background-mask {
        background-color: #fff;
        padding: 0 5px
    }
    .sp__1 {
        height: 10px
    }
    .sp__1p5 {
        height: 15px
    }
    .sp__2 {
        height: 20px
    }
    .sp__3 {
        height: 30px
    }
    .sp__4 {
        height: 40px
    }
    .sp__5 {
        height: 50px
    }
    .sp__6 {
        height: 60px
    }
    .sp__7 {
        height: 70px
    }
    .sp__8 {
        height: 80px
    }
    .a__part-fade-in {
        -webkit-animation-name: fade_in;
        animation-name: fade_in;
        -webkit-animation-duration: .2s;
        animation-duration: .2s;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1
    }
    .a__reveal-conversation-card {
        -webkit-animation-name: reveal_conversation_card;
        animation-name: reveal_conversation_card;
        -webkit-animation-duration: .3s;
        animation-duration: .3s;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1
    }
    .a__fade-in, .a__fade-out-inbox-item {
        -webkit-animation-iteration-count: 1
    }
    .a__fade-in {
        -webkit-animation-name: fade_in;
        animation-name: fade_in;
        -webkit-animation-duration: .4s;
        animation-duration: .4s;
        animation-iteration-count: 1
    }
    .a__slow-fade-in {
        transition: opacity linear 1s;
        opacity: 0
    }
    .a__fade-out-inbox-item {
        -webkit-animation-name: fade_out_inbox_item;
        animation-name: fade_out_inbox_item;
        -webkit-animation-duration: .4s;
        animation-duration: .4s;
        animation-iteration-count: 1;
        opacity: 0;
        height: 0
    }
    .btn.o__disabled, a.o__disabled {
        opacity: .5;
        pointer-events: none
    }
    a.o__disabled {
        text-decoration: none
    }
    .z__0 {
        box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent
    }
    .z__1 {
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .1), 0 1px 1px 0 rgba(0, 0, 0, .06);
        z-index: 100
    }
    .z__2 {
        box-shadow: 0 1px 15px 0 rgba(0, 0, 0, .1), 0 0 0 0 transparent;
        z-index: 2000
    }
    .btn {
        border: 1px solid;
        border-color: rgba(0, 0, 0, .2);
        border-radius: 4px;
        padding: 5px 12px 7px;
        display: inline-block;
        cursor: pointer;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: box-shadow linear 40ms
    }
    .btn.o__forced-active.o__destructive, .btn.o__forced-active.o__go, .btn.o__forced-active.o__primary, .btn.o__forced-active.o__primary-destructive, .btn.o__forced-active.o__primary-live, .btn.o__forced-active.o__secondary, .btn.o__forced-active.o__secondary-destructive, .btn.o__forced-active.o__secondary-live, .btn:active.o__destructive, .btn:active.o__go, .btn:active.o__primary, .btn:active.o__primary-destructive, .btn:active.o__primary-live, .btn:active.o__secondary, .btn:active.o__secondary-destructive, .btn:active.o__secondary-live {
        border-color: rgba(0, 0, 0, .2)
    }
    .btn:focus {
        outline: 0
    }
    .btn.o__dropdown-opener {
        padding-right: 6px
    }
    .btn.o__fit {
        display: block;
        text-align: center;
        width: 100%
    }
    .btn.o__fit.o__dropdown-opener {
        text-align: left
    }
    .btn.o__cta {
        padding: 9px 23px 11px
    }
    .btn.o__icon {
        padding-left: 8px;
        padding-right: 8px
    }
    .btn.o__in-left-list, .btn__toggle-list.o__in-left-list {
        margin: 0 10px 0 0;
        float: left
    }
    .btn.o__in-right-list, .btn__toggle-list.o__in-right-list {
        margin: 0 0 0 10px;
        float: left
    }
    .btn.o__go, .btn.o__primary, .btn.o__primary-destructive {
        color: #fff
    }
    .btn.o__primary, .btn.o__primary:focus {
        background-color: #286efa
    }
    .btn.o__primary.o__forced-active, .btn.o__primary:active, .btn.o__primary:hover {
        background-color: #0549d1
    }
    .btn.o__primary:focus {
        box-shadow: 0 0 0 3px rgba(40, 110, 250, .2)
    }
    .btn.o__primary-destructive, .btn.o__primary-destructive:focus {
        background-color: #fd3a57
    }
    .btn.o__primary-destructive.o__forced-active, .btn.o__primary-destructive:active, .btn.o__primary-destructive:hover {
        background-color: #b41d34
    }
    .btn.o__primary-destructive:focus {
        box-shadow: 0 0 0 3px rgba(253, 58, 87, .2);
        border-color: rgba(0, 0, 0, .2)
    }
    .btn.o__primary-on-blue {
        background-color: #fff;
        color: #286efa;
        border-color: rgba(5, 73, 209, .6)
    }
    .btn.o__primary-on-blue:active, .btn.o__primary-on-blue:hover {
        color: #0549d1;
        border-color: #0549d1
    }
    .btn.o__primary-on-blue:active {
        background-color: #e8f0ff
    }
    .btn.o__cell-secondary, .btn.o__cell-secondary-destructive {
        padding: 10px 13px;
        margin: -1px;
        color: #222;
        background-color: transparent;
        border: 1px solid transparent;
        text-align: center;
        border-radius: 0;
        width: auto
    }
    .btn.o__cell-secondary:hover {
        background-color: #fff;
        color: #286efa
    }
    .btn.o__cell-secondary.o__forced-active, .btn.o__cell-secondary:active, .btn.o__cell-secondary:focus:active {
        background-color: #e8f0ff;
        color: #0549d1
    }
    .btn.o__cell-secondary.o__forced-active, .btn.o__cell-secondary:active, .btn.o__cell-secondary:focus:active, .btn.o__cell-secondary:hover {
        border-color: #286efa
    }
    .btn.o__cell-secondary:focus, .btn.o__cell-secondary:focus:active {
        box-shadow: 0 0 0 3px rgba(40, 110, 250, .2)
    }
    .btn.o__cell-secondary-destructive {
        color: #fd3a57
    }
    .btn.o__cell-secondary-destructive:hover {
        background-color: #fff;
        color: #fd3a57
    }
    .btn.o__cell-secondary-destructive.o__forced-active, .btn.o__cell-secondary-destructive:active, .btn.o__cell-secondary-destructive:focus:active {
        background-color: #fed9db;
        color: #b41d34
    }
    .btn.o__destructive, .btn.o__destructive:focus, .btn.o__destructive:hover, .btn.o__secondary, .btn.o__secondary-destructive, .btn.o__secondary-destructive:focus, .btn.o__secondary-destructive:hover, .btn.o__secondary-live, .btn.o__secondary:focus, .btn.o__secondary:hover {
        background-color: #fff
    }
    .btn.o__cell-secondary-destructive.o__forced-active, .btn.o__cell-secondary-destructive:active, .btn.o__cell-secondary-destructive:focus:active, .btn.o__cell-secondary-destructive:hover {
        border-color: #fd3a57
    }
    .btn.o__cell-secondary-destructive:focus, .btn.o__cell-secondary-destructive:focus:active {
        box-shadow: 0 0 0 3px rgba(253, 58, 87, .2)
    }
    .btn.o__secondary {
        color: #222
    }
    .btn.o__destructive, .btn.o__secondary-destructive {
        color: #fd3a57
    }
    .btn.o__secondary:hover {
        color: #286efa;
        border: 1px solid #286efa;
        box-shadow: none;
        background-color: #fff
    }
    .btn.o__secondary.o__forced-active, .btn.o__secondary:active {
        box-shadow: none
    }
    .btn.o__secondary:focus {
        box-shadow: 0 0 0 3px rgba(40, 110, 250, .2)
    }
    .btn.o__secondary.o__forced-active, .btn.o__secondary:active {
        color: #0549d1;
        background-color: #e8f0ff
    }
    .btn.o__destructive:hover, .btn.o__secondary-destructive:hover {
        border: 1px solid #fd3a57;
        color: #fd3a57
    }
    .btn.o__destructive:focus, .btn.o__secondary-destructive:focus {
        color: #fd3a57;
        box-shadow: 0 0 0 3px rgba(253, 58, 87, .2);
        border-color: rgba(0, 0, 0, .2)
    }
    .btn.o__destructive.o__forced-active, .btn.o__destructive:active, .btn.o__secondary-destructive.o__forced-active, .btn.o__secondary-destructive:active {
        color: #b41d34;
        background-color: #fed9db
    }
    .btn.o__secondary-on-blue {
        background-color: #286efa;
        color: #fff;
        border-color: rgba(255, 255, 255, .6)
    }
    .btn.o__secondary-on-blue:hover {
        border-color: #fff
    }
    .btn.o__secondary-on-blue:active {
        border-color: #0549d1
    }
    .btn.o__go, .btn.o__primary-live {
        background-color: #1bb157;
        color: #fff
    }
    .btn.o__go.o__forced-active, .btn.o__go:active, .btn.o__go:focus, .btn.o__go:hover, .btn.o__primary-live.o__forced-active, .btn.o__primary-live:active, .btn.o__primary-live:focus, .btn.o__primary-live:hover {
        background-color: #0f8a40
    }
    .btn.o__secondary-live, .btn.o__secondary-live:hover {
        background-color: #fff;
        color: #1bb157
    }
    .btn.o__go:focus, .btn.o__primary-live:focus {
        box-shadow: 0 0 0 3px rgba(27, 177, 87, .2);
        border-color: rgba(0, 0, 0, .2)
    }
    .btn.o__secondary-live:hover {
        border: 1px solid #1bb157
    }
    .btn.o__secondary-live.o__forced-active, .btn.o__secondary-live:active {
        color: #0f8a40;
        background-color: #d7efdc
    }
    .btn.o__secondary-live:focus {
        box-shadow: 0 0 0 3px rgba(27, 177, 87, .2);
        border: 1px solid #1bb157
    }
    .btn.o__secondary.o__has-error, .btn.o__secondary.o__has-error:active, .btn.o__secondary.o__has-error:hover, .f__custom-select__box.o__has-error, .f__custom-select__box.o__has-error:active, .f__custom-select__box.o__has-error:hover {
        border-color: #fd3a57
    }
    .btn.o__toggle {
        border-radius: 0;
        float: left;
        margin-right: -1px;
        background-color: #fff;
        color: #222;
        border: 1px solid rgba(0, 0, 0, .2);
        border-right: 1px solid transparent
    }
    .btn.o__toggle:last-child {
        border-right: 1px solid rgba(0, 0, 0, .2)
    }
    .btn.o__toggle:focus {
        border-width: 0;
        background-color: #f6f6f6
    }
    .btn.o__toggle.o__forced-active, .btn.o__toggle:focus:active {
        background-color: #e8f0ff
    }
    .btn.o__toggle.o__selected {
        background-color: #e8f0ff;
        cursor: default
    }
    .btn.o__toggle.o__selected:focus {
        box-shadow: inset 0 0 0 2px #286efa, inset 0 0 0 3px rgba(255, 255, 255, .7)
    }
    .btn.o__toggle.o__selected, .btn.o__toggle:hover {
        box-shadow: none;
        color: #286efa;
        border: 1px solid #286efa;
        z-index: 1;
        position: relative
    }
    .btn.o__toggle.o__selected:hover {
        color: #0549d1;
        border: 1px solid #0549d1
    }
    .btn__toggle-list {
        display: inline-block
    }
    .btn__toggle-list.o__fit {
        text-align: center;
        width: 100%
    }
    .btn.o__toggle.l__full__col {
        float: none
    }
    .btn__toggle-list>.btn:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px
    }
    .btn__toggle-list>.btn:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px
    }
    .btn.o__subtle {
        border-color: transparent;
        background-color: transparent
    }
    .btn__footer, .card, .tbl tbody {
        background-color: #fff
    }
    .btn__footer {
        padding: 13px;
        border-top: 1px solid #ebebeb
    }
    .btn__footer.o__flex {
        display: flex
    }
    .btn__footer__left, .btn__footer__right {
        flex: 1;
        min-width: min-content
    }
    .btn__footer__main {
        padding-left: 10px;
        padding-right: 10px;
        text-align: center
    }
    .btn__associated-content {
        padding: 6px 0;
        display: inline-block;
        vertical-align: bottom
    }
    .btn__tertiary, .btn__tertiary__deemphasized {
        display: inline;
        cursor: pointer
    }
    .btn__tertiary {
        color: #286efa
    }
    .btn__tertiary__deemphasized {
        color: #737376
    }
    .btn__tertiary:hover, .btn__tertiary__deemphasized:hover {
        opacity: 1
    }
    .btn__tertiary:hover {
        color: #0549d1
    }
    .btn__tertiary__deemphasized:hover {
        color: #286efa
    }
    .card__closer, .card__closer:hover {
        color: #737376
    }
    .button__list {
        display: inline-flex
    }
    .button__list.o__block {
        display: flex;
        align-items: center
    }
    .button__list.o__block.o__left {
        justify-content: flex-start
    }
    .button__list.o__block.o__right {
        justify-content: flex-end
    }
    .button__list.o__block.o__center {
        justify-content: center
    }
    .button__list .btn {
        margin: 0 0 0 10px
    }
    .button__list>.btn:first-child {
        margin-left: 0
    }
    .tbl {
        margin: 20px 0;
        display: table
    }
    .tbl.o__fit {
        min-width: 100%
    }
    .tbl.o__fixed {
        margin: 0
    }
    .tbl thead tr {
        height: initial
    }
    .tbl tr {
        height: 50px
    }
    .tbl__cell {
        white-space: nowrap;
        padding: 9px 15px;
        text-align: left;
        display: table-cell;
        border-bottom: 1px solid rgba(0, 0, 0, .1)
    }
    .tbl__cell.o__selection {
        width: 12px;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none
    }
    .tbl__cell.o__flush-left {
        padding-left: 0
    }
    .tbl__cell.o__contains-button {
        padding: 0
    }
    .tbl__cell.o__contains-variation-list {
        padding: 0 15px
    }
    .tbl__cell.o__kbd-selected {
        box-shadow: 3px 0 0 #737376 inset
    }
    .tbl__cell.o__fixed-header {
        position: initial;
        height: 0;
        padding-top: 0;
        padding-bottom: 0
    }
    .tbl__body {
        display: table-row-group
    }
    .tbl__header {
        display: table-header-group
    }
    .tbl__row {
        display: table-row
    }
    .tbl__fixed__wrapper {
        margin: 12px 0 0;
        padding: 35px 30px 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        flex: 1;
        overflow: auto
    }
    .kv__pair, .kv__value {
        display: block
    }
    .tbl__fixed__portal {
        overflow-x: hidden;
        overflow-y: scroll
    }
    .kv__key, .kv__value, .pill {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }
    .tbl__header-width-el {
        visibility: hidden;
        display: block;
        height: 0
    }
    .tbl__fixed-header__text {
        position: absolute;
        top: 0
    }
    .kv__pair.o__in-list {
        margin-bottom: 8px
    }
    .kv__key {
        max-width: 70%;
        margin-right: 15px;
        float: left
    }
    .card {
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 4px;
        box-shadow: 0 0 0 transparent;
        transition: box-shadow linear 40ms, border-color linear .2s;
        position: relative
    }
    .card.o__in-list {
        margin: 0 0 20px
    }
    .card.o__in-small-card-list {
        margin: 0 0 15px
    }
    .card__header {
        padding: 14px 20px
    }
    .card__header.o__with-button {
        padding: 8px 8px 8px 20px
    }
    .card__header.o__expanded {
        background-color: #286efa
    }
    .card__inner {
        padding: 20px
    }
    .card__inner.o__thin {
        padding: 10px 16px 11px
    }
    .card__inner.o__thick {
        padding: 30px 40px 40px
    }
    .card__inner.o__short {
        padding-top: 13px;
        padding-bottom: 13px
    }
    .card__inner.o__conversation-controls {
        padding-top: 15px;
        padding-bottom: 15px
    }
    .card__inner.o__feed-item {
        padding: 16px
    }
    .card__inner.o__ends-with-form-radio-group {
        padding-bottom: 12px
    }
    .card__list-header {
        padding: 0 0 10px
    }
    .card.o__hoverable:hover {
        cursor: pointer
    }
    .card.o__hoverable:hover, .card.o__selected {
        border-color: #286efa;
        box-shadow: 0 4px 14px 0 rgba(5, 73, 209, .1)
    }
    .card__expanded-content {
        border-top: 1px solid rgba(0, 0, 0, .2);
        display: none
    }
    .card__expanded-content.o__visible {
        display: block
    }
    .card__closer {
        position: absolute;
        top: 8px;
        right: 8px
    }
    .card__timestamp {
        margin-left: 10px
    }
    .avatar {
        border-radius: 50%;
        display: inline-block;
        text-align: center;
        font-weight: 500;
        color: #fff;
        position: relative
    }
    .avatar.o__for-team {
        border-radius: 0
    }
    .avatar__highlight, .avatar__media {
        display: inline-block;
        border-radius: 50%
    }
    .avatar.o__xs {
        min-width: 16px;
        width: 16px;
        height: 16px;
        line-height: 16px;
        font-size: 6px;
        margin: -2px 0 2px
    }
    .avatar.o__s {
        min-width: 24px;
        width: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 10px
    }
    .avatar.o__m {
        min-width: 32px;
        width: 32px;
        height: 32px;
        line-height: 32px;
        font-size: 13px
    }
    .avatar.o__l {
        min-width: 48px;
        width: 48px;
        height: 48px;
        line-height: 48px;
        font-size: 18px
    }
    .avatar.o__xl {
        min-width: 72px;
        width: 72px;
        height: 72px;
        line-height: 72px;
        font-size: 28px
    }
    .pill, .stamp {
        font-size: 13px
    }
    .avatar.o__contained {
        position: absolute;
        left: 0;
        top: 0
    }
    .avatar.o__s.o__contained {
        top: -2px
    }
    .avatar__container {
        position: relative
    }
    .avatar__container.o__xs {
        padding-left: 22px;
        display: inline-block;
        line-height: 16px;
        box-sizing: border-box;
        max-width: 100%;
        min-height: 16px
    }
    .avatar__container.o__s {
        padding-left: 32px;
        display: inline-block;
        max-width: 100%;
        min-height: 20px
    }
    .avatar__container.o__m {
        min-height: 32px;
        padding-left: 44px
    }
    .avatar__container.o__l {
        min-height: 48px;
        padding-left: 60px
    }
    .avatar__container a:hover {
        color: #286efa
    }
    .avatar__highlight {
        width: 72px;
        height: 72px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .2)
    }
    .avatar.o__with-text {
        margin: -2px 0
    }
    .avatar.o__xs.o__contained {
        margin: 0
    }
    .btn .avatar.o__with-text, .f__custom-select__box .avatar.o__with-text, .pill .avatar.o__with-text, .t__btn-label .avatar.o__with-text, .t__group-label .avatar.o__with-text, .t__h4 .avatar.o__with-text {
        margin: -3px 0
    }
    .btn .avatar.o__xs, .f__custom-select__box .avatar.o__xs, .pill .avatar.o__xs, .t__btn-label .avatar.o__xs, .t__group-label .avatar.o__xs, .t__h4 .avatar.o__xs {
        margin: -2px 0 2px
    }
    .avatar.o__for-deleted-object {
        opacity: .4
    }
    .avatar.o__for-deleted-object .avatar__media {
        filter: url(https://static.intercomassets.com/assets/filters-596e40883d359d6b0c11f90b61d7c922.svg#grayscale);
        -webkit-filter: grayscale(1)
    }
    .avatar__media {
        width: 100%;
        height: 100%
    }
    .avatar__media.o__for-team {
        border-radius: 0
    }
    .avatar__media__icon {
        width: 100%;
        height: 100%;
        fill: #fff;
        display: block
    }
    .avatar__badge {
        position: absolute;
        border-radius: 50%;
        transform: scale(.1);
        transition: all .1s cubic-bezier(.42, 0, .58, 1);
        opacity: 0;
        display: block;
        border: 2px solid #fff
    }
    .pill.o__solo, .stamp, .unread__container {
        display: inline-block;
        vertical-align: bottom
    }
    .avatar__badge.o__on {
        transform: scale(1);
        opacity: 1
    }
    .avatar__badge.o__active {
        background-color: #1bb157
    }
    .avatar__badge.o__away {
        background-color: #fbc916
    }
    .avatar__badge.o__on-background-palette-blue-dark {
        border-color: #0549d1
    }
    .avatar__badge.o__on-background-palette-blue {
        border-color: #286efa
    }
    .avatar__badge.o__on-background-palette-blue-light {
        border-color: #e8f0ff
    }
    .avatar__badge.o__on-background-palette-black {
        border-color: #222
    }
    .avatar__badge.o__on-background-palette-gray {
        border-color: #737376
    }
    .avatar__badge.o__on-background-palette-gray-light {
        border-color: #ebebeb
    }
    .avatar__badge.o__on-background-palette-gray-lightest {
        border-color: #f6f6f6
    }
    .avatar__badge.o__on-background-palette-green-dark {
        border-color: #0f8a40
    }
    .avatar__badge.o__on-background-palette-green {
        border-color: #1bb157
    }
    .avatar__badge.o__on-background-palette-green-light {
        border-color: #d7efdc
    }
    .avatar__badge.o__on-background-palette-red-dark {
        border-color: #b41d34
    }
    .avatar__badge.o__on-background-palette-red {
        border-color: #fd3a57
    }
    .avatar__badge.o__on-background-palette-red-light {
        border-color: #fed9db
    }
    .avatar__badge.o__on-background-palette-yellow-dark {
        border-color: #6f5502
    }
    .avatar__badge.o__on-background-palette-yellow {
        border-color: #fbc916
    }
    .avatar__badge.o__on-background-palette-yellow-light {
        border-color: #feedaf
    }
    .avatar__badge.o__on-background-palette-purple {
        border-color: #c701f1
    }
    .avatar__badge.o__on-background-palette-white {
        border-color: #fff
    }
    .avatar__badge.o__on-background-palette-border-shadow-dark {
        border-color: rgba(0, 0, 0, .2)
    }
    .avatar__badge.o__on-background-palette-border-shadow {
        border-color: rgba(0, 0, 0, .1)
    }
    .avatar__badge.o__on-background-palette-border-shadow-light {
        border-color: rgba(0, 0, 0, .05)
    }
    .avatar__badge.o__on-background-palette-transparent {
        border-color: transparent
    }
    .avatar__badge.o__xs {
        width: 8px;
        height: 8px;
        top: 9px;
        left: 9px;
        border-width: 1px
    }
    .avatar__badge.o__m, .avatar__badge.o__s {
        width: 12px;
        height: 12px;
        border-width: 2px
    }
    .avatar__badge.o__s {
        top: 14px;
        left: 14px
    }
    .avatar__badge.o__m {
        top: 22px;
        left: 22px
    }
    .avatar__badge.o__l {
        width: 14px;
        height: 14px;
        top: 36px;
        left: 36px;
        border-width: 2px
    }
    .avatar__badge.o__xl {
        width: 24px;
        height: 24px;
        top: 52px;
        left: 52px;
        border-width: 4px
    }
    .stamp, .unread {
        height: 20px;
        line-height: 18px;
        box-sizing: border-box;
        font-weight: 500
    }
    .pill {
        float: left;
        margin: 10px 10px 0 0;
        padding: 2px 10px 3px 27px;
        border-radius: 4px;
        border: 1px solid;
        border-color: rgba(0, 0, 0, .2);
        background-color: #fff;
        box-sizing: border-box;
        max-width: 100%;
        position: relative;
        transform: translateZ(0);
        line-height: 18px;
        font-weight: 500;
        color: #737376
    }
    .pill__delete, .pill__icon {
        position: absolute;
        top: 3px
    }
    .pill.o__has-delete {
        padding-right: 27px
    }
    .pill.o__solo {
        float: none;
        margin: -2px 0 -3px
    }
    .pill__icon {
        left: 9px
    }
    .pill__delete {
        right: 8px
    }
    .variation {
        padding: 5px 0
    }
    .stamp {
        padding: 0 6px;
        border: 1px solid;
        border-radius: 4px
    }
    .stamp.o__blue {
        background-color: #286efa;
        border-color: #286efa;
        color: #fff
    }
    .stamp.o__light-blue {
        background-color: #e8f0ff;
        border-color: #e8f0ff;
        color: #286efa
    }
    .stamp.o__article-count, .stamp.o__company, .stamp.o__contact, .stamp.o__teammate, .stamp.o__user {
        background-color: transparent;
        border-color: rgba(0, 0, 0, .2);
        color: #737376
    }
    .stamp.o__live {
        background-color: #1bb157;
        border-color: #1bb157;
        color: #fff
    }
    .stamp.o__inactive, .stamp.o__paused {
        background-color: #ebebeb;
        border-color: rgba(0, 0, 0, .2);
        color: #737376
    }
    .stamp.o__featured, .stamp.o__review, .stamp.o__scheduled {
        background-color: #fbc916;
        border-color: #fbc916;
        color: #6f5502
    }
    .stamp.o__featured {
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }
    .stamp.o__unverified {
        background: #fd3a57;
        border-color: #fd3a57;
        color: #fff
    }
    .unread__container {
        position: relative
    }
    .unread {
        transition: all 250ms cubic-bezier(.17, .67, .39, 1.69);
        padding: 0 5px 1px;
        min-width: 20px;
        position: absolute;
        right: -15px;
        top: -1px;
        z-index: 1;
        background-color: #fd3a57;
        color: #fff;
        font-size: 12px;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0 1px 1px 0 #222;
        opacity: 1;
        text-shadow: none;
        text-decoration: none
    }
    .unread.o__zero {
        -webkit-transform: scale(.1);
        transform: scale(.1);
        transition: all 250ms cubic-bezier(.73, .01, 1, 1);
        opacity: 0
    }
    .unread__small {
        position: absolute;
        top: 0;
        left: 15px;
        height: 6px;
        width: 6px;
        border-radius: 3px;
        background-clip: padding-box;
        background-color: #f00505
    }
    .dropdown, .overlay {
        box-sizing: border-box;
        border-radius: 4px;
        padding: 10px 0;
        background-color: #fff;
        box-shadow: 0 4px 14px 0 rgba(0, 0, 0, .2), 0 0 0 1px rgba(0, 0, 0, .05)
    }
    .overlay.o__dark {
        background-color: #3e4e60;
        color: #c5cad0
    }
    .dropdown.o__opened, .overlay.o__opened {
        position: absolute;
        top: 100%;
        right: 0;
        min-width: 190px
    }
    .dropdown__list-item, .overlay__list-item {
        display: block;
        padding: 6px 12px;
        font-weight: 500;
        border-top: 1px #fff;
        border-bottom: 1px #fff;
        text-decoration: none
    }
    .dropdown__list-item.o__hoverable:hover, .dropdown__list-item.o__selected, .overlay__list-item.o__hoverable:hover, .overlay__list-item.o__selected {
        opacity: 1;
        cursor: pointer
    }
    .dropdown__list-item.o__hoverable:hover, .dropdown__list-item.o__selected, .overlay__list-item.o__hoverable:hover {
        color: #fff;
        background-color: #286efa
    }
    .dropdown__list-item.o__dark.o__hoverable:hover, .dropdown__list-item.o__dark.o__selected, .overlay__list-item.o__dark.o__hoverable:hover, .overlay__list-item.o__dark.o__selected {
        background-color: #222;
        color: #fff
    }
    .dropdown__list-item.o__contains-fileupload, .overlay__list-item.o__contains-fileupload {
        position: relative
    }
    .overlay.o__popover {
        position: relative;
        border: 1px solid rgba(0, 0, 0, .2)
    }
    .overlay.o__dropdown.o__down-left, .overlay.o__dropdown.o__down-right, .overlay.o__dropdown.o__top-left, .overlay__popover-caret {
        position: absolute
    }
    .overlay.o__dropdown.o__dark, .overlay.o__popover.o__dark {
        border: 0
    }
    .overlay__popover-caret .overlay__popover-caret__vector {
        fill: #fff;
        stroke: rgba(0, 0, 0, .2)
    }
    .overlay__popover-caret.o__dark .overlay__popover-caret__vector {
        fill: #3e4e60;
        stroke: transparent
    }
    .overlay__popover-caret.o__bottom {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        bottom: -9px;
        left: 50%;
        margin-left: -4px
    }
    .overlay__popover-caret.o__top {
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
        top: -9px;
        left: 50%;
        margin-left: -4px
    }
    .overlay.o__dropdown.o__down-left, .overlay.o__dropdown.o__down-right, .overlay.o__dropdown.o__opened {
        margin-top: 4px
    }
    .overlay.o__down-right {
        right: 0;
        top: 100%
    }
    .overlay.o__down-left {
        left: 0;
        top: 100%
    }
    .overlay.o__top-left {
        left: 0;
        bottom: 100%
    }
    .overlay__opener {
        display: inline-block;
        vertical-align: bottom
    }
    .f__expanded-select, .f__expanding-textarea-spacer, .f__invisible-select__box, .f__invisible-text, .f__text {
        padding: 5px 11px;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 4px
    }
    textarea.f__text {
        resize: vertical
    }
    textarea.f__expanding-textarea-field {
        resize: none
    }
    .f__expanding-textarea-wrapper, .f__text {
        width: 100%;
        max-width: 558px
    }
    .f__expanding-textarea-spacer, .f__text {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-size: 14px;
        line-height: 20px
    }
    .f__expanding-textarea-spacer:hover, .f__text:focus, .f__text:hover {
        border-color: #286efa
    }
    .f__text.o__small {
        padding: 1px 9px
    }
    .f__text.o__note {
        border-color: rgba(0, 0, 0, .2);
        background-color: #f6f6f6
    }
    .f__text.o__large-text {
        font-size: 18px;
        line-height: 24px;
        padding-top: 3px;
        padding-bottom: 3px
    }
    .f__expanding-textarea-field, .f__expanding-textarea-spacer {
        max-width: 100%
    }
    .f__expanding-textarea-spacer {
        width: 100%;
        margin: 0;
        visibility: hidden
    }
    .f__expanding-textarea-wrapper {
        position: relative
    }
    .f__expanding-textarea-field {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        resize: none
    }
    .f__custom-select, .f__custom-select__box {
        display: inline-block;
        vertical-align: bottom;
        position: relative
    }
    .f__expanding-textarea-wrapper.o__fit, .f__text.o__fit {
        max-width: 100%;
        transform: translateZ(0)
    }
    .f__text.o__thin {
        width: 60px;
        margin-right: 5px
    }
    .f__text.o__search {
        padding-left: 32px
    }
    .f__text:focus {
        box-shadow: 0 0 0 3px rgba(40, 110, 250, .2);
        outline: 0;
        border-color: #286efa
    }
    .f__text.o__note:focus {
        border-color: #ebebeb;
        box-shadow: inset 0 1px 1px rgba(235, 218, 201, .2)
    }
    .f__text.o__error, .f__text:invalid {
        border-color: #fd3a57
    }
    .f__text.o__error:focus, .f__text:invalid:focus {
        box-shadow: 0 0 0 3px rgba(253, 58, 87, .2)
    }
    .f__invisible-text::-webkit-input-placeholder, .f__text::-webkit-input-placeholder {
        color: #737376
    }
    .f__invisible-text::-moz-placeholder, .f__text::-moz-placeholder {
        color: #737376;
        opacity: 1
    }
    .f__invisible-text:-ms-input-placeholder, .f__text:-ms-input-placeholder {
        color: #737376
    }
    .f__invisible-text {
        width: 100%;
        max-width: 558px;
        font-family: 'Helvetica Neue', Arial, sans-serif;
        font-size: 14px;
        line-height: 20px;
        padding-left: 0;
        padding-right: 0;
        background-color: transparent;
        box-sizing: content-box
    }
    .f__custom-select__box, .f__invisible-select__box {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        line-height: 18px;
        cursor: pointer;
        width: 100%
    }
    .f__invisible-text, .f__invisible-text:focus {
        outline: 0;
        box-shadow: none;
        border: 1px solid transparent;
        border-radius: initial
    }
    .f__invisible-text:focus, .f__invisible-text:hover {
        border-bottom: 1px solid #222!important
    }
    .f__invisible-text.o__light {
        border-bottom: 1px solid #d7dee2
    }
    .f__custom-select {
        outline: 0
    }
    .f__custom-select__prefacing-text {
        margin-right: 4px
    }
    .f__custom-select__box {
        user-select: none;
        border: 1px solid rgba(34, 34, 34, .2);
        padding: 5px 30px 7px 12px;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 500;
        background-color: #fff;
        color: #222;
        border-radius: 4px
    }
    .f__custom-select__box.o__subtle {
        background-color: transparent;
        border-color: transparent
    }
    .f__custom-select__box.o__subtle:hover, .f__custom-select__box:hover {
        background-color: #fff;
        border-color: #286efa;
        color: #286efa
    }
    .f__custom-select__box.o__opened, .f__custom-select__box.o__subtle.o__opened, .f__custom-select__box.o__subtle:active, .f__custom-select__box:active, .f__custom-select__box:focus {
        outline: 0;
        box-shadow: 0 0 0 3px rgba(40, 110, 250, .2)
    }
    .f__custom-select__box.o__opened, .f__custom-select__box:active {
        border-color: #286efa
    }
    .f__custom-select__box.o__opened:hover {
        color: #0549d1;
        border-color: #0549d1
    }
    .f__custom-select__box.o__subtle.o__opened, .f__custom-select__box.o__subtle:active {
        border-color: rgba(34, 34, 34, .2)
    }
    .f__custom-select__box:focus, .f__custom-select__box:hover {
        background-color: #fff
    }
    .f__custom-select__box.o__opened, .f__custom-select__box.o__subtle.o__opened, .f__custom-select__box.o__subtle:active, .f__custom-select__box:active {
        box-shadow: none;
        color: #286efa;
        background-color: #e8f0ff
    }
    .f__custom-select__box.o__error {
        border-color: #fd3a57
    }
    .f__custom-select__box.o__disabled {
        opacity: .5;
        pointer-events: none
    }
    .f__custom-select__caret {
        position: absolute;
        top: 6px;
        right: 6px
    }
    .f__custom-select__dropdown {
        box-sizing: border-box;
        right: auto;
        left: 0;
        border-radius: 4px;
        margin-top: 3px;
        max-height: 400px;
        min-width: 100%;
        overflow: auto
    }
    .ds-new__dropdown, .modal, .modal__overlay__inner, .table__body__wrapper.o__flexing {
        max-height: 100%
    }
    .f__custom-select__box.o__invisible {
        background-color: transparent;
        border: 1px solid transparent;
        border-radius: initial;
        font-weight: 400;
        padding-left: 0
    }
    .f__custom-select__box.o__invisible.o__opened, .f__custom-select__box.o__invisible:hover {
        box-shadow: none;
        border-bottom: 1px solid #222!important
    }
    .f__custom-select__caret.o__invisible {
        display: none;
        right: -4px
    }
    .f__custom-select__box.o__invisible.o__opened .f__custom-select__caret.o__invisible, .f__custom-select__box.o__invisible:hover .f__custom-select__caret.o__invisible {
        color: #222;
        display: inline
    }
    .f__expanded-select, .f__invisible-select, .f__invisible-select__box {
        display: inline-block;
        vertical-align: bottom
    }
    .f__custom-select.o__fit {
        width: 100%
    }
    .f__text.o__disabled {
        pointer-events: none;
        resize: none;
        background-color: #f6f6f6;
        border: 1px solid rgba(0, 0, 0, .1)
    }
    .f__text.o__invisible {
        padding-left: 0;
        padding-right: 0;
        background-color: transparent;
        box-sizing: content-box
    }
    .f__text.o__invisible, .f__text.o__invisible:focus {
        outline: 0;
        box-shadow: none;
        border: 1px solid transparent;
        border-radius: initial
    }
    .f__text.o__invisible:focus, .f__text.o__invisible:hover {
        border-bottom: 1px solid #222!important
    }
    .f__invisible-select {
        position: relative;
        font-size: 14px;
        padding-right: 16px;
        outline: 0;
        transition: padding-right .1s ease-in
    }
    .f__invisible-select.o__opened, .f__invisible-select:focus, .f__invisible-select:hover {
        padding-right: 0
    }
    .f__invisible-select.o__opened .f__invisible-select__box, .f__invisible-select:focus .f__invisible-select__box, .f__invisible-select:hover .f__invisible-select__box {
        outline: 0;
        color: #222;
        box-shadow: none;
        border-bottom: 1px solid #222!important;
        padding-right: 16px
    }
    .f__invisible-select.o__opened .f__invisible-select__caret, .f__invisible-select:focus .f__invisible-select__caret, .f__invisible-select:hover .f__invisible-select__caret {
        opacity: 1;
        transition: opacity .1s .1s ease-in
    }
    .f__invisible-select__box {
        user-select: none;
        padding: 6px 0;
        font-size: 13px;
        font-weight: 400;
        position: relative;
        background-color: transparent;
        color: #737376;
        border: 1px solid transparent;
        border-radius: initial;
        transition: padding-right .1s ease-in
    }
    .f__expanded-select, .f__horizontal-select {
        -moz-user-select: none;
        -webkit-user-select: none
    }
    .f__expanded-select, .toggle__on-off__label {
        -webkit-touch-callout: none;
        -ms-user-select: none
    }
    .f__invisible-select__box.o__light {
        border-bottom: 1px solid #d7dee2
    }
    .f__invisible-select__caret {
        color: #222;
        opacity: 0;
        position: absolute;
        top: 6px;
        right: -4px
    }
    .f__expanded-select {
        user-select: none;
        padding: 0;
        background-color: #fff;
        cursor: default;
        border: 0
    }
    .f__expanded-select__item {
        padding: 5px 11px;
        color: #222;
        cursor: pointer;
        font-weight: 500
    }
    .f__expanded-select__item.o__first {
        border-top: 0
    }
    .f__expanded-select__item.o__selected, .f__expanded-select__item.o__selected:active, .f__expanded-select__item.o__selected:hover {
        cursor: default
    }
    .f__expanded-select__item.o__selected, .f__expanded-select__item:active, .f__expanded-select__item:hover {
        background-color: #fff;
        color: #286efa
    }
    .f__expanded-select__item.o__selected, .f__expanded-select__item.o__selected:active {
        color: #286efa
    }
    .f__expanded-select__item.o__selected:hover {
        background-color: #e8f0ff;
        color: #0549d1
    }
    .f__expanded-select__item-container:first-child {
        border-top-color: rgba(0, 0, 0, .2);
        border-top-left-radius: 4px;
        border-top-right-radius: 4px
    }
    .f__expanded-select__item-container:first-child .f__expanded-select__item {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px
    }
    .f__expanded-select__item-container:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-bottom-color: rgba(0, 0, 0, .2)
    }
    .f__expanded-select__item-container:last-child .f__expanded-select__item {
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px
    }
    .f__expanded-select.o__fit {
        width: 100%
    }
    .f__select.o__fit {
        width: 100%
    }
    .f__group-label {
        display: block;
        padding-bottom: 3px
    }
    .f__group {
        margin-bottom: 12px
    }
    .f__group.o__checkbox-list-header, .f__group.o__radio-list-header {
        margin-bottom: 2px
    }
    .f__group.o__checkbox-group, .f__group.o__radio-group {
        margin-bottom: 8px
    }
    .f__20px-by-element {
        padding: 6px 0
    }
    .f__18px-by-element {
        padding: 7px 0
    }
    .f__checkbox-wrapper, .f__radio-wrapper {
        width: 19px;
        float: left
    }
    .f__checkbox-content, .f__radio-content {
        display: block;
        margin-left: 19px
    }
    .f__checkbox-content.o__disabled, .f__radio-content.o__disabled {
        opacity: .5
    }
    .f__checkbox-label, .f__radio-label {
        display: block
    }
    .f__hidden-fileupload {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        opacity: 0;
        cursor: pointer
    }
    .f__horizontal-select-container.o__small {
        height: 65px
    }
    .f__horizontal-select-container.o__large {
        height: 172px
    }
    .f__horizontal-select:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-left: 1px solid #ebebeb
    }
    .f__horizontal-select:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px
    }
    .f__horizontal-select {
        cursor: pointer;
        position: relative;
        text-align: center;
        box-sizing: border-box;
        border: 1px solid;
        border-color: #ebebeb #ebebeb #ebebeb transparent;
        -khtml-user-select: none;
        user-select: none;
        z-index: 1
    }
    .f__date-picker, .toggle__on-off__label {
        -webkit-user-select: none;
        -moz-user-select: none
    }
    .f__horizontal-select-inner {
        width: 100%
    }
    .f__horizontal-select:hover {
        z-index: 2;
        border-color: #286efa
    }
    .f__horizontal-select:not(:first-child) {
        margin-left: -1px
    }
    .f__horizontal-select.o__selected {
        background-color: #e8f0ff;
        border-color: #286efa;
        color: #286efa
    }
    .f__horizontal-select-selected-icon {
        color: #286efa;
        position: absolute;
        right: 7px;
        top: 3px
    }
    .f__date-picker {
        overflow: hidden;
        -khtml-user-select: none;
        user-select: none;
        cursor: default
    }
    .f__date-picker__tbl {
        border: 0;
        border-collapse: collapse;
        width: 100%
    }
    .f__date-picker__date, .f__date-picker__day-of-week {
        font-weight: 500;
        vertical-align: top;
        padding: 0;
        border: 1px solid transparent
    }
    .f__date-picker__day-of-week {
        border-bottom-color: #ebebeb;
        color: #737376;
        font-size: 12px;
        padding: 5px 0
    }
    .f__date-picker__date {
        font-size: 13px;
        border-color: #ebebeb
    }
    .f__date-picker__date:first-child {
        border-left-color: transparent
    }
    .f__date-picker__date:last-child {
        border-right-color: transparent
    }
    .f__date-picker__date-selection {
        color: #737376;
        background-color: #fff;
        line-height: 31px;
        height: 31px;
        display: block;
        text-decoration: none;
        text-align: center;
        min-width: 31px
    }
    .form__input, .form__input-prefix, .form__input-suffix, .nav__secondary__input {
        line-height: 20px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
    }
    .f__date-picker__date-selection.o__disabled, .f__date-picker__date-selection.o__next-week, .f__date-picker__date-selection.o__previous-week {
        pointer-events: none;
        color: #737376;
        background-color: #f6f6f6;
        cursor: default
    }
    .f__date-picker__date-selection:hover {
        background-color: #f6f6f6;
        opacity: 1
    }
    .f__date-picker__date-selection.o__current-day {
        background-color: #ebebeb
    }
    .f__date-picker__date-selection.o__selected {
        color: #fff;
        background-color: #286efa;
        position: relative;
        cursor: default
    }
    .f__date-picker__date-selection.o__selected:before {
        z-index: 5;
        position: absolute;
        left: -1px;
        right: -1px;
        top: -1px;
        bottom: -1px;
        content: ' ';
        pointer-events: none;
        border: 1px solid #286efa
    }
    .f__date-picker__month {
        display: flex;
        flex-direction: row;
        padding: 2px 0
    }
    .f__date-picker__next-month, .f__date-picker__prev-month {
        flex: 1;
        text-align: center
    }
    .f__date-picker__month-label {
        flex: 5;
        text-align: center
    }
    .f__date-picker__day-of-week__initial, abbr.f__date-picker__day-of-week__initial {
        border-bottom: 0
    }
    .f__v2__group {
        margin: 0 0 20px
    }
    .f__v2__group.o__major-heading {
        margin-bottom: 15px
    }
    .f__v2__group.o__minor-heading {
        margin-bottom: 10px
    }
    .f__v2__checkbox-label, .f__v2__radio-label {
        display: block;
        margin-bottom: 8px
    }
    .form {
        max-width: 520px
    }
    .form__input, .form__input-prefix, .form__input-suffix {
        border: 1px solid #ccc;
        padding: 6px 12px;
        border-radius: 4px;
        font-size: 14px
    }
    .form__input {
        box-sizing: border-box;
        width: 100%;
        z-index: 2
    }
    .form__input-prefix, .form__input-suffix {
        color: #737376;
        background-color: #ebebeb;
        display: inline-block;
        z-index: 1
    }
    .form__input-prefix {
        border-right: 0;
        border-radius: 4px 0 0 4px
    }
    .form__input-suffix {
        border-left: 0;
        border-radius: 0 4px 4px 0
    }
    .form__input__textarea {
        resize: vertical;
        min-height: 74px
    }
    .form__input:focus, .form__input:hover {
        border-color: #286efa
    }
    .form__input:focus {
        outline: 0;
        box-shadow: 0 0 0 3px rgba(40, 110, 250, .2)
    }
    .form__input::-webkit-input-placeholder {
        color: #737376
    }
    .form__input:-ms-input-placeholder {
        color: #737376
    }
    .form__input::-moz-placeholder {
        color: #737376;
        opacity: 1
    }
    .form__input.o__disabled {
        background-color: #f6f6f6;
        color: rgba(115, 115, 118, .5);
        pointer-events: none;
        resize: none
    }
    .form__input.o__disabled:focus, .form__input.o__disabled:hover {
        border-color: #ccc
    }
    .form__input.o__disabled::-webkit-input-placeholder {
        opacity: .5
    }
    .form__input.o__disabled:-ms-input-placeholder {
        opacity: .5
    }
    .form__input.o__disabled::-moz-placeholder {
        opacity: .5
    }
    .form__input.o__has-prefix {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0
    }
    .form__input.o__has-suffix {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0
    }
    .form__item.o__error .form__input {
        border-color: #fd3a57
    }
    .modal__body.o__has-top-border, .modal__footer {
        border-top: 1px solid rgba(0, 0, 0, .1)
    }
    .form__item.o__error .form__input:focus {
        box-shadow: 0 0 0 3px rgba(253, 58, 87, .2)
    }
    .form__label {
        margin-bottom: 0!important;
        padding-bottom: 4px;
        display: inline-block
    }
    .form__error-text, .form__item.o__error .form__label {
        color: #fd3a57
    }
    .form__checkbox-content, .form__radio-button-content {
        max-width: 100%
    }
    .form__checkbox-content.o__disabled, .form__radio-button-content.o__disabled {
        opacity: .5
    }
    .form__checkbox, .form__radio-button {
        margin-top: 0;
        margin-bottom: 0;
        height: 20px
    }
    .modal__overlay {
        background-color: rgba(0, 0, 0, .6);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        min-width: 100%;
        z-index: 5000;
        overflow: auto;
        box-sizing: border-box
    }
    .banner, .toggle__on-off {
        position: relative;
        box-sizing: border-box
    }
    .modal__overlay__inner {
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
        overflow: auto
    }
    .modal {
        background-color: #fff;
        box-shadow: 0 4px 14px 0 rgba(0, 0, 0, .2), 0 0 0 1px rgba(0, 0, 0, .2);
        width: 100%;
        max-width: 520px;
        border-radius: 6px;
        margin: 0 auto
    }
    .modal.o__confirm {
        max-width: 460px
    }
    .modal.o__medium {
        max-width: 610px
    }
    .modal.o__wide {
        max-width: 720px
    }
    .modal.o__extra-wide {
        max-width: 819px
    }
    .modal__header {
        padding: 20px 20px 20px 30px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap
    }
    .modal__header__close, .modal__header__left {
        flex: 1;
        min-width: -webkit-min-content;
        min-width: -moz-min-content;
        min-width: min-content
    }
    .modal__header__close {
        flex: 1 1 0;
        min-width: auto;
        padding-left: 20px
    }
    .modal__header__title {
        padding: 0;
        text-align: left
    }
    .modal__header__close__link {
        padding: 2px 0;
        display: block;
        color: #737376
    }
    .modal__header__close__link:hover {
        color: #286efa
    }
    .modal__body {
        padding: 10px 30px 30px;
        background-color: transparent;
        box-shadow: none;
        text-align: left
    }
    .lock__overlay, .nothingness, .quick-action, .symbol__circle, .toggle__on-off__label {
        text-align: center
    }
    .modal__body.o__with-form {
        padding-bottom: 4px
    }
    .modal__body.o__no-footer {
        border-radius: 0 0 3px 3px
    }
    .modal__body.o__simple-frame {
        padding: 0
    }
    .modal__body.o__simple-frame.o__no-footer {
        border-bottom: 0
    }
    .modal__body__confirmation-text {
        padding: 4px 0 19px;
        min-height: 83px;
        box-sizing: border-box
    }
    .modal__body__confirmation-buttons {
        padding-bottom: 30px;
        text-align: center
    }
    .modal__form-group__left-media-part {
        min-width: 130px;
        padding-right: 20px
    }
    .modal__footer {
        padding: 20px
    }
    .content>* {
        display: block;
        margin-bottom: 16px
    }
    .content>.form__label, .symbol__circle {
        display: inline-block
    }
    .content>:first-child {
        margin-top: 0!important
    }
    .content>:last-child {
        margin-bottom: 0!important
    }
    .content>.heading.o__size-1, .content>h1 {
        margin-bottom: 24px;
        margin-top: 48px
    }
    .content>.heading.o__size-2, .content>.heading.o__size-3, .content>h2, .content>h3 {
        margin-bottom: 16px;
        margin-top: 32px
    }
    .content>.heading.o__size-4, .content>h4 {
        margin-bottom: 4px;
        margin-top: 8px
    }
    .content>label {
        margin-bottom: 4px
    }
    .content>p {
        margin-bottom: 16px
    }
    .content>.btn__tertiary, .content>.filter-block__container, .content>.form__item, .content>.radio-button-group, .content>.tab-control, .content>button, .content>hr {
        margin-bottom: 24px
    }
    .content>hr {
        margin-top: 24px
    }
    .content>.form__checkbox-container, .content>.form__radio-button-container {
        margin-bottom: 8px
    }
    .content>.form__error-text, .content>.form__hint, .content>.form__input-container, .content>.form__label {
        margin-bottom: 4px
    }
    .content>.form__section__heading.o__size-4 {
        margin-top: 32px
    }
    .content>.form__section__heading+.form__item {
        margin-top: 16px
    }
    .stage__separator {
        padding: 0 12px 0 11px
    }
    .symbol__circle {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-clip: padding-box;
        font-size: 12px;
        font-weight: 500;
        vertical-align: bottom
    }
    .symbol__circle.o__by-text {
        margin-right: 4px
    }
    .symbol__circle.o__blue {
        background-color: #0549d1;
        color: #fff
    }
    .symbol__circle.o__green {
        background-color: #1bb157;
        color: #fff
    }
    .symbol__circle.o__gray {
        background-color: #ebebeb;
        color: #737376
    }
    .symbol__circle.o__inert {
        background-color: #737376;
        color: #fff
    }
    .symbol__circle.o__small {
        height: 16px;
        width: 16px;
        font-size: 9px
    }
    .tabs__full-width-tab {
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        border-left: 1px solid rgba(0, 0, 0, .2);
        background-color: #f6f6f6
    }
    .tabs__full-width-tab.o__selected {
        background-color: #fff;
        border-bottom-color: #fff
    }
    .tabs__full-width-tab:first-child {
        border-left: 0
    }
    .tabs__discrete-tab__container {
        padding: 0 6px 0 16px
    }
    .tabs {
        width: 100%;
        overflow: auto
    }
    .tabs__discrete-tab, .tabs__tab {
        border-bottom: 2px solid transparent;
        color: #222;
        font-size: 14px;
        font-weight: 500;
        margin-right: 20px;
        padding: 8px 0;
        text-decoration: none;
        float: left;
        -webkit-touch-callout: none;
        touch-action: none;
        user-select: none
    }
    .tabs__discrete-tab {
        transition: border-color linear .2s
    }
    .tabs__tab.o__selected {
        border-bottom-color: #286efa
    }
    .tabs__discrete-tab:hover {
        opacity: 1
    }
    .tabs__discrete-tab.o__selected {
        pointer-events: none
    }
    .tabs__discrete-tab.o__selected.o__focused {
        color: #286efa;
        border-color: #286efa;
        pointer-events: none
    }
    .tabs__discrete-tab.o__selected.o__unfocused {
        pointer-events: auto
    }
    .tabs__discrete-tab.o__selected.o__unfocused:hover {
        color: #286efa;
        border-color: #286efa
    }
    .tabs__discrete-tab.o__static {
        transition: none
    }
    .tabs__tab__counter {
        color: #737376;
        font-size: 13px;
        font-weight: 400
    }
    .tabs__discrete-tab.o__selected, .tabs__discrete-tab.o__selected .tabs__tab__counter, .tabs__discrete-tab.o__unfocused.o__selected, .tabs__discrete-tab.o__unfocused.o__selected .tabs__tab__counter, .tabs__discrete-tab:hover, .tabs__discrete-tab:hover .tabs__tab__counter, .tabs__tab.o__selected, .tabs__tab.o__selected .tabs__tab__counter, .tabs__tab:hover, .tabs__tab:hover .tabs__tab__counter {
        color: #286efa
    }
    .tabs__discrete-tab:hover, .tabs__tab:hover {
        border-bottom-color: transparent
    }
    .tabs__discrete-tab.o__selected, .tabs__discrete-tab.o__unfocused.o__selected {
        border-bottom-color: #286efa
    }
    .nothingness__visual {
        color: #737376
    }
    .nothingness__description {
        padding-top: 4px
    }
    .filter__builder-associated-field {
        padding: 2px 0 2px 19px
    }
    .banner {
        padding: 10px 15px;
        border-radius: 4px;
        display: block;
        font-weight: 500
    }
    .banner.o__floating {
        box-shadow: 0 4px 14px 0 rgba(0, 0, 0, .2)
    }
    .banner__hide-link {
        margin-left: 20px;
        cursor: pointer
    }
    .banner.o__confirmation, .banner.o__loading {
        color: #0f8a40;
        background-color: #d7efdc
    }
    .banner.o__warning {
        color: #6f5502;
        fill: #6f5502!important;
        background-color: #feedaf
    }
    .banner.o__error {
        color: #b41d34;
        fill: #b41d34!important;
        background-color: #fed9db
    }
    .banner.o__help {
        color: #737376;
        fill: #737376!important;
        background-color: #ebebeb
    }
    .banner.o__floating.o__confirmation, .banner.o__floating.o__loading {
        color: #fff;
        background-color: #1bb157
    }
    .banner.o__floating.o__warning {
        background-color: #fbc916
    }
    .banner.o__floating.o__error {
        color: #fff;
        background-color: #fd3a57
    }
    .banner__loading-indicator-wrapper {
        padding-right: 1px
    }
    .lock__overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(255, 255, 255, .9);
        z-index: 1001;
        overflow: hidden
    }
    .saved-replies__list__item {
        padding: 15px 20px;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none
    }
    .saved-replies__list__item.o__active, .saved-replies__list__item:hover {
        background-color: #f8fbfc
    }
    .saved-replies__list__group-header {
        background-color: #ebebeb;
        padding: 2px 20px;
        border-bottom: 1px solid rgba(0, 0, 0, .2)
    }
    .loading__indicator {
        vertical-align: middle;
        -webkit-animation-name: reveal_loading_indicator;
        animation-name: reveal_loading_indicator;
        -webkit-animation-duration: .2s;
        animation-duration: .2s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1
    }
    .nav__counter-text, .nav__link, .quick-action {
        vertical-align: bottom
    }
    .loading__indicator.o__tiny {
        width: 15px;
        height: 15px;
        display: inline-block
    }
    .loading__indicator.o__tiny.o__inline {
        margin: 0 7px 0 0
    }
    .loading__indicator.o__small {
        width: 20px;
        height: 20px;
        margin: 0 auto
    }
    .loading__indicator.o__large {
        width: 24px;
        height: 24px
    }
    .loading__indicator__graphic {
        width: 100%;
        height: 100%;
        -webkit-animation-name: rotate;
        animation-name: rotate;
        -webkit-animation-duration: 550ms;
        animation-duration: 550ms;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite
    }
    .quick-action {
        height: 32px;
        width: 32px;
        box-sizing: border-box;
        border: 1px solid transparent;
        border-radius: 2px;
        padding: 5px 0;
        color: #737376;
        display: inline-block;
        cursor: pointer;
        text-decoration: none
    }
    .quick-action:active, .quick-action:hover {
        color: #286efa;
        opacity: 1
    }
    .quick-action.o__depressed, .quick-action:active, .quick-action:focus {
        color: #222;
        opacity: 1
    }
    .quick-action.o__note, .quick-action.o__note.o__depressed, .quick-action.o__note:active, .quick-action.o__note:hover {
        color: #ada8a1
    }
    .quick-action.o__disabled {
        opacity: .5;
        pointer-events: none
    }
    .quick-action.o__destructive:hover path {
        fill: #fd3a57!important
    }
    .nav__secondary {
        background-color: #286efa;
        height: 50px;
        padding: 10px 20px 10px 10px;
        box-sizing: border-box
    }
    .nav__secondary__separator {
        background-color: #0549d1;
        border-radius: 100%;
        background-clip: padding-box;
        width: 5px;
        height: 5px;
        margin: 12px 10px 13px;
        float: left
    }
    .nav__secondary__spacer {
        width: 10px
    }
    .nav__secondary__input {
        height: 29px;
        margin: 1px 0 0;
        border: 0;
        padding: 6px 0 3px 39px;
        background: url(https://static.intercomassets.com/assets/search-box-icon-2x-51fa206b3d999e9dbacfd1926529f8e7.png) top left no-repeat #ebebeb;
        background-size: 29px 23px;
        font-size: 13px;
        border-radius: 15px;
        box-shadow: 0 -1px 0 0 #0f6095;
        box-sizing: border-box
    }
    .interface-icon.o__social.o__by-text, .interface-icon.o__standard.o__by-text, .interface-icon.o__tiny.o__by-text {
        margin-right: 3px
    }
    .nav__secondary__input::-webkit-input-placeholder {
        color: #737376
    }
    .nav__secondary__input::-moz-placeholder {
        color: #737376;
        opacity: 1
    }
    .nav__secondary__input:-ms-input-placeholder {
        color: #737376
    }
    .nav__secondary__input:focus {
        outline: 0
    }
    .nav__secondary__input.o__segment-search {
        width: 207px;
        float: right
    }
    .nav__secondary__input.o__message-list-search {
        width: 340px
    }
    .nav__secondary__input.o__message-list-search-with-close {
        width: 315px
    }
    .nav__secondary__input.o__message-list-search, .nav__secondary__input.o__message-list-search-with-close {
        transition: width .3s ease-in-out
    }
    .nav__link {
        color: #fff;
        font-weight: 500;
        padding: 5px 11px;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        float: left
    }
    .nav__link.o__selected {
        background-color: #0549d1;
        border-radius: 15px
    }
    .nav__link.o__deselecting {
        background-color: transparent;
        border-radius: 0;
        padding-left: 0;
        padding-right: 0
    }
    .nav__counter-text {
        font-size: 11px;
        opacity: .7
    }
    .nav__link.o__secondary:hover, a.nav__link:hover {
        opacity: .8
    }
    .emoji__wrapper {
        display: block;
        padding: .1016em 0 0;
        line-height: 1em
    }
    .illustrative-icon, .interface-icon.o__tiny, .toggle__on-off {
        display: inline-block;
        vertical-align: bottom
    }
    .interface-icon circle, .interface-icon ellipse, .interface-icon line, .interface-icon path, .interface-icon polygon, .interface-icon polyline, .interface-icon rect {
        fill: currentColor!important
    }
    .interface-icon.o__palette-blue-dark circle, .interface-icon.o__palette-blue-dark ellipse, .interface-icon.o__palette-blue-dark line, .interface-icon.o__palette-blue-dark path, .interface-icon.o__palette-blue-dark polygon, .interface-icon.o__palette-blue-dark polyline, .interface-icon.o__palette-blue-dark rect {
        fill: #0549d1!important
    }
    .interface-icon.o__palette-blue circle, .interface-icon.o__palette-blue ellipse, .interface-icon.o__palette-blue line, .interface-icon.o__palette-blue path, .interface-icon.o__palette-blue polygon, .interface-icon.o__palette-blue polyline, .interface-icon.o__palette-blue rect {
        fill: #286efa!important
    }
    .interface-icon.o__palette-blue-light circle, .interface-icon.o__palette-blue-light ellipse, .interface-icon.o__palette-blue-light line, .interface-icon.o__palette-blue-light path, .interface-icon.o__palette-blue-light polygon, .interface-icon.o__palette-blue-light polyline, .interface-icon.o__palette-blue-light rect {
        fill: #e8f0ff!important
    }
    .interface-icon.o__palette-black circle, .interface-icon.o__palette-black ellipse, .interface-icon.o__palette-black line, .interface-icon.o__palette-black path, .interface-icon.o__palette-black polygon, .interface-icon.o__palette-black polyline, .interface-icon.o__palette-black rect {
        fill: #222!important
    }
    .interface-icon.o__palette-gray circle, .interface-icon.o__palette-gray ellipse, .interface-icon.o__palette-gray line, .interface-icon.o__palette-gray path, .interface-icon.o__palette-gray polygon, .interface-icon.o__palette-gray polyline, .interface-icon.o__palette-gray rect {
        fill: #737376!important
    }
    .interface-icon.o__palette-gray-light circle, .interface-icon.o__palette-gray-light ellipse, .interface-icon.o__palette-gray-light line, .interface-icon.o__palette-gray-light path, .interface-icon.o__palette-gray-light polygon, .interface-icon.o__palette-gray-light polyline, .interface-icon.o__palette-gray-light rect {
        fill: #ebebeb!important
    }
    .interface-icon.o__palette-gray-lightest circle, .interface-icon.o__palette-gray-lightest ellipse, .interface-icon.o__palette-gray-lightest line, .interface-icon.o__palette-gray-lightest path, .interface-icon.o__palette-gray-lightest polygon, .interface-icon.o__palette-gray-lightest polyline, .interface-icon.o__palette-gray-lightest rect {
        fill: #f6f6f6!important
    }
    .interface-icon.o__palette-green-dark circle, .interface-icon.o__palette-green-dark ellipse, .interface-icon.o__palette-green-dark line, .interface-icon.o__palette-green-dark path, .interface-icon.o__palette-green-dark polygon, .interface-icon.o__palette-green-dark polyline, .interface-icon.o__palette-green-dark rect {
        fill: #0f8a40!important
    }
    .interface-icon.o__palette-green circle, .interface-icon.o__palette-green ellipse, .interface-icon.o__palette-green line, .interface-icon.o__palette-green path, .interface-icon.o__palette-green polygon, .interface-icon.o__palette-green polyline, .interface-icon.o__palette-green rect {
        fill: #1bb157!important
    }
    .interface-icon.o__palette-green-light circle, .interface-icon.o__palette-green-light ellipse, .interface-icon.o__palette-green-light line, .interface-icon.o__palette-green-light path, .interface-icon.o__palette-green-light polygon, .interface-icon.o__palette-green-light polyline, .interface-icon.o__palette-green-light rect {
        fill: #d7efdc!important
    }
    .interface-icon.o__palette-red-dark circle, .interface-icon.o__palette-red-dark ellipse, .interface-icon.o__palette-red-dark line, .interface-icon.o__palette-red-dark path, .interface-icon.o__palette-red-dark polygon, .interface-icon.o__palette-red-dark polyline, .interface-icon.o__palette-red-dark rect {
        fill: #b41d34!important
    }
    .interface-icon.o__palette-red circle, .interface-icon.o__palette-red ellipse, .interface-icon.o__palette-red line, .interface-icon.o__palette-red path, .interface-icon.o__palette-red polygon, .interface-icon.o__palette-red polyline, .interface-icon.o__palette-red rect {
        fill: #fd3a57!important
    }
    .interface-icon.o__palette-red-light circle, .interface-icon.o__palette-red-light ellipse, .interface-icon.o__palette-red-light line, .interface-icon.o__palette-red-light path, .interface-icon.o__palette-red-light polygon, .interface-icon.o__palette-red-light polyline, .interface-icon.o__palette-red-light rect {
        fill: #fed9db!important
    }
    .interface-icon.o__palette-yellow-dark circle, .interface-icon.o__palette-yellow-dark ellipse, .interface-icon.o__palette-yellow-dark line, .interface-icon.o__palette-yellow-dark path, .interface-icon.o__palette-yellow-dark polygon, .interface-icon.o__palette-yellow-dark polyline, .interface-icon.o__palette-yellow-dark rect {
        fill: #6f5502!important
    }
    .interface-icon.o__palette-yellow circle, .interface-icon.o__palette-yellow ellipse, .interface-icon.o__palette-yellow line, .interface-icon.o__palette-yellow path, .interface-icon.o__palette-yellow polygon, .interface-icon.o__palette-yellow polyline, .interface-icon.o__palette-yellow rect {
        fill: #fbc916!important
    }
    .interface-icon.o__palette-yellow-light circle, .interface-icon.o__palette-yellow-light ellipse, .interface-icon.o__palette-yellow-light line, .interface-icon.o__palette-yellow-light path, .interface-icon.o__palette-yellow-light polygon, .interface-icon.o__palette-yellow-light polyline, .interface-icon.o__palette-yellow-light rect {
        fill: #feedaf!important
    }
    .interface-icon.o__palette-purple circle, .interface-icon.o__palette-purple ellipse, .interface-icon.o__palette-purple line, .interface-icon.o__palette-purple path, .interface-icon.o__palette-purple polygon, .interface-icon.o__palette-purple polyline, .interface-icon.o__palette-purple rect {
        fill: #c701f1!important
    }
    .interface-icon.o__palette-white circle, .interface-icon.o__palette-white ellipse, .interface-icon.o__palette-white line, .interface-icon.o__palette-white path, .interface-icon.o__palette-white polygon, .interface-icon.o__palette-white polyline, .interface-icon.o__palette-white rect {
        fill: #fff!important
    }
    .interface-icon.o__palette-border-shadow-dark circle, .interface-icon.o__palette-border-shadow-dark ellipse, .interface-icon.o__palette-border-shadow-dark line, .interface-icon.o__palette-border-shadow-dark path, .interface-icon.o__palette-border-shadow-dark polygon, .interface-icon.o__palette-border-shadow-dark polyline, .interface-icon.o__palette-border-shadow-dark rect {
        fill: rgba(0, 0, 0, .2)!important
    }
    .interface-icon.o__palette-border-shadow circle, .interface-icon.o__palette-border-shadow ellipse, .interface-icon.o__palette-border-shadow line, .interface-icon.o__palette-border-shadow path, .interface-icon.o__palette-border-shadow polygon, .interface-icon.o__palette-border-shadow polyline, .interface-icon.o__palette-border-shadow rect {
        fill: rgba(0, 0, 0, .1)!important
    }
    .interface-icon.o__palette-border-shadow-light circle, .interface-icon.o__palette-border-shadow-light ellipse, .interface-icon.o__palette-border-shadow-light line, .interface-icon.o__palette-border-shadow-light path, .interface-icon.o__palette-border-shadow-light polygon, .interface-icon.o__palette-border-shadow-light polyline, .interface-icon.o__palette-border-shadow-light rect {
        fill: rgba(0, 0, 0, .05)!important
    }
    .interface-icon.o__palette-transparent circle, .interface-icon.o__palette-transparent ellipse, .interface-icon.o__palette-transparent line, .interface-icon.o__palette-transparent path, .interface-icon.o__palette-transparent polygon, .interface-icon.o__palette-transparent polyline, .interface-icon.o__palette-transparent rect {
        fill: transparent!important
    }
    .interface-icon.o__social, .interface-icon.o__standard {
        width: 16px;
        height: 16px;
        display: inline-block;
        vertical-align: bottom;
        margin-bottom: 2px
    }
    .btn .interface-icon.o__social, .btn .interface-icon.o__standard, .f__custom-select__box .interface-icon.o__social, .f__custom-select__box .interface-icon.o__standard, .pill .interface-icon.o__social, .pill .interface-icon.o__standard, .t__btn-label .interface-icon.o__social, .t__btn-label .interface-icon.o__standard, .t__group-label .interface-icon.o__social, .t__group-label .interface-icon.o__standard, .t__h4 .interface-icon.o__social, .t__h4 .interface-icon.o__standard {
        margin-bottom: 1px
    }
    .interface-icon.o__standard.o__24 {
        height: 24px;
        width: 24px;
        margin-bottom: 2px
    }
    .interface-icon.o__tiny {
        width: 12px;
        height: 12px;
        margin-bottom: 4px
    }
    .illustrative-icon, .illustrative-icon svg {
        width: 40px;
        height: 40px
    }
    .btn .interface-icon.o__tiny, .f__custom-select__box .interface-icon.o__tiny, .pill .interface-icon.o__tiny, .t__btn-label .interface-icon.o__tiny, .t__group-label .interface-icon.o__tiny, .t__h4 .interface-icon.o__tiny {
        margin-bottom: 3px
    }
    .illustrative-icon circle, .illustrative-icon ellipse, .illustrative-icon line, .illustrative-icon path, .illustrative-icon polygon, .illustrative-icon polyline, .illustrative-icon rect {
        fill: #286efa!important
    }
    .illustrative-icon.o__empty circle, .illustrative-icon.o__empty ellipse, .illustrative-icon.o__empty line, .illustrative-icon.o__empty path, .illustrative-icon.o__empty polygon, .illustrative-icon.o__empty polyline, .illustrative-icon.o__empty rect {
        fill: #737376!important
    }
    .illustrative-icon.o__small, .illustrative-icon.o__small svg {
        width: 20px;
        height: 20px
    }
    .toggle__on-off {
        width: 55px;
        height: 24px;
        border-radius: 3px;
        padding: 0;
        border: 0;
        cursor: pointer;
        transition: background-color .25s ease;
        background-color: #737376
    }
    .toggle__on-off.o__disabled {
        pointer-events: none;
        opacity: .5
    }
    .toggle__on-off.o__on {
        background-color: #1bb157
    }
    .toggle__on-off__switch {
        position: absolute;
        top: 3px;
        left: 33px;
        width: 18px;
        height: 18px;
        border-radius: 2px;
        background-color: #fff;
        transition: left .25s ease
    }
    .toggle__on-off__switch.o__off {
        left: 3px
    }
    .toggle__on-off__label {
        color: #fff;
        opacity: 0;
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
        min-width: 28px;
        transition: opacity .25s ease;
        position: absolute;
        top: 2px;
        user-select: none
    }
    .toggle__on-off__label.o__on {
        left: 2px
    }
    .toggle__on-off__label.o__off {
        right: 2px
    }
    .toggle__on-off__label.o__active {
        opacity: 1
    }
    .empty-state {
        padding: 40px
    }
    .empty-state__title {
        margin: 20px 0 0;
        color: #737376
    }
    .empty-state__description {
        margin: 8px 0 0;
        color: #737376
    }
    .empty-state__button {
        margin: 20px 0 0
    }
    .main, .main__content, .main__toolbar {
        box-sizing: border-box
    }
    .main {
        background-color: #f6f6f6
    }
    .main__toolbar {
        height: 63px;
        padding: 0 20px;
        border-bottom: 1px solid #ebebeb
    }
    .main__toolbar__description {
        padding-right: 30px
    }
    .main__content {
        padding: 20px 30px
    }
    .main__content-well.o__under-construction {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAGCAIAAAAOtlpdAAAANElEQVQoz2P4etGEEnRxi0lHFdXQ8slQYxkGoZsochbt3ES+s2jqJjKdRWs3keMsOrgJiAB4ItlirqqJGgAAAABJRU5ErkJggg==)!important;
        background-repeat: repeat-x!important;
        background-size: 25px 3px!important;
        background-position: 19px 0!important
    }
    .sidebar, .sidebar__content, .sidebar__content__section, .sidebar__toolbar {
        box-sizing: border-box
    }
    .sidebar {
        width: 300px;
        background-color: #fff;
        border-right: 1px solid #ebebeb
    }
    .sidebar__toolbar {
        border-bottom: 1px solid #ebebeb;
        padding: 15px 20px 0;
        min-height: 63px
    }
    .sidebar__toolbar.o__uses-subtle-buttons {
        padding-left: 10px;
        padding-right: 10px
    }
    .sidebar__content {
        padding: 20px
    }
    .sidebar__content__section {
        padding-top: 20px
    }
    .sidebar__content__section:first-child {
        padding-top: 0
    }
    .sidebar__content__section__title {
        padding: 0 0 5px
    }
    .sidebar__content__section__action {
        padding: 10px 10px 0
    }
    .sidebar__content__menu-item {
        display: block;
        padding: 6px 10px;
        border-radius: 3px;
        color: #737376;
        text-decoration: none
    }
    .sidebar__content__menu-item:hover {
        background-color: rgba(232, 240, 255, .15);
        color: #222
    }
    .sidebar__content__menu-item.o__active {
        font-weight: 500;
        color: #286efa;
        background-color: rgba(232, 240, 255, .25)
    }
    .sidebar__content__menu-item__count, .table__header__sortable-column__toggle.o__for-sort-column, .table__header__sortable-column__toggle.o__for-sort-column:hover, .table__header__sortable-column__toggle:hover {
        color: #737376
    }
    .sidebar__segment-view__container, .table__body__wrapper {
        position: relative;
        background-color: #fff;
        box-sizing: border-box
    }
    .sidebar__segment-view__container {
        width: 271px;
        height: auto;
        border-right: 1px solid rgba(0, 0, 0, .2)
    }
    .table {
        box-sizing: border-box
    }
    .table thead tr {
        height: initial
    }
    .table tr {
        height: 50px
    }
    .table__header {
        display: table
    }
    .table__body__wrapper {
        display: block;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch
    }
    .table__cell__jammer, .table__cell__measure__element {
        display: inline-block;
        vertical-align: bottom
    }
    .table__cell {
        white-space: nowrap;
        text-align: left;
        padding: 13px 0 12px
    }
    .table__cell__measure__element {
        box-sizing: border-box;
        padding: 0 15px
    }
    .table__body {
        display: table
    }
    .table__wrapper {
        width: 100%;
        overflow: hidden
    }
    .table__loader {
        position: absolute;
        bottom: 1px;
        left: 1px;
        right: 1px;
        pointer-events: none
    }
    .table__loader:before {
        content: ' ';
        height: 45px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #fff 100%);
        display: block
    }
    .filter-block.o__full-description, .filter-block__container.o__full-description {
        display: inline-block
    }
    .table__loader__bottom {
        text-align: center;
        padding: 10px;
        background-color: #fff;
        pointer-events: all
    }
    .table__loader.o__standard .table__loader__bottom {
        border-radius: 0 0 2px 2px
    }
    .table__scrollbar-measure {
        width: 100px;
        height: 100px;
        overflow: scroll;
        position: absolute;
        top: -9999px
    }
    .table__header__sortable-column__toggle {
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none
    }
    .table__header__sortable-column__toggle:hover .table__header__sortable-column__label {
        text-decoration: underline
    }
    .table.o__inline .table__body__wrapper {
        z-index: 1
    }
    .table.o__inline .table__header {
        z-index: 2
    }
    .table.o__inline .table__header::after {
        content: ' ';
        pointer-events: none;
        position: absolute;
        left: 0;
        right: 0;
        height: 5px;
        opacity: 0;
        transition: opacity .3s;
        background: linear-gradient(to bottom, rgba(0, 0, 0, .07) 0, rgba(0, 0, 0, 0) 100%)
    }
    .table.o__inline.o__can-scroll-up .table__header::after {
        opacity: 1
    }
    .table.o__inline tr .table__cell {
        border-bottom: 1px solid rgba(0, 0, 0, .1)
    }
    .table.o__standard .table__header {
        border-left: 1px solid transparent;
        border-right: 1px solid transparent
    }
    .table.o__standard .table__body__wrapper {
        border: 1px solid;
        border-color: rgba(0, 0, 0, .2);
        border-radius: 3px;
        transform: translateZ(0)
    }
    .table.o__standard tr+tr .table__cell {
        border-top: 1px solid rgba(0, 0, 0, .1)
    }
    .table__panel {
        opacity: 0
    }
    .table__panel.o__visible {
        opacity: 1
    }
    .filter-block__container.o__one-line {
        display: inline-block;
        max-width: 400px
    }
    .filter-block {
        background-color: #ebebeb;
        border: 1px solid transparent;
        color: #222;
        border-radius: 4px
    }
    .filter-block__details.o__full-description, .filter-block__name.o__full-description {
        display: inline
    }
    .filter-block__details, .filter-block__details__specific-error, .filter-block__name {
        color: #222
    }
    .filter-block__content {
        padding: 6px 30px 7px 12px
    }
    .filter-block__content.o__one-line {
        padding: 8px 12px
    }
    .filter-block__name.o__one-line {
        flex: 1 0 auto;
        max-width: 100%;
        line-height: 20px
    }
    .filter-block__details {
        padding-top: 2px;
        font-size: 14px;
        text-overflow: clip
    }
    .filter-block__details.o__one-line {
        padding-top: 0
    }
    .filter-block__delete {
        position: absolute;
        display: none;
        right: 8px;
        top: 5px;
        cursor: pointer;
        padding-left: 6px;
        background-color: #ebebeb;
        color: #737376
    }
    .filter-block.o__deletable.o__open .filter-block__delete, .filter-block.o__deletable:hover .filter-block__delete {
        display: block
    }
    .filter-block.o__deletable.o__open .filter-block__details::after, .filter-block.o__deletable:hover .filter-block__details::after {
        background: linear-gradient(to right, rgba(235, 235, 235, 0) 90%, #ebebeb 100%);
        content: '';
        width: calc(100% - 29px);
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none
    }
    .filter-block__delete.o__one-line {
        top: 8px
    }
    .filter-block.o__clickable {
        cursor: pointer
    }
    .filter-block.o__clickable:hover, .filter-block.o__open, .filter-block.o__open:hover {
        background-color: #e8f0ff
    }
    .filter-block.o__clickable:hover .filter-block__details, .filter-block.o__clickable:hover .filter-block__name, .filter-block.o__open .filter-block__details, .filter-block.o__open .filter-block__name, .filter-block.o__open:hover .filter-block__details, .filter-block.o__open:hover .filter-block__name {
        color: #286efa
    }
    .filter-block.o__clickable:hover .filter-block__details::after, .filter-block.o__open .filter-block__details::after, .filter-block.o__open:hover .filter-block__details::after {
        background: linear-gradient(to right, rgba(232, 240, 255, 0) 90%, #e8f0ff 100%)
    }
    .filter-block.o__clickable .filter-block__delete {
        background-color: #e8f0ff;
        color: #286efa
    }
    .filter-block.o__open, .filter-block.o__open:hover {
        border-color: #286efa
    }
    .filter-block.o__action, .filter-block.o__action .filter-block__delete {
        background-color: #ebf7ed
    }
    .filter-block.o__action .filter-block__delete {
        color: #1bb157
    }
    .filter-block.o__action.o__deletable .filter-block__details::after {
        background: linear-gradient(to right, rgba(235, 247, 237, 0) 90%, #ebf7ed 100%)
    }
    .filter-block.o__action.o__clickable:hover, .filter-block.o__action.o__open, .filter-block.o__action.o__open:hover {
        background-color: #d7efdc
    }
    .filter-block.o__action.o__clickable:hover .filter-block__details, .filter-block.o__action.o__clickable:hover .filter-block__details__specific-error, .filter-block.o__action.o__clickable:hover .filter-block__name, .filter-block.o__action.o__open .filter-block__details, .filter-block.o__action.o__open .filter-block__details__specific-error, .filter-block.o__action.o__open .filter-block__name, .filter-block.o__action.o__open:hover .filter-block__details, .filter-block.o__action.o__open:hover .filter-block__details__specific-error, .filter-block.o__action.o__open:hover .filter-block__name {
        color: #0f8a40
    }
    .filter-block.o__action.o__clickable:hover .filter-block__delete, .filter-block.o__action.o__open .filter-block__delete, .filter-block.o__action.o__open:hover .filter-block__delete {
        background-color: #d7efdc;
        color: #1bb157
    }
    .filter-block.o__action.o__clickable:hover .filter-block__details::after, .filter-block.o__action.o__open .filter-block__details::after, .filter-block.o__action.o__open:hover .filter-block__details::after {
        background: linear-gradient(to right, rgba(215, 239, 220, 0) 90%, #d7efdc 100%)
    }
    .filter-block.o__action.o__open, .filter-block.o__action.o__open:hover {
        border-color: #1bb157
    }
    .filter-block.o__error, .filter-block.o__error .filter-block__delete {
        background-color: #fed9db;
        color: #b41d34
    }
    .filter-block.o__error, .filter-block.o__error .filter-block__details, .filter-block.o__error .filter-block__details__specific-error, .filter-block.o__error .filter-block__name {
        color: #fd3a57
    }
    .filter-block.o__error.o__clickable:hover, .filter-block.o__error.o__open, .filter-block.o__error.o__open:hover, .filter-block.o__error:hover {
        background-color: #fed9db
    }
    .filter-block.o__error.o__clickable:hover .filter-block__details, .filter-block.o__error.o__clickable:hover .filter-block__details__specific-error, .filter-block.o__error.o__clickable:hover .filter-block__name, .filter-block.o__error.o__open .filter-block__details, .filter-block.o__error.o__open .filter-block__details__specific-error, .filter-block.o__error.o__open .filter-block__name, .filter-block.o__error.o__open:hover .filter-block__details, .filter-block.o__error.o__open:hover .filter-block__details__specific-error, .filter-block.o__error.o__open:hover .filter-block__name, .filter-block.o__error:hover .filter-block__details, .filter-block.o__error:hover .filter-block__details__specific-error, .filter-block.o__error:hover .filter-block__name {
        color: #b41d34
    }
    .filter-block.o__error.o__clickable:hover .filter-block__delete, .filter-block.o__error.o__open .filter-block__delete, .filter-block.o__error.o__open:hover .filter-block__delete, .filter-block.o__error:hover .filter-block__delete {
        background-color: #fed9db;
        color: #b41d34
    }
    .filter-block.o__error.o__clickable:hover .filter-block__details::after, .filter-block.o__error.o__open .filter-block__details::after, .filter-block.o__error.o__open:hover .filter-block__details::after, .filter-block.o__error:hover .filter-block__details::after {
        background: linear-gradient(to right, rgba(254, 217, 219, 0) 90%, #fed9db 100%)
    }
    .filter-block.o__error.o__open, .filter-block.o__error.o__open.o__clickable, .filter-block.o__error.o__open:hover {
        border-color: #fd3a57
    }
    .if-this-then-that, .if-this-then-that__caret, .if-this-then-that__main {
        box-sizing: border-box
    }
    .if-this-then-that {
        min-width: 63px;
        height: 38px;
        display: inline-block;
        vertical-align: bottom
    }
    .if-this-then-that__main {
        width: 56px;
        height: 38px;
        border: 1px solid rgba(0, 0, 0, .1);
        border-right: 0;
        border-radius: 4px 0 0 4px;
        display: block;
        text-align: center;
        background-color: #fff;
        color: #737376;
        padding: 8px 0;
        font-size: 14px;
        font-weight: 500
    }
    .if-this-then-that__caret {
        margin-left: -1px
    }
    .if-this-then-that__caret__whiteout {
        fill: #fff
    }
    .if-this-then-that__caret__stroke {
        fill: rgba(0, 0, 0, .1)
    }
    .ds-new__attribute__option__line {
        padding: 0 0 6px
    }
    .ds-new__attribute__option__radio {
        width: 23px
    }
    .ds-new__attribute__option__details {
        box-sizing: border-box;
        padding: 0 0 13px 23px;
        min-width: 196px
    }
    .ds-new__attribute__option__label {
        white-space: nowrap
    }
    .ds-new__card {
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 4px;
        box-sizing: border-box;
        box-shadow: 0 0 0 transparent;
        transition: box-shadow linear 40ms, border-color linear .2s;
        position: relative
    }
    .ds-new__card.o__regular-padding, .ds-new__card__section.o__regular-padding {
        padding: 20px
    }
    .ds-new__card.o__compact-padding, .ds-new__card__section.o__compact-padding {
        padding: 12px
    }
    .ds-new__card.o__relaxed-padding, .ds-new__card__section.o__relaxed-padding {
        padding: 32px
    }
    .ds-new__card.o__interactive:hover {
        border-color: #286efa;
        box-shadow: 0 4px 14px 0 rgba(5, 73, 209, .1);
        cursor: pointer
    }
    .ds-new__datepicker__month-button {
        background-color: #fff;
        border: 0;
        cursor: pointer
    }
    .ds-new__datepicker__month-button:focus, .ds-new__datepicker__month-button:hover {
        color: #286efa;
        outline: 0
    }
    .ds-new__datepicker {
        max-width: 210px;
        width: 210px
    }
    .ds-new__datepicker .ember-power-calendar-week, .ds-new__datepicker .ember-power-calendar-weekdays {
        display: flex;
        justify-content: unset
    }
    .ds-new__datepicker .ember-power-calendar-weekday {
        color: #737376;
        display: inline-block;
        font-size: 13px;
        text-align: center;
        width: 30px
    }
    .ds-new__datepicker .ember-power-calendar-day {
        font-size: 14px;
        line-height: 20px;
        color: #222;
        background-color: #fff;
        border: 1px solid transparent;
        border-radius: 4px;
        box-sizing: border-box;
        flex: none;
        height: 30px;
        width: 30px;
        padding: 0
    }
    .ds-new__datepicker .ember-power-calendar-day.ember-power-calendar-day--interactive:enabled {
        cursor: pointer
    }
    .ds-new__datepicker .ember-power-calendar-day.ember-power-calendar-day--interactive:disabled {
        color: rgba(34, 34, 34, .5)
    }
    .ds-new__datepicker .ember-power-calendar-day.ember-power-calendar-day--interactive:enabled:focus, .ds-new__datepicker .ember-power-calendar-day.ember-power-calendar-day--interactive:enabled:hover {
        border-color: #286efa;
        color: #286efa;
        outline: 0
    }
    .ds-new__datepicker .ember-power-calendar-day.ember-power-calendar-day--selected, .ds-new__datepicker .ember-power-calendar-day.ember-power-calendar-day--selected:not([disabled]):hover, .ds-new__datepicker .ember-power-calendar-day.ember-power-calendar-day--today {
        color: #286efa;
        font-weight: 500
    }
    .ds-new__datepicker .ember-power-calendar-day.ember-power-calendar-day--selected {
        background-color: #e8f0ff;
        border-color: #286efa
    }
    .ds-new__datepicker .ember-power-calendar-week:first-child[data-missing-days='1'] {
        padding-left: 30px
    }
    .ds-new__datepicker .ember-power-calendar-week:first-child[data-missing-days='2'] {
        padding-left: 60px
    }
    .ds-new__datepicker .ember-power-calendar-week:first-child[data-missing-days='3'] {
        padding-left: 90px
    }
    .ds-new__datepicker .ember-power-calendar-week:first-child[data-missing-days='4'] {
        padding-left: 120px
    }
    .ds-new__datepicker .ember-power-calendar-week:first-child[data-missing-days='5'] {
        padding-left: 150px
    }
    .ds-new__datepicker .ember-power-calendar-week:first-child[data-missing-days='6'] {
        padding-left: 180px
    }
    .ds-new__dropdown, .ds-new__dropdown__block__heading, .ds-new__dropdown__block__item, .ds-new__dropdown__block__item__check, .ds-new__dropdown__block__item__object, .ds-new__dropdown__group {
        box-sizing: border-box
    }
    .ds-new__dropdown {
        max-width: 100%;
        overflow: auto;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 4px 14px 0 rgba(0, 0, 0, .2), 0 0 0 1px rgba(0, 0, 0, .05);
        border: 0;
        float: left
    }
    .ds-new__dropdown__wrapper {
        padding-top: 3px;
        padding-bottom: 3px
    }
    .ds-new__dropdown.o__has-filter-group-and-main-group {
        overflow: visible
    }
    .ds-new__modal__body.o__internal-scroll, .ds-new__table__scroll-container.o__scrolls-horizontally {
        overflow-y: auto
    }
    .ds-new__dropdown.o__fully-set-up {
        width: 100%
    }
    .ds-new__dropdown__group {
        border-top: 1px solid rgba(0, 0, 0, .1)
    }
    .ds-new__dropdown__group.o__includes-filter+.ds-new__dropdown__group, .ds-new__dropdown__group:first-child {
        border-top: 0
    }
    .ds-new__dropdown__group.o__main {
        overflow: auto
    }
    .ds-new__dropdown__group.o__standard {
        padding: 9px 0
    }
    .ds-new__dropdown__group__filter {
        margin: -1px -1px 0;
        position: relative
    }
    .ds-new__dropdown__group__filter__icon {
        padding: 9px 11px 8px;
        color: #737376
    }
    .ds-new__dropdown__group__filter__input {
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-size: 14px;
        line-height: 20px;
        height: 38px;
        padding: 8px 16px 8px 36px;
        margin: -37px 0 0;
        background-color: transparent;
        display: block;
        width: 100%;
        border: 1px solid transparent;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        border-radius: 3px 3px 0 0
    }
    .ds-new__dropdown__group__filter__input:hover {
        border-bottom: 1px solid rgba(0, 0, 0, .2)
    }
    .ds-new__dropdown__group__filter__input:focus {
        outline: 0;
        border: 1px solid #286efa
    }
    .ds-new__dropdown__group__filter__input::-webkit-input-placeholder {
        color: #737376
    }
    .ds-new__dropdown__group__filter__input::-moz-placeholder {
        color: #737376
    }
    .ds-new__dropdown__group__filter__input::-ms-input-placeholder {
        color: #737376
    }
    .ds-new__dropdown__block__item {
        cursor: pointer;
        font-weight: 500;
        padding: 6px 12px;
        color: #222
    }
    .ds-new__dropdown__block__item.o__destructive:focus {
        background-color: #fd3a57
    }
    .ds-new__dropdown__block__heading {
        cursor: default;
        padding: 16px 12px 6px
    }
    .ds-new__dropdown__block__heading.o__index-0 {
        padding-top: 6px
    }
    .ds-new__dropdown__block__item.o__destructive {
        color: #fd3a57
    }
    .ds-new__dropdown__block__item.o__disabled {
        opacity: .5
    }
    .ds-new__dropdown__block__item__object {
        text-overflow: ellipsis;
        cursor: pointer
    }
    .ds-new__dropdown__block__item__check {
        padding: 0 0 0 10px
    }
    .ds-new__dropdown__opener {
        display: inline-block;
        vertical-align: bottom;
        max-width: 100%
    }
    .ds-new__dropdown__opener.o__block {
        display: block
    }
    .ds-new__dropdown__no-results {
        height: 110px;
        color: #737376
    }
    .ds-new__dropdown__standard {
        flex-basis: auto!important
    }
    .ds-new__dropdown__block__item__text.o__open {
        color: #286efa;
        font-weight: 500
    }
    .ds-new__dropdown__block__item.o__selected {
        color: #286efa;
        background-color: #fff
    }
    .ds-new__dropdown__block__item.o__selected .f__custom-select__check, .ds-new__dropdown__block__item.o__selected .inbox__inbox-picker__link, .ds-new__dropdown__block__item.o__selected .submenu__sections__section__items__item__count {
        color: #286efa
    }
    .ds-new__dropdown__block__item.o__selected .educate__collection__dropdown__icon {
        stroke: #286efa
    }
    .ds-new__dropdown__block__item:focus .educate__collection__dropdown__icon, .ds-new__event__option:focus .educate__collection__dropdown__icon, .ds-new__event__option:hover:focus .educate__collection__dropdown__icon {
        stroke: #fff
    }
    .ds-new__dropdown__block__item.o__selected .interface-icon path {
        fill: #286efa!important
    }
    .ds-new__dropdown__block__item:focus .interface-icon path, .ds-new__event__option:focus .interface-icon path, .ds-new__event__option:hover:focus .interface-icon path {
        fill: #fff!important
    }
    .ds-new__dropdown__block__item:focus {
        background-color: #286efa;
        color: #fff;
        outline: 0
    }
    .ds-new__dropdown__block__item:focus .c__light, .ds-new__dropdown__block__item:focus .f__custom-select__check, .ds-new__dropdown__block__item:focus .inbox__inbox-picker__link, .ds-new__dropdown__block__item:focus .m__inbox__saved-reply-dropdown-name, .ds-new__dropdown__block__item:focus .m__inbox__saved-reply-dropdown-summary, .ds-new__dropdown__block__item:focus .nav__search__result__type, .ds-new__dropdown__block__item:focus .submenu__sections__section__items__item__count, .ds-new__dropdown__block__item:focus .t__light-text {
        color: #fff
    }
    .ds-new__event__options {
        margin-top: 2px
    }
    .ds-new__event__option {
        padding: 5px 20px 5px 10px;
        margin-left: 26px
    }
    .ds-new__event__option:hover {
        background-color: #fff;
        color: #222
    }
    .ds-new__event__option:focus, .ds-new__event__option:hover {
        border-radius: 3px;
        outline: 0
    }
    .ds-new__event__option:focus, .ds-new__event__option:hover:focus {
        background-color: #286efa;
        color: #fff
    }
    .ds-new__event__option:focus .c__light, .ds-new__event__option:focus .f__custom-select__check, .ds-new__event__option:focus .inbox__inbox-picker__link, .ds-new__event__option:focus .m__inbox__saved-reply-dropdown-name, .ds-new__event__option:focus .m__inbox__saved-reply-dropdown-summary, .ds-new__event__option:focus .nav__search__result__type, .ds-new__event__option:focus .submenu__sections__section__items__item__count, .ds-new__event__option:focus .t__light-text, .ds-new__event__option:hover:focus .c__light, .ds-new__event__option:hover:focus .f__custom-select__check, .ds-new__event__option:hover:focus .inbox__inbox-picker__link, .ds-new__event__option:hover:focus .m__inbox__saved-reply-dropdown-name, .ds-new__event__option:hover:focus .m__inbox__saved-reply-dropdown-summary, .ds-new__event__option:hover:focus .nav__search__result__type, .ds-new__event__option:hover:focus .submenu__sections__section__items__item__count, .ds-new__event__option:hover:focus .t__light-text {
        color: #fff
    }
    .ds-new__modal__blanket {
        background-color: rgba(34, 34, 34, .5);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow-y: auto;
        animation: opacity-animation .3s ease-in-out;
        display: flex;
        flex-direction: column
    }
    @keyframes opacity-animation {
        0% {
            opacity: 0
        }
        100% {
            opacity: 1
        }
    }
    .ds-new__modal__wrapper {
        position: relative;
        margin: auto;
        padding: 32px;
        animation: motion-animation .3s ease-in-out
    }
    .ds-new__modal__wrapper.o__internal-scroll {
        max-height: 100%;
        box-sizing: border-box
    }
    @keyframes motion-animation {
        0% {
            transform: translateY(16px)
        }
        100% {
            transform: translateY(0)
        }
    }
    .ds-new__modal__container {
        box-shadow: 0 0 0 1px rgba(0, 0, 0, .1), 0 4px 14px 0 rgba(0, 0, 0, .2);
        background-color: #fff;
        border-radius: 8px;
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column
    }
    .ds-new__modal__container.o__s {
        width: 440px
    }
    .ds-new__modal__container.o__m {
        width: 640px
    }
    .ds-new__modal__container.o__l {
        width: 800px
    }
    .ds-new__modal__container.o__xl {
        width: 1000px
    }
    .ds-new__modal__close__icon {
        position: absolute;
        top: 14px;
        right: 8px;
        background: 0 0;
        border: 0;
        padding: 0;
        height: 32px;
        width: 32px;
        color: #737376
    }
    .ds-new__modal__close__icon:focus, .ds-new__modal__close__icon:hover {
        color: #286efa;
        outline: 0
    }
    .ds-new__modal__header {
        padding: 16px 48px 16px 24px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: center
    }
    .ds-new__modal__header.o__bottom-bar {
        border-bottom: 1px solid rgba(0, 0, 0, .1)
    }
    .ds-new__modal__body {
        padding: 8px 24px 24px
    }
    .ds-new__modal__body.o__full-bleed {
        padding: 0;
        min-height: 40px
    }
    .ds-new__modal__footer {
        border-top: 1px solid rgba(0, 0, 0, .1);
        padding: 16px 16px 16px 24px;
        display: flex;
        align-items: center;
        flex-shrink: 0
    }
    .ds-new__modal__footer__button-list {
        margin-left: auto
    }
    .ds-new__table__container.o__scrolls-vertically {
        overflow-x: auto
    }
    .ds-new__table {
        width: 100%;
        line-height: 20px;
        font-size: 14px;
        color: #222
    }
    .ds-new__table a {
        text-decoration: none;
        cursor: pointer
    }
    .ds-new__table a:focus, .ds-new__table a:hover {
        color: #286efa;
        text-decoration: underline
    }
    .ds-new__table__head {
        color: #737376
    }
    .ds-new__table__row {
        height: 48px;
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .1)
    }
    .ds-new__table__column-header {
        position: sticky;
        top: 0;
        z-index: 10;
        background-color: #fff;
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .2);
        text-align: left;
        font-weight: 500;
        white-space: nowrap;
        vertical-align: bottom;
        user-select: none;
        outline: 0
    }
    .tour__step-editor__popper-container, .tour__step-editor__post-container {
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .14);
        position: fixed;
        z-index: 10;
        background: #fff
    }
    .ds-new__table:not(.o__loading) .ds-new__table__column-header.o__sortable {
        cursor: pointer
    }
    .ds-new__table:not(.o__loading) .ds-new__table__column-header.o__sortable.o__active-sort .ds-new__table__column__sort-icon.o__active-sort-direction {
        fill: #286efa
    }
    .ds-new__table:not(.o__loading) .ds-new__table__column-header.o__sortable:focus, .ds-new__table:not(.o__loading) .ds-new__table__column-header.o__sortable:hover {
        color: #286efa
    }
    .ds-new__table:not(.o__loading) .ds-new__table__column-header.o__sortable:focus .ds-new__table__column__sort-icon.o__desc, .ds-new__table:not(.o__loading) .ds-new__table__column-header.o__sortable:hover .ds-new__table__column__sort-icon.o__desc {
        fill: #737376
    }
    .ds-new__table:not(.o__loading) .ds-new__table__column-header.o__sortable.o__active-sort:focus .ds-new__table__column__sort-icon, .ds-new__table:not(.o__loading) .ds-new__table__column-header.o__sortable.o__active-sort:hover .ds-new__table__column__sort-icon, .ds-new__table:not(.o__loading) .ds-new__table__column-header.o__sortable:focus .ds-new__table__column__sort-icon.o__asc, .ds-new__table:not(.o__loading) .ds-new__table__column-header.o__sortable:hover .ds-new__table__column__sort-icon.o__asc {
        fill: #286efa
    }
    .ds-new__table:not(.o__loading) .ds-new__table__column-header.o__sortable.o__active-sort:focus .ds-new__table__column__sort-icon.o__active-sort-direction, .ds-new__table:not(.o__loading) .ds-new__table__column-header.o__sortable.o__active-sort:hover .ds-new__table__column__sort-icon.o__active-sort-direction {
        fill: #737376
    }
    .ds-new__table__column__label {
        white-space: nowrap;
        margin-bottom: 16px
    }
    .ds-new__table__column__label.o__can-wrap {
        white-space: normal
    }
    .ds-new__table__column__label, .ds-new__table__column__sort {
        display: inline-block
    }
    .ds-new__table__column__sort {
        margin-left: 4px
    }
    .ds-new__table__column__sort-icon {
        display: block;
        fill: rgba(115, 115, 118, .5)
    }
    .ds-new__table__column__sort-icon.o__desc {
        transform: translateY(1px)
    }
    .ds-new__table__column__sort-icon.o__asc {
        transform: translateY(-1px)
    }
    .ds-new__table__cell {
        outline: 0
    }
    .ds-new__table__cell-shim {
        position: relative;
        padding-top: 12px;
        padding-bottom: 12px
    }
    .ds-new__table__cell-shim, .ds-new__table__column__label {
        margin-right: 40px
    }
    .ds-new__table__cell:last-child .ds-new__table__cell-shim, .ds-new__table__column-header:last-child .ds-new__table__column__label {
        margin-right: 16px
    }
    .ds-new__table__cell.o__skeleton .ds-new__table__cell-shim:after, .ds-new__table__cell.o__skeleton .ds-new__table__cell-shim:before {
        content: '';
        display: inline-block;
        background-color: #ebebeb;
        position: absolute;
        top: 50%;
        transform: translateY(-50%)
    }
    .ds-new__table__cell.o__skeleton.o__text .ds-new__table__cell-shim:before {
        height: 8px;
        width: 100%;
        max-width: 112px
    }
    .ds-new__table__cell.o__skeleton.o__number .ds-new__table__cell-shim:before {
        height: 8px;
        width: 32px;
        right: 0
    }
    .ds-new__table__cell.o__skeleton.o__multiline .ds-new__table__cell-shim {
        height: 32px
    }
    .ds-new__table__cell.o__skeleton.o__multiline .ds-new__table__cell-shim:before {
        height: 8px;
        width: 100%;
        max-width: 112px;
        top: 12px;
        transform: none
    }
    .ds-new__table__cell.o__skeleton.o__multiline .ds-new__table__cell-shim:after {
        height: 8px;
        width: 60%;
        max-width: 64px;
        top: 36px;
        transform: none
    }
    .ds-new__table__cell.o__skeleton.o__avatar .ds-new__table__cell-shim:before, .ds-new__table__cell.o__skeleton.o__avatar-with-text .ds-new__table__cell-shim:before {
        height: 24px;
        width: 24px;
        border-radius: 50%
    }
    .ds-new__table__cell.o__skeleton.o__avatar-with-text .ds-new__table__cell-shim:after {
        height: 8px;
        max-width: 112px;
        width: calc(100% - 32px);
        left: 32px
    }
    .ds-new__table__cell.o__skeleton.o__stamp .ds-new__table__cell-shim:before {
        height: 24px;
        width: 48px;
        border-radius: 4px
    }
    .ds-new__table__cell.o__skeleton.o__stamp .ds-new__table__cell-shim:after {
        height: 4px;
        width: 32px;
        left: 8px;
        background-color: #fff
    }
    .ds-new__table__action-buttons {
        display: none;
        position: absolute;
        background: linear-gradient(to right, transparent, #fff 15%);
        right: 0;
        padding-left: 36px;
        padding-top: 4px;
        padding-bottom: 4px;
        top: 50%;
        transform: translateY(-50%);
        white-space: nowrap;
        box-sizing: border-box;
        max-width: 100%;
        overflow-y: scroll;
        -ms-overflow-style: none
    }
    .page, .radio-button-group, .tab-control, .tab-control__tab {
        position: relative
    }
    .u__center-item, .u__center-item-vertically {
        top: 50%!important;
        position: absolute!important
    }
    .ds-new__table__cell.o__active .ds-new__table__action-buttons, .ds-new__table__cell:focus .ds-new__table__action-buttons, .ds-new__table__cell:focus-within .ds-new__table__action-buttons, .ds-new__table__row:hover .ds-new__table__action-buttons {
        display: block
    }
    .ds-new__table__cell.o__number, .ds-new__table__column-header.o__number {
        text-align: right
    }
    .ds-new__table__column-header.o__number .ds-new__table__column__sort {
        margin-right: -16px
    }
    .link__opaque, .link__opaque:active, .link__opaque:hover {
        opacity: 1
    }
    .radio-button-group {
        font-size: 0
    }
    .radio-button-group__button {
        border-radius: 0;
        position: relative;
        z-index: 1;
        margin: 0
    }
    .radio-button-group__button:hover {
        z-index: 2
    }
    .radio-button-group__button:not(:first-child) {
        margin-left: -1px
    }
    .radio-button-group__button:first-child {
        border-radius: 4px 0 0 4px
    }
    .radio-button-group__button:last-child {
        border-radius: 0 4px 4px 0
    }
    .radio-button-group__button.o__forced-active {
        color: #286efa!important;
        border-color: #286efa!important;
        z-index: 3
    }
    .radio-button-group__button.o__forced-active:hover {
        color: #0549d1!important;
        border-color: #0549d1!important
    }
    .tab-control__tab {
        display: inline-block;
        box-sizing: border-box;
        vertical-align: bottom;
        padding: 0 10px;
        margin: 0;
        border: 0;
        background-color: transparent;
        cursor: pointer
    }
    .page, .page.o__new-bg {
        background-color: #ebebeb
    }
    .tab-control__tab:first-child {
        padding-left: 0
    }
    .tab-control__tab:last-child {
        padding-right: 0
    }
    .tab-control__tab__contents {
        line-height: 36px;
        border-bottom: 2px solid transparent
    }
    .tab-control__tab__label {
        font-size: 14px;
        font-weight: 500;
        color: #222
    }
    .tab-control__tab__attribute {
        font-size: 13px;
        color: #737376
    }
    .tab-control__tab.o__selected .tab-control__tab__attribute, .tab-control__tab.o__selected .tab-control__tab__label, .tab-control__tab:focus .tab-control__tab__attribute, .tab-control__tab:focus .tab-control__tab__label, .tab-control__tab:hover .tab-control__tab__attribute, .tab-control__tab:hover .tab-control__tab__label {
        color: #286efa
    }
    .tab-control__tab:focus {
        outline: 0
    }
    .tab-control__tab:focus .tab-control__tab__contents {
        border-bottom: 2px solid #e8f0ff
    }
    .tab-control__tab.o__selected:focus, .tab-control__tab:hover {
        outline: 0
    }
    .tab-control__tab.o__selected {
        cursor: default
    }
    .tab-control__tab.o__selected .tab-control__tab__contents {
        border-bottom: 2px solid #286efa
    }
    .box {
        display: flex
    }
    .box.o__vertical {
        flex-direction: column
    }
    .box.o__horizontal {
        flex-direction: row
    }
    .box.o__horizontal.o__vertical-align-center, .box.o__vertical.o__horizontal-align-center {
        align-items: center
    }
    .box.o__horizontal.o__vertical-align-start, .box.o__vertical.o__horizontal-align-start {
        align-items: flex-start
    }
    .box.o__horizontal.o__vertical-align-end, .box.o__vertical.o__horizontal-align-end {
        align-items: flex-end
    }
    .box.o__horizontal.o__horizontal-align-center, .box.o__vertical.o__vertical-align-center {
        justify-content: center
    }
    .box.o__horizontal.o__horizontal-align-start, .box.o__vertical.o__vertical-align-start {
        justify-content: flex-start
    }
    .box.o__horizontal.o__horizontal-align-end, .box.o__vertical.o__vertical-align-end {
        justify-content: flex-end
    }
    .box.o__horizontal.o__horizontal-align-space-around, .box.o__vertical.o__vertical-align-space-around {
        justify-content: space-around
    }
    .box.o__horizontal.o__horizontal-align-space-between, .box.o__vertical.o__vertical-align-space-between {
        justify-content: space-between
    }
    .box.o__horizontal.o__gutter-x0>* {
        margin-right: 0
    }
    .box.o__vertical.o__gutter-x0>* {
        margin-bottom: 0
    }
    .box.o__horizontal.o__gutter-x1>* {
        margin-right: 4px
    }
    .box.o__vertical.o__gutter-x1>* {
        margin-bottom: 4px
    }
    .box.o__horizontal.o__gutter-x2>* {
        margin-right: 8px
    }
    .box.o__vertical.o__gutter-x2>* {
        margin-bottom: 8px
    }
    .box.o__horizontal.o__gutter-x3>* {
        margin-right: 12px
    }
    .box.o__vertical.o__gutter-x3>* {
        margin-bottom: 12px
    }
    .box.o__horizontal.o__gutter-x4>* {
        margin-right: 16px
    }
    .box.o__vertical.o__gutter-x4>* {
        margin-bottom: 16px
    }
    .box.o__horizontal.o__gutter-x6>* {
        margin-right: 24px
    }
    .box.o__vertical.o__gutter-x6>* {
        margin-bottom: 24px
    }
    .box.o__horizontal.o__gutter-x8>* {
        margin-right: 32px
    }
    .box.o__vertical.o__gutter-x8>* {
        margin-bottom: 32px
    }
    .box.o__horizontal.o__gutter-x10>* {
        margin-right: 40px
    }
    .box.o__vertical.o__gutter-x10>* {
        margin-bottom: 40px
    }
    .box.o__horizontal.o__gutter-x16>* {
        margin-right: 64px
    }
    .box.o__vertical.o__gutter-x16>* {
        margin-bottom: 64px
    }
    .box.o__horizontal>:last-child {
        margin-right: 0
    }
    .box.o__vertical>:last-child {
        margin-bottom: 0
    }
    .box.o__wrap {
        flex-wrap: wrap
    }
    .box.o__grow-0 {
        flex: 0
    }
    .box.o__grow-1 {
        flex: 1
    }
    .box.o__grow-2 {
        flex: 2
    }
    .box.o__grow-3 {
        flex: 3
    }
    .box.o__grow-4 {
        flex: 4
    }
    .box.o__grow-5 {
        flex: 5
    }
    .box.o__grow-6 {
        flex: 6
    }
    .box.o__grow-7 {
        flex: 7
    }
    .box.o__grow-8 {
        flex: 8
    }
    .box.o__grow-9 {
        flex: 9
    }
    .box.o__grow-10 {
        flex: 10
    }
    .page {
        overflow: auto;
        padding: 20px
    }
    .control-sidebar {
        background-color: #f6f6f6;
        border-right: 1px solid #ebebeb;
        padding: 16px 20px
    }
    .filter__builder-group.o__first {
        padding-top: 0
    }
    .f__group.o__tight {
        padding-bottom: 5px
    }
    .l__filter-users .control-sidebar, .m__message-edit__sidebar {
        box-sizing: border-box;
        flex: 0 1 251px
    }
    .temp__placeholder {
        box-sizing: border-box;
        border: 1px dashed #737376;
        text-align: center;
        padding: 20px 25px
    }
    .l__full__horizontal, .l__full__vertical {
        display: flex;
        overflow: auto
    }
    .l__full__vertical {
        flex-direction: column;
        height: 100%
    }
    .l__full__horizontal {
        flex-direction: row;
        width: 100%
    }
    .l__full__col, .l__full__row {
        overflow: auto;
        flex: 1
    }
    .l__message-edit .control-sidebar {
        box-sizing: border-box;
        flex: 0 1 331px
    }
    .l__company-profile {
        max-width: 1100px;
        margin: 0 auto
    }
    .l__company-profile .m__company-sidebar {
        float: left;
        width: 302px;
        margin: 0 60px 20px 0
    }
    .u__center-item, .u__m__0 {
        margin: 0!important
    }
    .l__company-profile .m__company-information {
        display: table-cell;
        width: 100000px
    }
    .u__visible {
        visibility: visible!important
    }
    .u__invisible {
        visibility: hidden!important
    }
    .u__hidden {
        display: none!important
    }
    .u__display-block {
        display: block!important
    }
    .u__display-inline-block {
        display: inline-block!important
    }
    .u__center-layout {
        display: flex!important;
        align-items: center!important;
        justify-content: center!important
    }
    .u__center-layout.o__center-text {
        text-align: center
    }
    .u__center-item {
        left: 50%!important;
        -webkit-transform: translate(-50%, -50%)!important;
        transform: translate(-50%, -50%)!important
    }
    .u__center-item-vertically {
        -webkit-transform: translate(0, -50%)!important;
        transform: translate(0, -50%)!important;
        margin: 0!important
    }
    .u__absolute-shim {
        position: absolute!important;
        left: 0!important;
        right: 0!important;
        top: 0!important;
        bottom: 0!important;
        overflow: auto!important
    }
    .u__one-truncated-line, .u__truncated-inline-block {
        overflow: hidden!important;
        text-overflow: ellipsis!important
    }
    .u__centered-text-block {
        text-align: center!important;
        display: block!important
    }
    .u__indent-1 {
        padding-left: 19px!important
    }
    .u__cf:after {
        content: ''!important;
        display: table!important;
        clear: both!important
    }
    .u__left {
        float: left!important
    }
    .u__right {
        float: right!important
    }
    .u__restore-breaks {
        white-space: initial!important;
        word-break: normal!important
    }
    .u__one-truncated-line, .u__prevent-breaks, .u__truncated-inline-block {
        white-space: nowrap!important
    }
    .u__force-breaks {
        word-break: break-all!important;
        word-break: break-word!important
    }
    .u__one-truncated-line {
        display: block!important
    }
    .u__ember-truncated-text {
        min-height: 20px!important
    }
    .btn .u__ember-truncated-text, .btn.u__ember-truncated-text, .f__custom-select__box .u__ember-truncated-text, .f__custom-select__box.u__ember-truncated-text, .pill .u__ember-truncated-text, .pill.u__ember-truncated-text, .t__btn-label .u__ember-truncated-text, .t__btn-label.u__ember-truncated-text, .t__group-label .u__ember-truncated-text, .t__group-label.u__ember-truncated-text, .t__h4 .u__ember-truncated-text, .t__h4.u__ember-truncated-text {
        min-height: 18px!important
    }
    .u__truncated-inline-block {
        display: inline-block!important;
        vertical-align: bottom!important;
        max-width: 100%!important
    }
    .u__all-pointer-events {
        pointer-events: all!important
    }
    .u__disable-pointer-events {
        pointer-events: none!important
    }
    .u__default-cursor {
        cursor: default!important
    }
    .u__pointer-cursor {
        cursor: pointer!important
    }
    .u__overflow-visible {
        overflow: visible!important
    }
    .u__overflow-hidden {
        overflow: hidden!important
    }
    .u__overflow-x-auto {
        overflow-x: auto!important
    }
    .u__pad__0 {
        padding: 0!important
    }
    .u__padt__0 {
        padding-top: 0!important
    }
    .u__padr__0 {
        padding-right: 0!important
    }
    .u__padb__0 {
        padding-bottom: 0!important
    }
    .u__padl__0 {
        padding-left: 0!important
    }
    .u__pad__5 {
        padding: 5px!important
    }
    .u__padt__5 {
        padding-top: 5px!important
    }
    .u__padr__5 {
        padding-right: 5px!important
    }
    .u__padb__5 {
        padding-bottom: 5px!important
    }
    .u__padl__5 {
        padding-left: 5px!important
    }
    .u__pad__10 {
        padding: 10px!important
    }
    .u__padt__10 {
        padding-top: 10px!important
    }
    .u__padr__10 {
        padding-right: 10px!important
    }
    .u__padb__10 {
        padding-bottom: 10px!important
    }
    .u__padl__10 {
        padding-left: 10px!important
    }
    .u__pad__15 {
        padding: 15px!important
    }
    .u__padt__15 {
        padding-top: 15px!important
    }
    .u__padr__15 {
        padding-right: 15px!important
    }
    .u__padb__15 {
        padding-bottom: 15px!important
    }
    .u__padl__15 {
        padding-left: 15px!important
    }
    .u__pad__20 {
        padding: 20px!important
    }
    .u__padt__20 {
        padding-top: 20px!important
    }
    .u__padr__20 {
        padding-right: 20px!important
    }
    .u__padb__20 {
        padding-bottom: 20px!important
    }
    .u__padl__20 {
        padding-left: 20px!important
    }
    .u__pad__25 {
        padding: 25px!important
    }
    .u__padt__25 {
        padding-top: 25px!important
    }
    .u__padr__25 {
        padding-right: 25px!important
    }
    .u__padb__25 {
        padding-bottom: 25px!important
    }
    .u__padl__25 {
        padding-left: 25px!important
    }
    .u__pad__30 {
        padding: 30px!important
    }
    .u__padt__30 {
        padding-top: 30px!important
    }
    .u__padr__30 {
        padding-right: 30px!important
    }
    .u__padb__30 {
        padding-bottom: 30px!important
    }
    .u__padl__30 {
        padding-left: 30px!important
    }
    .u__pad__35 {
        padding: 35px!important
    }
    .u__padt__35 {
        padding-top: 35px!important
    }
    .u__padr__35 {
        padding-right: 35px!important
    }
    .u__padb__35 {
        padding-bottom: 35px!important
    }
    .u__padl__35 {
        padding-left: 35px!important
    }
    .u__pad__40 {
        padding: 40px!important
    }
    .u__padt__40 {
        padding-top: 40px!important
    }
    .u__padr__40 {
        padding-right: 40px!important
    }
    .u__padb__40 {
        padding-bottom: 40px!important
    }
    .u__padl__40 {
        padding-left: 40px!important
    }
    .u__pad__45 {
        padding: 45px!important
    }
    .u__padt__45 {
        padding-top: 45px!important
    }
    .u__padr__45 {
        padding-right: 45px!important
    }
    .u__padb__45 {
        padding-bottom: 45px!important
    }
    .u__padl__45 {
        padding-left: 45px!important
    }
    .u__pad__50 {
        padding: 50px!important
    }
    .u__padt__50 {
        padding-top: 50px!important
    }
    .u__padr__50 {
        padding-right: 50px!important
    }
    .u__padb__50 {
        padding-bottom: 50px!important
    }
    .u__padl__50 {
        padding-left: 50px!important
    }
    .u__pad__55 {
        padding: 55px!important
    }
    .u__padt__55 {
        padding-top: 55px!important
    }
    .u__padr__55 {
        padding-right: 55px!important
    }
    .u__padb__55 {
        padding-bottom: 55px!important
    }
    .u__padl__55 {
        padding-left: 55px!important
    }
    .u__pad__60 {
        padding: 60px!important
    }
    .u__padt__60 {
        padding-top: 60px!important
    }
    .u__padr__60 {
        padding-right: 60px!important
    }
    .u__padb__60 {
        padding-bottom: 60px!important
    }
    .u__padl__60 {
        padding-left: 60px!important
    }
    .u__p__x0 {
        padding: 0!important
    }
    .u__p__x1 {
        padding: 4px!important
    }
    .u__p__x2 {
        padding: 8px!important
    }
    .u__p__x3 {
        padding: 12px!important
    }
    .u__p__x4 {
        padding: 16px!important
    }
    .u__p__x6 {
        padding: 24px!important
    }
    .u__p__x8 {
        padding: 32px!important
    }
    .u__p__x10 {
        padding: 40px!important
    }
    .u__p__x16 {
        padding: 64px!important
    }
    .u__pt__x0 {
        padding-top: 0!important
    }
    .u__pr__x0 {
        padding-right: 0!important
    }
    .u__pb__x0 {
        padding-bottom: 0!important
    }
    .u__pl__x0 {
        padding-left: 0!important
    }
    .u__pt__x1 {
        padding-top: 4px!important
    }
    .u__pr__x1 {
        padding-right: 4px!important
    }
    .u__pb__x1 {
        padding-bottom: 4px!important
    }
    .u__pl__x1 {
        padding-left: 4px!important
    }
    .u__pt__x2 {
        padding-top: 8px!important
    }
    .u__pr__x2 {
        padding-right: 8px!important
    }
    .u__pb__x2 {
        padding-bottom: 8px!important
    }
    .u__pl__x2 {
        padding-left: 8px!important
    }
    .u__pt__x3 {
        padding-top: 12px!important
    }
    .u__pr__x3 {
        padding-right: 12px!important
    }
    .u__pb__x3 {
        padding-bottom: 12px!important
    }
    .u__pl__x3 {
        padding-left: 12px!important
    }
    .u__pt__x4 {
        padding-top: 16px!important
    }
    .u__pr__x4 {
        padding-right: 16px!important
    }
    .u__pb__x4 {
        padding-bottom: 16px!important
    }
    .u__pl__x4 {
        padding-left: 16px!important
    }
    .u__pt__x6 {
        padding-top: 24px!important
    }
    .u__pr__x6 {
        padding-right: 24px!important
    }
    .u__pb__x6 {
        padding-bottom: 24px!important
    }
    .u__pl__x6 {
        padding-left: 24px!important
    }
    .u__pt__x8 {
        padding-top: 32px!important
    }
    .u__pr__x8 {
        padding-right: 32px!important
    }
    .u__pb__x8 {
        padding-bottom: 32px!important
    }
    .u__pl__x8 {
        padding-left: 32px!important
    }
    .u__pt__x10 {
        padding-top: 40px!important
    }
    .u__pr__x10 {
        padding-right: 40px!important
    }
    .u__pb__x10 {
        padding-bottom: 40px!important
    }
    .u__pl__x10 {
        padding-left: 40px!important
    }
    .u__pt__x16 {
        padding-top: 64px!important
    }
    .u__pr__x16 {
        padding-right: 64px!important
    }
    .u__pb__x16 {
        padding-bottom: 64px!important
    }
    .u__pl__x16 {
        padding-left: 64px!important
    }
    .u__mt__0 {
        margin-top: 0!important
    }
    .u__mr__0 {
        margin-right: 0!important
    }
    .u__mb__0 {
        margin-bottom: 0!important
    }
    .u__ml__0 {
        margin-left: 0!important
    }
    .u__m__5 {
        margin: 5px!important
    }
    .u__mt__5 {
        margin-top: 5px!important
    }
    .u__mr__5 {
        margin-right: 5px!important
    }
    .u__mb__5 {
        margin-bottom: 5px!important
    }
    .u__ml__5 {
        margin-left: 5px!important
    }
    .u__m__10 {
        margin: 10px!important
    }
    .u__mt__10 {
        margin-top: 10px!important
    }
    .u__mr__10 {
        margin-right: 10px!important
    }
    .u__mb__10 {
        margin-bottom: 10px!important
    }
    .u__ml__10 {
        margin-left: 10px!important
    }
    .u__m__15 {
        margin: 15px!important
    }
    .u__mt__15 {
        margin-top: 15px!important
    }
    .u__mr__15 {
        margin-right: 15px!important
    }
    .u__mb__15 {
        margin-bottom: 15px!important
    }
    .u__ml__15 {
        margin-left: 15px!important
    }
    .u__m__20 {
        margin: 20px!important
    }
    .u__mt__20 {
        margin-top: 20px!important
    }
    .u__mr__20 {
        margin-right: 20px!important
    }
    .u__mb__20 {
        margin-bottom: 20px!important
    }
    .u__ml__20 {
        margin-left: 20px!important
    }
    .u__m__25 {
        margin: 25px!important
    }
    .u__mt__25 {
        margin-top: 25px!important
    }
    .u__mr__25 {
        margin-right: 25px!important
    }
    .u__mb__25 {
        margin-bottom: 25px!important
    }
    .u__ml__25 {
        margin-left: 25px!important
    }
    .u__m__30 {
        margin: 30px!important
    }
    .u__mt__30 {
        margin-top: 30px!important
    }
    .u__mr__30 {
        margin-right: 30px!important
    }
    .u__mb__30 {
        margin-bottom: 30px!important
    }
    .u__ml__30 {
        margin-left: 30px!important
    }
    .u__m__35 {
        margin: 35px!important
    }
    .u__mt__35 {
        margin-top: 35px!important
    }
    .u__mr__35 {
        margin-right: 35px!important
    }
    .u__mb__35 {
        margin-bottom: 35px!important
    }
    .u__ml__35 {
        margin-left: 35px!important
    }
    .u__m__40 {
        margin: 40px!important
    }
    .u__mt__40 {
        margin-top: 40px!important
    }
    .u__mr__40 {
        margin-right: 40px!important
    }
    .u__mb__40 {
        margin-bottom: 40px!important
    }
    .u__ml__40 {
        margin-left: 40px!important
    }
    .u__m__45 {
        margin: 45px!important
    }
    .u__mt__45 {
        margin-top: 45px!important
    }
    .u__mr__45 {
        margin-right: 45px!important
    }
    .u__mb__45 {
        margin-bottom: 45px!important
    }
    .u__ml__45 {
        margin-left: 45px!important
    }
    .u__m__50 {
        margin: 50px!important
    }
    .u__mt__50 {
        margin-top: 50px!important
    }
    .u__mr__50 {
        margin-right: 50px!important
    }
    .u__mb__50 {
        margin-bottom: 50px!important
    }
    .u__ml__50 {
        margin-left: 50px!important
    }
    .u__m__55 {
        margin: 55px!important
    }
    .u__mt__55 {
        margin-top: 55px!important
    }
    .u__mr__55 {
        margin-right: 55px!important
    }
    .u__mb__55 {
        margin-bottom: 55px!important
    }
    .u__ml__55 {
        margin-left: 55px!important
    }
    .u__m__60 {
        margin: 60px!important
    }
    .u__mt__60 {
        margin-top: 60px!important
    }
    .u__mr__60 {
        margin-right: 60px!important
    }
    .u__mb__60 {
        margin-bottom: 60px!important
    }
    .u__ml__60 {
        margin-left: 60px!important
    }
    .u__m__x0 {
        margin: 0!important
    }
    .u__m__x1 {
        margin: 4px!important
    }
    .u__m__x2 {
        margin: 8px!important
    }
    .u__m__x3 {
        margin: 12px!important
    }
    .u__m__x4 {
        margin: 16px!important
    }
    .u__m__x6 {
        margin: 24px!important
    }
    .u__m__x8 {
        margin: 32px!important
    }
    .u__m__x10 {
        margin: 40px!important
    }
    .u__m__x16 {
        margin: 64px!important
    }
    .u__mt__x0 {
        margin-top: 0!important
    }
    .u__mr__x0 {
        margin-right: 0!important
    }
    .u__mb__x0 {
        margin-bottom: 0!important
    }
    .u__ml__x0 {
        margin-left: 0!important
    }
    .u__mt__x1 {
        margin-top: 4px!important
    }
    .u__mr__x1 {
        margin-right: 4px!important
    }
    .u__mb__x1 {
        margin-bottom: 4px!important
    }
    .u__ml__x1 {
        margin-left: 4px!important
    }
    .u__mt__x2 {
        margin-top: 8px!important
    }
    .u__mr__x2 {
        margin-right: 8px!important
    }
    .u__mb__x2 {
        margin-bottom: 8px!important
    }
    .u__ml__x2 {
        margin-left: 8px!important
    }
    .u__mt__x3 {
        margin-top: 12px!important
    }
    .u__mr__x3 {
        margin-right: 12px!important
    }
    .u__mb__x3 {
        margin-bottom: 12px!important
    }
    .u__ml__x3 {
        margin-left: 12px!important
    }
    .u__mt__x4 {
        margin-top: 16px!important
    }
    .u__mr__x4 {
        margin-right: 16px!important
    }
    .u__mb__x4 {
        margin-bottom: 16px!important
    }
    .u__ml__x4 {
        margin-left: 16px!important
    }
    .u__mt__x6 {
        margin-top: 24px!important
    }
    .u__mr__x6 {
        margin-right: 24px!important
    }
    .u__mb__x6 {
        margin-bottom: 24px!important
    }
    .u__ml__x6 {
        margin-left: 24px!important
    }
    .u__mt__x8 {
        margin-top: 32px!important
    }
    .u__mr__x8 {
        margin-right: 32px!important
    }
    .u__mb__x8 {
        margin-bottom: 32px!important
    }
    .u__ml__x8 {
        margin-left: 32px!important
    }
    .u__mt__x10 {
        margin-top: 40px!important
    }
    .u__mr__x10 {
        margin-right: 40px!important
    }
    .u__mb__x10 {
        margin-bottom: 40px!important
    }
    .u__ml__x10 {
        margin-left: 40px!important
    }
    .u__mt__x16 {
        margin-top: 64px!important
    }
    .u__mr__x16 {
        margin-right: 64px!important
    }
    .u__mb__x16 {
        margin-bottom: 64px!important
    }
    .u__ml__x16 {
        margin-left: 64px!important
    }
    .u__kill-focus {
        outline: 0!important
    }
    .u__flippable {
        display: inline-block!important;
        transition: all .2s ease-out!important
    }
    .u__flippable.o__flipped {
        -webkit-transform: rotate(180deg)!important;
        transform: rotate(180deg)!important
    }
    .u__3dfix {
        transform: translateZ(0)!important
    }
    .u__relative {
        position: relative!important
    }
    .u__u {
        text-decoration: underline!important
    }
    .u__normal-weight {
        font-weight: 400!important
    }
    .layout__media {
        display: flex;
        align-items: flex-start
    }
    .layout__media.o__center {
        align-items: center
    }
    .layout__media__ext {
        flex: 1 1 auto;
        min-width: 0
    }
    .layout__media__textline {
        display: inline-flex;
        max-width: 100%
    }
    .layout__media__textline__nontruncatable {
        flex: 1 0 auto;
        white-space: nowrap
    }
    .layout__media__textline__truncatable {
        flex: 0 1 auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }
    .tour__step-editor__container {
        width: 100%;
        height: 100%
    }
    .tour__step-editor__authored-container {
        z-index: initial
    }
    .tour__step-editor__authored-container-body {
        overflow: visible
    }
    .tour__step-editor__authored-container-bottom {
        border-top: 1px solid #eee
    }
    .tour__step-editor__popper-container .tour__step-editor__step-progression-authored-container-bottom {
        border-top: 1px solid #eee;
        background: rgba(0, 0, 0, .1)
    }
    .tour__step-editor__author-summary-name-from {
        width: 100%;
        float: left;
        overflow: hidden;
        text-overflow: ellipsis
    }
    .tour__step-editor__pointer-step-composer {
        overflow-y: scroll;
        max-height: 250px;
        margin-top: 20px;
        padding-bottom: 20px
    }
    .tour__step-editor__popper-container {
        width: 272px;
        margin: 16px 13px 12px 15px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, .1);
        opacity: 0;
        display: none
    }
    @keyframes fadeIn {
        0% {
            opacity: 0
        }
        100% {
            opacity: 1
        }
    }
    .tour__step-editor__popper-container.o__visible {
        animation: fadeIn .2s;
        pointer-events: all;
        opacity: 1
    }
    .tour__step-editor__popper-container.o__force-center {
        position: fixed;
        left: calc(50% - 136px);
        top: 100px
    }
    .tour__step-editor__popper-container.o__force-center .tour__step-editor__step-arrow {
        display: none
    }
    .tour__step-editor__post-container {
        left: calc(50% - 272px);
        top: 25%;
        width: 544px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, .1);
        animation: fadeIn .2s
    }
    .tour__step-editor__blue-link {
        text-decoration: none;
        color: #286efa
    }
    .tour__step-editor__step-arrow {
        width: 16px;
        height: 16px;
        transform: rotate(-45deg);
        background: #fff;
        position: absolute;
        z-index: -1
    }
    .tour__step-editor__popper-container[x-placement=top] .tour__step-editor__step-arrow {
        bottom: -8px
    }
    .tour__step-editor__popper-container[x-placement=bottom] .tour__step-editor__step-arrow {
        top: -8px
    }
    .tour__step-editor__popper-container[x-placement=left] .tour__step-editor__step-arrow {
        right: -8px
    }
    .tour__step-editor__popper-container[x-placement=right] .tour__step-editor__step-arrow {
        left: -8px
    }
    .tour__step-editor__popper-container-video {
        background: initial;
        border: initial;
        box-shadow: initial
    }
    .tour__step-editor__popper-container-video[x-placement=top] .tour__step-editor__video-pointer-shape-mask, .tour__step-editor__popper-container-video[x-placement=bottom] .tour__step-editor__video-pointer-shape-mask {
        -webkit-mask-image: url(https://js.intercomcdn.com/images/video-mask.4f0cea30.svg);
        mask-image: url(https://js.intercomcdn.com/images/video-mask.4f0cea30.svg)
    }
    .tour__step-editor__popper-container-video[x-placement=left] .tour__step-editor__video-pointer-shape-mask, .tour__step-editor__popper-container-video[x-placement=right] .tour__step-editor__video-pointer-shape-mask {
        -webkit-mask-image: url(https://js.intercomcdn.com/images/video-mask-right.07f09b90.svg);
        mask-image: url(https://js.intercomcdn.com/images/video-mask-right.07f09b90.svg)
    }
    .tour__step-editor__popper-container-video[x-placement=top] #composer-read-only-content-container, .tour__step-editor__popper-container-video[x-placement=top] .block-video-file, .tour__step-editor__popper-container-video[x-placement=top] .composer-box .tour__step-editor__video-composer-editor, .tour__step-editor__popper-container-video[x-placement=top] .tour__step-editor__video-content-builder__mask, .tour__step-editor__popper-container-video[x-placement=top] .tour__step-editor__video-content-builder__mask-blurred-video, .tour__step-editor__popper-container-video[x-placement=right] #composer-read-only-content-container, .tour__step-editor__popper-container-video[x-placement=right] .block-video-file, .tour__step-editor__popper-container-video[x-placement=right] .composer-box .tour__step-editor__video-composer-editor, .tour__step-editor__popper-container-video[x-placement=right] .tour__step-editor__video-content-builder__mask, .tour__step-editor__popper-container-video[x-placement=right] .tour__step-editor__video-content-builder__mask-blurred-video {
        transform: rotate(180deg)
    }
    .tour__step-editor__popper-container-video[x-placement=left] .tour__step-editor__video-content-builder .tour__step-editor__step-progression-authored-container-bottom {
        position: absolute;
        width: 97%;
        bottom: -67px;
        border: none;
        z-index: 999999
    }
    .tour__step-editor__popper-container-video[x-placement=bottom] .tour__step-editor__video-content-builder .tour__step-editor__step-progression-authored-container-bottom {
        position: absolute;
        width: 100%;
        bottom: -67px;
        border: none;
        z-index: 999999
    }
    .tour__step-editor__popper-container-video[x-placement=right] .tour__step-editor__video-content-builder .tour__step-editor__step-progression-authored-container-bottom {
        position: absolute;
        width: 96.5%;
        left: 10px;
        bottom: -67px;
        border: none;
        z-index: 999999
    }
    .tour__step-editor__popper-container-video[x-placement=top] .tour__step-editor__video-content-builder .tour__step-editor__step-progression-authored-container-bottom {
        position: absolute;
        width: 100%;
        bottom: -57px;
        border: none;
        z-index: 999999
    }
    .tour__step-editor__popper-container-video[x-placement=bottom] .tour__step-editor__video-content-builder .tour__step-editor__authored-container-bottom {
        bottom: 0
    }
    .tour__step-editor__popper-container-video[x-placement=bottom] .tour__timeline__step-delete {
        top: 26px
    }
    .tour__step-editor__container .tour__step-editor__popper-container-negative-top-margin[x-placement=top] {
        top: -67px!important
    }
    .tour__step-editor__video-content-builder {
        position: relative
    }
    .tour__step-editor__video-content-builder:hover .tour__step-editor__authored-container-bottom {
        transform: translateY(0);
        opacity: 1
    }
    .tour__step-editor__video-content-builder:hover .tour__timeline__step-delete {
        transform: translateY(15%);
        opacity: 1
    }
    .tour__step-editor__video-content-builder .tour__step-editor__authored-container-bottom {
        position: absolute;
        bottom: 0;
        right: 0;
        transition: transform .3s cubic-bezier(.165, .84, .44, 1), opacity 10ms;
        transform: translateY(15%);
        opacity: 0;
        border: none;
        z-index: 999999
    }
    .tour__step-editor__video-content-builder .tour__timeline__step-delete {
        position: absolute;
        z-index: 999999;
        top: 16px;
        right: 20px;
        opacity: 0;
        transform: translateY(0);
        transition: transform .3s cubic-bezier(.165, .84, .44, 1), opacity 10ms
    }
    .tour__step-editor__step-progression-authored-container-bottom .tour__step-editor__step-progression-footer-container {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px
    }
    .tour__step-editor__popper-container-video[x-placement=top] .tour__step-editor__authored-container-bottom {
        bottom: 10px
    }
    .tour__step-editor__popper-container-video[x-placement=top] .tour__step-editor__step-progression-authored-container-bottom .tour__step-editor__step-progression-arrow {
        width: 16px;
        height: 16px;
        transform: rotate(-45deg);
        background: #ebebeb;
        left: 127px;
        top: 63px;
        position: absolute;
        z-index: -1
    }
    .tour__step-editor__popper-container-video[x-placement=right] .tour__timeline__step-delete {
        right: 24px
    }
    .tour__step-editor__popper-container-video[x-placement=left] .tour__timeline__step-delete {
        right: 26px
    }
    .tour__step-editor__tour-create-container {
        width: 620px;
        margin-top: 25%;
        background: #fff;
        border: 1px solid rgba(0, 0, 0, .05);
        border-radius: 4px;
        padding: 20px;
        margin-left: 25%
    }
    .tour__step-editor__tour-create-container-heading {
        margin-bottom: 10px
    }
    .tour__step-editor__tooltip-opener {
        position: relative;
        display: inline-block
    }
    .tour__step-editor__tooltip-opener .tour__step-editor__tooltip-content {
        position: absolute;
        z-index: 1;
        top: -16px;
        right: 105%;
        visibility: hidden;
        width: 200px;
        background: #fff;
        color: #222;
        text-align: left;
        border-radius: 6px;
        padding: 10px;
        box-shadow: 0 4px 14px rgba(0, 0, 0, .2)
    }
    .tour__step-editor__tooltip-opener:hover .tour__step-editor__tooltip-content {
        visibility: visible;
        white-space: normal
    }
    .tour__step-editor__step-detail-container {
        padding-top: 16px
    }
    .tour__step-editor__step-detail-author-container {
        padding: 0 24px
    }
    .tour__step-editor__click-to-progress-disabled, .tour__step-editor__click-to-progress-enabled {
        font-weight: 700;
        color: green;
        text-decoration: none
    }
    .tour__step-editor__click-to-progress-disabled {
        color: #666
    }
    .embercom-composer-placeholder {
        top: 0;
        padding-right: 24px
    }
    .intercom-embed-tour-step-pointer .embercom-composer-placeholder {
        left: 20px
    }
    .intercom-embed-tour-step-post .embercom-composer-placeholder {
        left: 24px
    }
    .tour__step-editor__video-composer {
        display: none
    }
    .tour__step-editor__video-composer-has-video {
        display: block;
        position: absolute;
        z-index: 3;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0
    }
    .tour__step-editor__video-composer-has-video .composer-media-inserters, .tour__step-editor__video-composer-has-video .embercom-composer-editor p {
        display: none
    }
    .tour__step-editor__video-composer-has-uploaded-video video:first-child {
        opacity: 0;
        filter: blur(48px);
        transition: all 1s
    }
    .tour__step-editor__video-composer-video-is-loaded video:first-child {
        opacity: 1;
        filter: blur(0)
    }
    .tour__step-editor__video-content-builder {
        width: 272px;
        height: 204px;
        color: #fff;
        border-radius: 6px
    }
    .tour__step-editor__video-content-builder__mask {
        border-radius: 6px;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0
    }
    .tour__step-editor__video-content-builder__mask-blur, .tour__step-editor__video-content-builder__mask-blurred-video {
        content: '';
        position: absolute;
        top: -20px;
        left: -20px;
        right: -20px;
        bottom: -20px;
        background: linear-gradient(180deg, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, .9) 100%);
        filter: blur(12px)
    }
    .tour__step-editor__video-content-builder__mask-blurred-video {
        width: 140%;
        height: 140%;
        left: -20%;
        top: -20%
    }
    .tour__step-editor__video-content-builder__content {
        position: relative;
        z-index: 2;
        color: #fff;
        height: 100%
    }
    .tour__step-editor__video-content-builder__info {
        position: absolute;
        height: 100%;
        width: 100%;
        text-align: center
    }
    .tour__step-editor__video-icon path {
        fill: #fff!important
    }
    .tour__step-editor__video-content-builder__upload {
        position: absolute;
        bottom: 20px;
        cursor: pointer
    }
    .tour__step-editor__navigate-again {
        border-right: 1px solid rgba(255, 255, 255, .2)
    }
    .tour__timeline__authored-container-avatar {
        display: inline-block;
        vertical-align: middle;
        margin-right: 6px
    }
    .tour__timeline__intercom-avatar {
        width: 32px;
        height: 32px;
        line-height: 32px;
        font-size: 8px
    }
    .tour__timeline__overflow-container {
        overflow-x: auto;
        overflow-y: hidden
    }
    .tour__timeline__container .sortable-item {
        transition: transform .125s
    }
    .tour__timeline__container .sortable-item.is-dragging {
        z-index: 10;
        transition-duration: 0s
    }
    .tour__timeline__container .sortable-item.is-dragging .tour__timeline__step-progress-icon {
        opacity: 0
    }
    .tour__timeline__container {
        white-space: nowrap;
        display: inline-flex
    }
    .tour__timeline__scaled-container {
        position: relative;
        transform: scale(.75);
        transform-origin: 0 0;
        width: 133.333%
    }
    .tour__timeline__scaled-container ic-block .block-video-file-container-uploaded {
        display: block
    }
    .tour__timeline__pointer-step-container, .tour__timeline__post-step-container, .tour__timeline__video-step-container {
        border: 1px solid #fff
    }
    .tour__timeline__pointer-step-container .tour__timeline__author__container, .tour__timeline__post-step-container .tour__timeline__author__container, .tour__timeline__video-step-container .tour__timeline__author__container {
        padding: 16px 24px
    }
    .tour__timeline__pointer-step-container:hover, .tour__timeline__post-step-container:hover, .tour__timeline__video-step-container:hover {
        border: 1px solid #286efa
    }
    .tour__timeline__pointer-step-container:hover .tour__timeline__pointer-arrow-container, .tour__timeline__post-step-container:hover .tour__timeline__pointer-arrow-container, .tour__timeline__video-step-container:hover .tour__timeline__pointer-arrow-container {
        border-right: 1px solid #286efa;
        border-top: 1px solid #286efa
    }
    .tour__timeline__video-step-container {
        width: 214px;
        height: 152px;
        border: 1px solid #fff
    }
    .tour__timeline__video-step-container:hover {
        border: 1px solid #fff
    }
    .tour__timeline__video-step-container .tour__timeline__video-step-container__inner {
        -webkit-mask-image: url(https://js.intercomcdn.com/images/video-tours-mask.13acd30e.svg);
        mask-image: url(https://js.intercomcdn.com/images/video-tours-mask.13acd30e.svg);
        position: relative;
        top: -10px;
        max-height: 214px
    }
    .tour__timeline__video-step-container .tour__timeline__video-step-container__inner-border-svg {
        opacity: 0;
        position: absolute;
        z-index: 2;
        bottom: 0;
        width: 110%;
        height: 224px;
        background-image: url(https://static.intercomassets.com/ember/assets/svgs/tours/video-tours-border-24aac7318944e5785ebca540dae21e4c.svg);
        background-repeat: no-repeat
    }
    .tour__timeline__video-step-container:hover .tour__timeline__video-step-container__inner-border-svg {
        opacity: 1
    }
    .tour__timeline__video-step-container .tour__timeline__composer-container {
        max-height: 214px;
        pointer-events: none
    }
    .tour__timeline__step-delete-icon__hover, .tour__timeline__step-drag-icon__hover {
        display: inline;
        opacity: 0
    }
    .tour__timeline__step-drag-icon__hover {
        cursor: grab
    }
    .tour__timeline__step-drag-icon__hover:active {
        cursor: grabbing
    }
    .tour__timeline__hoverable-container {
        position: relative
    }
    .tour__timeline__hoverable-container:hover .tour__timeline__step-delete-icon__hover, .tour__timeline__hoverable-container:hover .tour__timeline__step-drag-icon__hover {
        opacity: 1
    }
    .tour__timeline__pointer-step-container:hover .tour__timeline__author-summary, .tour__timeline__post-step-container:hover .tour__timeline__author-summary {
        width: calc(100% - 74px)
    }
    .tour__timeline__author-summary {
        font-size: 14px;
        display: inline-block;
        vertical-align: middle;
        color: #000;
        line-height: 1.2;
        padding-top: 2px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%
    }
    .tour__timeline__pointer-author-summary {
        width: 182px
    }
    .tour__timeline__author-summary-name-from-container {
        color: "black"
    }
    .tour__timeline__author-summary-name-from {
        width: 90%;
        float: left;
        overflow: hidden;
        text-overflow: ellipsis
    }
    .tour__timeline__author-summary-from-clause, .tour__timeline__author-summary-name {
        color: #000
    }
    .tour__timeline__steps-footer {
        position: relative;
        padding: 8px;
        order: 0;
        flex: 0 1;
        align-self: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #eee
    }
    .tour__timeline__step-progress {
        padding-left: 18px;
        color: #888
    }
    .tour__timeline__step-button {
        font-size: 10px;
        background-color: #0071b2;
        color: #fff;
        font-weight: 700;
        padding: 6px;
        width: 56px;
        height: 26px;
        border-radius: 4px
    }
    .tour__timeline__pointer-arrow-container {
        width: 10px;
        height: 10px;
        margin-left: 90px;
        transform-origin: 0 0;
        transform: rotate(-45deg);
        background: #fff;
        border-bottom: 1px solid #fff;
        border-left: 1px solid #fff;
        border-top: 1px solid rgba(0, 0, 0, .1);
        border-right: 1px solid rgba(0, 0, 0, .1);
        box-sizing: border-box;
        border-style: solid;
        position: absolute
    }
    .tour__timeline__pointer-step-container {
        width: 204px;
        position: relative
    }
    .tour__timeline__post-step-container {
        width: 306px;
        max-height: 150px
    }
    .tour__timeline__pointer-step-container, .tour__timeline__post-step-container {
        border-radius: 5px
    }
    .tour__timeline__pointer-step-container .tour__timeline__hoverable-container__inner, .tour__timeline__post-step-container .tour__timeline__hoverable-container__inner {
        background: #fff;
        max-height: 148px;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .05);
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 5px;
        overflow: hidden
    }
    .tour__timeline__video-step-container .tour__timeline__hoverable-container__inner {
        max-height: 148px
    }
    .tour__timeline__step-progress-icon {
        color: rgba(0, 0, 0, .2);
        transition: opacity 150ms;
        margin-top: 7px
    }
    .tour__timeline__step-progress-icon:after, .tour__timeline__step-progress-icon:before {
        background-color: rgba(0, 0, 0, .2);
        height: 2px;
        width: 6px;
        margin-right: 2px;
        margin-left: 2px;
        position: relative;
        display: block;
        content: ''
    }
    .tour__timeline__add-step-button {
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, .1);
        box-sizing: border-box;
        border-radius: 20px;
        height: 40px;
        width: 40px;
        margin-top: 50px;
        cursor: pointer
    }
    .tour__timeline__step-delete {
        position: absolute;
        float: right;
        right: 13px;
        top: 13px;
        color: #ebebeb
    }
    .tour__timeline__step-drag {
        position: absolute;
        float: right;
        right: 37px;
        top: 16px;
        height: 16px;
        cursor: grab;
        color: #ebebeb
    }
    .tour__timeline__composer-container {
        word-break: break-all;
        white-space: normal;
        overflow: hidden;
        max-height: 134px
    }
    .tour__timeline__placeholder {
        background-color: #ebebeb;
        border-radius: 4px;
        min-width: 205px;
        height: 150px
    }
    .tour__timeline__placeholder:nth-child(2):not(.o__first-placeholder) {
        opacity: .8
    }
    .tour__timeline__placeholder:nth-child(3):not(.o__first-placeholder) {
        opacity: .6
    }
    .tour__timeline__placeholder:nth-child(4):not(.o__first-placeholder) {
        opacity: .4
    }
    .tour__timeline__placeholder:nth-child(5):not(.o__first-placeholder) {
        opacity: .2
    }
    .tour__timeline__inserter.o__pointer, .tour__timeline__inserter.o__post, .tour__timeline__inserter.o__video, .tour__timeline__inserters:hover .tour__timeline__inserter-plus {
        opacity: 0
    }
    .tour__timeline__create-step-overlay-icon {
        width: 100%
    }
    .tour__timeline__create-tour-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%
    }
    .tour__timeline__inserter.o__post {
        transform: translateX(62px) scaleX(1.7)
    }
    .tour__timeline__inserter.o__video {
        transform: scaleX(1.7)
    }
    .tour__timeline__inserter.o__pointer {
        transform: translateX(-62px)
    }
    .tour__timeline__inserters {
        display: inherit;
        align-items: inherit;
        justify-content: inherit;
        width: 100%;
        height: 100%;
        position: relative
    }
    .tour__timeline__inserters:hover .tour__timeline__inserter {
        transition: transform .5s cubic-bezier(.2, .8, .2, 1) 25ms, opacity .1s cubic-bezier(.2, .8, .2, 1)
    }
    .tour__timeline__inserters:hover .tour__timeline__inserter-hovered {
        transition: transform .1s cubic-bezier(.2, .8, .2, 1) 10ms, opacity .1s cubic-bezier(.2, .8, .2, 1) 50ms
    }
    .tour__timeline__inserters:hover .tour__timeline__inserter.o__post {
        transform: translateX(0) scale(.821)
    }
    .tour__timeline__inserters:hover .tour__timeline__inserter.o__video {
        transform: translateX(62px) scale(.821)
    }
    .tour__timeline__inserters:hover .tour__timeline__inserter.o__pointer:not(.tour__timeline__inserter-large) {
        transform: translateX(-62px) scale(.821)
    }
    .tour__timeline__inserters:hover .tour__timeline__inserter.o__pointer, .tour__timeline__inserters:hover .tour__timeline__inserter.o__post, .tour__timeline__inserters:hover .tour__timeline__inserter.o__video {
        opacity: 1
    }
    .tour__timeline__inserters:hover .tour__timeline__inserter.o__post:hover {
        transform: translateX(0) scale(1)
    }
    .tour__timeline__inserters:hover .tour__timeline__inserter.o__video:hover {
        transform: translateX(62px) scale(1)
    }
    .tour__timeline__inserters:hover .tour__timeline__inserter.o__pointer:hover {
        transform: translateX(-62px) scale(1)
    }
    .tour__timeline__inserter, .tour__timeline__inserter-plus {
        width: 54px;
        height: 54px;
        transform: scale(.821);
        background: #fff;
        cursor: pointer
    }
    .tour__timeline__inserters:hover .tour__timeline__inserter:hover {
        border: 1px solid #286efa;
        color: #286efa;
        opacity: 1
    }
    .tour__timeline__inserter {
        display: flex;
        transition: transform .5s cubic-bezier(.2, .8, .2, 1), opacity 10ms cubic-bezier(.2, .8, .2, 1) 110ms;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 50%;
        flex-shrink: 0;
        margin: 0 3px
    }
    .tour__timeline__inserter-plus {
        transition: transform .5s cubic-bezier(.2, .8, .2, 1) 50ms, opacity .1s cubic-bezier(.2, .8, .2, 1) 50ms;
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-27.5px) translateY(-27.5px) scale(1);
        opacity: 1;
        text-align: center;
        padding-top: 16px;
        box-sizing: border-box
    }
    .tour__timeline__inserter-large, .tour__timeline__inserter:hover {
        transform: translateX(0) scale(1)
    }
    .tour__timeline__inserter-title {
        position: absolute;
        bottom: 20px;
        color: #286efa;
        font-size: 14px
    }
    .tour__timeline__create-step-overlay-item-name {
        line-height: 18px;
        font-size: 14px
    }
    .tour__timeline__create-step-overlay-item-description {
        line-height: 20px;
        font-size: 13px;
        padding-left: 22px
    }
    .tour__settings__card {
        text-align: center;
        width: 320px
    }
    .tour__settings__card__header {
        letter-spacing: .5px
    }
    .tour__settings__card__separator {
        border-right: 1px solid rgba(0, 0, 0, .1)
    }
    .tour__settings__card__description {
        max-width: 320px
    }
    .tour__settings__edit-build-url {
        position: fixed;
        height: 100%;
        top: 0;
        width: 100%;
        left: 0;
        z-index: 999999999999;
        background: #fff
    }
    .tour__settings__edit-build-url__main-container {
        width: 600px;
        margin: 0 auto
    }
    .tour__settings__edit-build-url__main-container__change-website-button {
        width: 135px
    }
    .tour__settings__edit-build-url__main-container__cancel-button {
        width: 80px
    }
    .tour__settings__confetti-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        pointer-events: none;
        width: 100%;
        height: 100%
    }
    .tour__overview {
        background: #fff
    }
    .tour__overview__content-container {
        min-height: 220px
    }
    .tour__overview__intercom-logo {
        width: 60px;
        height: 60px
    }
    .tour__overview__navigation-intercom-logo {
        width: 60px;
        height: 60px;
        background-color: #f6f6f6
    }
    .tour__step-editor__popper-container .tour__step-editor__step-progression-footer-container {
        width: 100%;
        padding: 8px 0;
        background: #ebebeb;
        color: #222
    }
    .tour__step-editor__popper-container .tour__step-editor__step-progression-footer-container .btn.o__secondary, .tour__step-editor__popper-container .tour__step-editor__step-progression-footer-container .btn.o__secondary.o__forced-active, .tour__step-editor__popper-container .tour__step-editor__step-progression-footer-container .btn.o__secondary:focus, .tour__step-editor__popper-container .tour__step-editor__step-progression-footer-container .btn.o__secondary:hover {
        color: #222;
        background: #ebebeb;
        border: none;
        box-shadow: none
    }
    .tour__step-footer__step-progression-footer-heading {
        margin: 0 24px;
        color: #737376;
        font-size: 13px
    }
    .tour__step-footer__tour-progression-behaviour-dropdown {
        margin: 2px 10px
    }
    .tour__step-footer__step-footer-done .btn {
        background: #ebebeb;
        color: #fff;
        border-color: transparent;
        opacity: 1
    }
    .tour__step-footer__step-footer-done {
        margin: 8px;
        border-radius: 3px;
        color: #fff;
        background: #ebebeb
    }
    .tour__editor {
        width: 100%;
        flex: inherit;
        bottom: 0
    }
    .tour__editor.o__fixed {
        position: fixed
    }
    .tour__bottom-bar {
        background: #fff;
        min-height: 60px;
        position: fixed;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
        transition: height .2s, min-height .2s
    }
    .tour__bottom-bar .liquid-child:not(.velocity-animating) {
        transform: none!important;
        overflow: visible
    }
    .tour__bottom-bar .liquid-child.velocity-animating {
        transform: inherit
    }
    .tour__bottom-bar .liquid-container:not(.liquid-animating) {
        transform: none!important;
        overflow: visible
    }
    .tour__bottom-bar .liquid-container.liquid-animating {
        transform: inherit
    }
    .tour__bottom-bar.o__toolbar-hidden {
        min-height: 0;
        height: 0;
        transition: height .2s, min-height .2s
    }
    .tour__bottom-bar-buttons {
        position: inherit;
        right: 10px
    }
    .tour__input-field, .tour__input-field .o__dropdown-opener {
        width: 350px
    }
    .tour__large-upper-section {
        height: 225px;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        background: #fff
    }
    .tour__large-lower-section {
        height: 190px;
        box-sizing: border-box;
        border-top: 1px solid #ddd
    }
    .tour__large-upper-section-panel {
        width: 480px
    }
    .tour__bottom-bar-inner {
        z-index: 1000;
        height: 60px;
        background: #286efa;
        transition: height .2s, bottom .2s
    }
    .tour__bottom-bar-inner.o__toolbar-hidden {
        bottom: 0;
        height: 0;
        transition: height .2s, bottom .2s
    }
    .tour__bottom-bar-inner.o__fixed {
        position: fixed;
        transition: height .2s, bottom .2s
    }
    .tour__bottom-bar-hidden {
        height: 0;
        width: 48px;
        bottom: 0;
        left: 12px;
        position: fixed;
        transition: height .2s;
        background: #286efa;
        border-radius: 32px 32px 0 0;
        cursor: pointer
    }
    .tour__bottom-bar-hidden.o__toolbar-hidden {
        left: 12px;
        height: 24px;
        transition: height .2s
    }
    .tour__bottom-bar-hidden.o__toolbar-hidden:hover {
        height: 48px;
        transition: height .2s
    }
    .tour__settings-section {
        width: 370px
    }
    .tour__advanced-settings {
        background: #fff
    }
    .tour__advanced-settings__banner {
        padding: 5px 15px
    }
    .tour__advanced-settings__progression {
        margin-left: 20px;
        padding-left: 20px;
        border-left: 1px solid rgba(0, 0, 0, .05)
    }
    .tour__show-toolbar-container {
        background: #286efa;
        position: fixed;
        bottom: 0;
        border-radius: 32px 32px 0 0;
        height: 24px;
        width: 48px;
        transition: height .2s
    }
    .tour__show-toolbar-container:hover {
        height: 48px;
        transition: height .2s
    }
    .tour__hide-toolbar-button {
        border-right: 1px solid #0549d1
    }
    .custom-bot__bottom-bar-inner {
        z-index: 1000;
        height: 60px;
        background: #286efa
    }
    .t__monospace {
        font-family: menlo, monospace
    }
    .t__link-on-blue {
        color: #fff;
        text-decoration: none;
        cursor: pointer
    }
    .t__text-on-blue {
        color: #fff
    }
    .f__expanded-select__item-container.o__selected .t__light-text, .f__expanded-select__item-container.o__selected:active .t__light-text, .f__expanded-select__item-container:active .t__light-text, .f__expanded-select__item-container:hover .t__light-text {
        color: #286efa
    }
    .t__link-on-blue:hover {
        text-decoration: none
    }
    .f__expanded-select__item-container {
        margin-bottom: -1px;
        border: 1px solid;
        border-color: rgba(0, 0, 0, .2);
        border-bottom-color: transparent
    }
    .f__expanded-select__item-container:active, .f__expanded-select__item-container:hover {
        border-color: #286efa
    }
    .f__expanded-select__item-container.o__selected, .f__expanded-select__item-container.o__selected:active {
        background-color: #e8f0ff;
        border-color: #286efa
    }
    .f__expanded-select__item-container.o__selected:hover .t__light-text, .f__expanded-select__item.o__selected:hover, .f__expanded-select__item.o__selected:hover .t__light-text {
        color: #0549d1
    }
    .f__expanded-select__item-container.o__selected:hover {
        border-color: #0549d1;
        color: #0549d1
    }
    .f__expanded-select__item.o__selected, .f__expanded-select__item.o__selected:active {
        background-color: transparent
    }
    ::selection {
        background-color: #286efa;
        color: #fff
    }
    .btn__tertiary.o__on-blue {
        color: #fff
    }
    .btn__tertiary.o__on-blue:hover {
        color: rgba(255, 255, 255, .8)
    }
    .overlay__standard-tooltip, body {
        line-height: 20px;
        font-size: 14px;
        color: #222
    }
    .btn__tertiary.o__on-blue.o__active {
        background-color: #0549d1
    }
    .u__center-in-parent {
        position: absolute;
        margin: auto
    }
    .u__right-in-parent {
        margin-left: auto
    }
    body, html {
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
    }
    .overlay__standard-tooltip {
        padding: 8px 12px;
        border-radius: 4px;
        box-shadow: 0 4px 14px rgba(0, 0, 0, .2), 0 0 0 1px rgba(0, 0, 0, .05);
        border: 0;
        background: #fff
    }
    .overlay__tooltip__caret {
        position: absolute
    }
    `;
    document.head.appendChild(styleTag);
}

)();