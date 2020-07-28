import React from "react";
import { colors, useGlobalTheme } from "@saruni-ui/theme";

import { SVG } from "../../../../components/svg";

interface BasicCorsErrorProps {}

export const BasicCorsError: React.FC<BasicCorsErrorProps> = ({}) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});

  return (
    <SVG
      secondaryColor={colors.surface[mode]}
      image={() => (
        <svg width={700} viewBox="0 0 700 420">
          <rect
            x={0.5}
            y={0.5}
            width={699}
            height={419}
            rx={3.5}
            stroke="currentColor"
          />
          <rect
            x={25.5}
            y={25.5}
            width={249}
            height={369}
            rx={3.5}
            stroke="currentColor"
          />
          <rect
            x={50.5}
            y={88.5}
            width={199}
            height={79}
            rx={3.5}
            stroke="currentColor"
          />
          <rect
            x={425.5}
            y={25.5}
            width={249}
            height={369}
            rx={3.5}
            stroke="currentColor"
          />
          <path
            d="M118.73 133h-1.554v-9.772h3.654c.933 0 1.643.261 2.128.784.495.523.742 1.241.742 2.156 0 .747-.182 1.363-.546 1.848-.364.485-.887.784-1.568.896L123.84 133h-1.736l-2.072-3.948h-1.302V133zm1.876-5.208c.971 0 1.456-.443 1.456-1.33v-.602c0-.887-.485-1.33-1.456-1.33h-1.876v3.262h1.876zm4.993 5.208v-9.772h6.118v1.316h-4.55v2.842h4.382v1.316h-4.382v2.982h4.55V133h-6.118zm11.306.168c-.849 0-1.563-.149-2.142-.448a4.13 4.13 0 01-1.428-1.19l1.008-.966c.373.448.77.779 1.19.994.42.205.896.308 1.428.308.616 0 1.087-.14 1.414-.42.336-.28.504-.681.504-1.204 0-.42-.121-.742-.364-.966-.243-.233-.658-.401-1.246-.504l-1.064-.168c-.467-.075-.859-.196-1.176-.364a2.733 2.733 0 01-.77-.616 2.467 2.467 0 01-.434-.798 3.448 3.448 0 01-.126-.938c0-.924.299-1.624.896-2.1.597-.485 1.419-.728 2.464-.728.775 0 1.433.126 1.974.378.551.243.994.588 1.33 1.036l-.98.98a3.14 3.14 0 00-.966-.784c-.364-.205-.817-.308-1.358-.308-.579 0-1.022.126-1.33.378-.299.243-.448.602-.448 1.078 0 .401.117.719.35.952.243.224.667.387 1.274.49l1.036.182c.877.159 1.517.481 1.918.966.401.476.602 1.059.602 1.75 0 .448-.079.859-.238 1.232a2.396 2.396 0 01-.686.952 3.23 3.23 0 01-1.12.616c-.439.14-.943.21-1.512.21zm9.263-8.624V133H144.6v-8.456h-3.066v-1.316h7.7v1.316h-3.066zM164.441 133l-.742-2.604h-3.108l-.742 2.604h-1.596l2.856-9.772h2.142l2.856 9.772h-1.666zm-2.24-8.19h-.112l-1.204 4.284h2.52l-1.204-4.284zm5.342 8.19v-9.772h3.654c.934 0 1.643.261 2.128.784.495.523.742 1.241.742 2.156s-.247 1.633-.742 2.156c-.485.523-1.194.784-2.128.784h-2.086V133h-1.568zm1.568-5.194h1.848c.971 0 1.456-.448 1.456-1.344v-.602c0-.887-.485-1.33-1.456-1.33h-1.848v3.276zm6.771 5.194v-1.19h2.296v-7.392h-2.296v-1.19h6.16v1.19h-2.296v7.392h2.296V133h-6.16z"
            fill="currentColor"
          />
          <rect
            x={450.5}
            y={88.5}
            width={199}
            height={79}
            rx={3.5}
            stroke="currentColor"
          />
          <path
            d="M522.05 133l-.7-9.772h1.372l.35 5.684.154 2.506h.112l1.106-5.824h1.554l1.106 5.824h.112l.154-2.506.364-5.684h1.316l-.7 9.772h-2.1l-.994-5.656h-.112L524.15 133h-2.1zm8.549 0v-9.772h6.118v1.316h-4.55v2.842h4.382v1.316h-4.382v2.982h4.55V133h-6.118zm8.352-9.772h3.374c.887 0 1.573.229 2.058.686.495.457.742 1.083.742 1.876 0 .569-.14 1.022-.42 1.358-.28.336-.658.574-1.134.714v.07c.569.131 1.027.383 1.372.756.345.364.518.882.518 1.554 0 .401-.065.77-.196 1.106-.131.336-.317.63-.56.882a2.626 2.626 0 01-.882.574 3.059 3.059 0 01-1.12.196h-3.752v-9.772zm3.276 8.568c.523 0 .924-.107 1.204-.322.28-.215.42-.56.42-1.036v-.504c0-.476-.14-.821-.42-1.036-.28-.215-.681-.322-1.204-.322h-1.736v3.22h1.736zm-.224-4.368c.495 0 .868-.093 1.12-.28.261-.196.392-.518.392-.966v-.504c0-.448-.131-.765-.392-.952-.252-.196-.625-.294-1.12-.294h-1.512v2.996h1.512zM561.046 133l-.742-2.604h-3.108l-.742 2.604h-1.596l2.856-9.772h2.142l2.856 9.772h-1.666zm-2.24-8.19h-.112l-1.204 4.284h2.52l-1.204-4.284zm5.343 8.19v-9.772h3.654c.933 0 1.642.261 2.128.784.494.523.742 1.241.742 2.156s-.248 1.633-.742 2.156c-.486.523-1.195.784-2.128.784h-2.086V133h-1.568zm1.568-5.194h1.848c.97 0 1.456-.448 1.456-1.344v-.602c0-.887-.486-1.33-1.456-1.33h-1.848v3.276zm6.826 5.194v-9.772h3.654c.934 0 1.643.261 2.128.784.495.523.742 1.241.742 2.156s-.247 1.633-.742 2.156c-.485.523-1.194.784-2.128.784h-2.086V133h-1.568zm1.568-5.194h1.848c.971 0 1.456-.448 1.456-1.344v-.602c0-.887-.485-1.33-1.456-1.33h-1.848v3.276z"
            fill="currentColor"
          />
          <rect
            x={50.5}
            y={290.5}
            width={199}
            height={79}
            rx={3.5}
            stroke="currentColor"
          />
          <path
            d="M121.05 335l-.7-9.772h1.372l.35 5.684.154 2.506h.112l1.106-5.824h1.554l1.106 5.824h.112l.154-2.506.364-5.684h1.316l-.7 9.772h-2.1l-.994-5.656h-.112L123.15 335h-2.1zm8.549 0v-9.772h6.118v1.316h-4.55v2.842h4.382v1.316h-4.382v2.982h4.55V335h-6.118zm8.352-9.772h3.374c.887 0 1.573.229 2.058.686.495.457.742 1.083.742 1.876 0 .569-.14 1.022-.42 1.358-.28.336-.658.574-1.134.714v.07c.569.131 1.027.383 1.372.756.345.364.518.882.518 1.554 0 .401-.065.77-.196 1.106-.131.336-.317.63-.56.882a2.626 2.626 0 01-.882.574 3.059 3.059 0 01-1.12.196h-3.752v-9.772zm3.276 8.568c.523 0 .924-.107 1.204-.322.28-.215.42-.56.42-1.036v-.504c0-.476-.14-.821-.42-1.036-.28-.215-.681-.322-1.204-.322h-1.736v3.22h1.736zm-.224-4.368c.495 0 .868-.093 1.12-.28.261-.196.392-.518.392-.966v-.504c0-.448-.131-.765-.392-.952-.252-.196-.625-.294-1.12-.294h-1.512v2.996h1.512zM160.046 335l-.742-2.604h-3.108l-.742 2.604h-1.596l2.856-9.772h2.142l2.856 9.772h-1.666zm-2.24-8.19h-.112l-1.204 4.284h2.52l-1.204-4.284zm5.343 8.19v-9.772h3.654c.933 0 1.642.261 2.128.784.494.523.742 1.241.742 2.156s-.248 1.633-.742 2.156c-.486.523-1.195.784-2.128.784h-2.086V335h-1.568zm1.568-5.194h1.848c.97 0 1.456-.448 1.456-1.344v-.602c0-.887-.486-1.33-1.456-1.33h-1.848v3.276zm6.826 5.194v-9.772h3.654c.934 0 1.643.261 2.128.784.495.523.742 1.241.742 2.156s-.247 1.633-.742 2.156c-.485.523-1.194.784-2.128.784h-2.086V335h-1.568zm1.568-5.194h1.848c.971 0 1.456-.448 1.456-1.344v-.602c0-.887-.485-1.33-1.456-1.33h-1.848v3.276zM117.148 51.228h2.912c1.251 0 2.175.415 2.772 1.246.607.83.91 2.044.91 3.64s-.303 2.81-.91 3.64c-.597.83-1.521 1.246-2.772 1.246h-2.912v-9.772zm2.814 8.484c.719 0 1.251-.238 1.596-.714.355-.485.532-1.176.532-2.072v-1.624c0-.896-.177-1.582-.532-2.058-.345-.485-.877-.728-1.596-.728h-1.26v7.196h1.26zm8.633 1.456c-.616 0-1.153-.112-1.61-.336a3.082 3.082 0 01-1.12-.994c-.29-.43-.504-.957-.644-1.582-.14-.625-.21-1.34-.21-2.142 0-.793.07-1.503.21-2.128.14-.635.354-1.167.644-1.596.298-.43.672-.756 1.12-.98.457-.233.994-.35 1.61-.35.616 0 1.148.117 1.596.35.457.224.83.55 1.12.98.298.43.518.961.658 1.596.14.625.21 1.335.21 2.128 0 .803-.07 1.517-.21 2.142-.14.625-.36 1.153-.658 1.582-.29.43-.663.76-1.12.994-.448.224-.98.336-1.596.336zm0-1.302c.7 0 1.194-.261 1.484-.784.289-.532.434-1.25.434-2.156v-1.638c0-.896-.145-1.605-.434-2.128-.29-.532-.784-.798-1.484-.798s-1.195.266-1.484.798c-.29.523-.434 1.232-.434 2.128v1.652c0 .896.144 1.61.434 2.142.289.523.784.784 1.484.784zm10.424-3.542l.042-2.94h-.112l-1.96 5.026-1.96-5.026h-.112l.042 2.94V61h-1.386v-9.772h1.918l1.498 3.878h.098l1.512-3.878h1.806V61h-1.386v-4.676zM147.652 61l-.742-2.604h-3.108L143.06 61h-1.596l2.856-9.772h2.142L149.318 61h-1.666zm-2.24-8.19h-.112l-1.204 4.284h2.52l-1.204-4.284zm5.286 8.19v-1.19h2.296v-7.392h-2.296v-1.19h6.16v1.19h-2.296v7.392h2.296V61h-6.16zm9.781-7.518h-.126V61h-1.372v-9.772h2.016l2.87 7.518h.126v-7.518h1.372V61h-2.016l-2.87-7.518zm6.728 10.024V62.19h6.72v1.316h-6.72zM181.23 61l-.742-2.604h-3.108L176.638 61h-1.596l2.856-9.772h2.142L182.896 61h-1.666zm-2.24-8.19h-.112l-1.204 4.284h2.52l-1.204-4.284zM517.148 51.228h2.912c1.251 0 2.175.415 2.772 1.246.607.83.91 2.044.91 3.64s-.303 2.81-.91 3.64c-.597.83-1.521 1.246-2.772 1.246h-2.912v-9.772zm2.814 8.484c.719 0 1.251-.238 1.596-.714.355-.485.532-1.176.532-2.072v-1.624c0-.896-.177-1.582-.532-2.058-.345-.485-.877-.728-1.596-.728h-1.26v7.196h1.26zm8.633 1.456c-.616 0-1.153-.112-1.61-.336a3.082 3.082 0 01-1.12-.994c-.29-.43-.504-.957-.644-1.582-.14-.625-.21-1.34-.21-2.142 0-.793.07-1.503.21-2.128.14-.635.354-1.167.644-1.596.298-.43.672-.756 1.12-.98.457-.233.994-.35 1.61-.35.616 0 1.148.117 1.596.35.457.224.83.55 1.12.98.298.43.518.961.658 1.596.14.625.21 1.335.21 2.128 0 .803-.07 1.517-.21 2.142-.14.625-.36 1.153-.658 1.582-.29.43-.663.76-1.12.994-.448.224-.98.336-1.596.336zm0-1.302c.7 0 1.194-.261 1.484-.784.289-.532.434-1.25.434-2.156v-1.638c0-.896-.145-1.605-.434-2.128-.29-.532-.784-.798-1.484-.798s-1.195.266-1.484.798c-.29.523-.434 1.232-.434 2.128v1.652c0 .896.144 1.61.434 2.142.289.523.784.784 1.484.784zm10.424-3.542l.042-2.94h-.112l-1.96 5.026-1.96-5.026h-.112l.042 2.94V61h-1.386v-9.772h1.918l1.498 3.878h.098l1.512-3.878h1.806V61h-1.386v-4.676zM547.652 61l-.742-2.604h-3.108L543.06 61h-1.596l2.856-9.772h2.142L549.318 61h-1.666zm-2.24-8.19h-.112l-1.204 4.284h2.52l-1.204-4.284zm5.286 8.19v-1.19h2.296v-7.392h-2.296v-1.19h6.16v1.19h-2.296v7.392h2.296V61h-6.16zm9.781-7.518h-.126V61h-1.372v-9.772h2.016l2.87 7.518h.126v-7.518h1.372V61h-2.016l-2.87-7.518zm6.728 10.024V62.19h6.72v1.316h-6.72zm8.717-12.278h3.374c.886 0 1.572.229 2.058.686.494.457.742 1.083.742 1.876 0 .57-.14 1.022-.42 1.358-.28.336-.658.574-1.134.714v.07c.569.13 1.026.383 1.372.756.345.364.518.882.518 1.554 0 .401-.066.77-.196 1.106-.131.336-.318.63-.56.882a2.63 2.63 0 01-.882.574c-.336.13-.71.196-1.12.196h-3.752v-9.772zm3.276 8.568c.522 0 .924-.107 1.204-.322.28-.215.42-.56.42-1.036v-.504c0-.476-.14-.821-.42-1.036-.28-.215-.682-.322-1.204-.322h-1.736v3.22h1.736zm-.224-4.368c.494 0 .868-.093 1.12-.28.261-.196.392-.518.392-.966v-.504c0-.448-.131-.765-.392-.952-.252-.196-.626-.294-1.12-.294h-1.512v2.996h1.512zM130.204 240v-9.772h6.286v1.316h-4.718v2.842h4.284v1.316h-4.284V240h-1.568zm8.395 0v-9.772h6.118v1.316h-4.55v2.842h4.382v1.316h-4.382v2.982h4.55V240h-6.118zm12.174-8.456V240h-1.568v-8.456h-3.066v-1.316h7.7v1.316h-3.066zm7.891 8.624c-1.242 0-2.166-.439-2.772-1.316-.598-.877-.896-2.123-.896-3.738 0-1.615.298-2.861.896-3.738.606-.877 1.53-1.316 2.772-1.316.476 0 .886.065 1.232.196.354.121.658.294.91.518.252.215.462.471.63.77.177.289.322.602.434.938l-1.414.476a5.663 5.663 0 00-.252-.63 1.812 1.812 0 00-.35-.504 1.589 1.589 0 00-.504-.336 1.708 1.708 0 00-.7-.126c-.691 0-1.195.266-1.512.798-.318.523-.476 1.232-.476 2.128v1.652c0 .896.158 1.61.476 2.142.317.523.821.784 1.512.784.28 0 .513-.042.7-.126.196-.084.364-.196.504-.336s.256-.308.35-.504c.093-.196.177-.406.252-.63l1.414.476a4.912 4.912 0 01-.434.952 3.127 3.127 0 01-.63.77 2.98 2.98 0 01-.91.518c-.346.121-.756.182-1.232.182zm9.738-4.466h-3.248V240h-1.568v-9.772h1.568v4.158h3.248v-4.158h1.568V240h-1.568v-4.298zM80.354 193.646a.5.5 0 00-.708 0l-3.181 3.182a.501.501 0 00.707.708L80 194.707l2.828 2.829a.5.5 0 00.707-.708l-3.181-3.182zM80.5 264v-70h-1v70h1zM219.646 264.354a.502.502 0 00.708 0l3.182-3.182a.502.502 0 00-.708-.708L220 263.293l-2.828-2.829a.502.502 0 00-.708.708l3.182 3.182zM219.5 194v70h1v-70h-1zM400.354 72.354a.5.5 0 000-.708l-3.182-3.181a.501.501 0 00-.708.707L399.293 72l-2.829 2.828a.5.5 0 00.708.707l3.182-3.181zM300 72.5h100v-1H300v1zM299.646 183.646a.502.502 0 000 .708l3.182 3.182a.502.502 0 00.708-.708L300.707 184l2.829-2.828a.502.502 0 00-.708-.708l-3.182 3.182zM400 183.5H300v1h100v-1zM312.48 133.168c-1.241 0-2.165-.439-2.772-1.316-.597-.877-.896-2.123-.896-3.738 0-1.615.299-2.861.896-3.738.607-.877 1.531-1.316 2.772-1.316.476 0 .887.065 1.232.196.355.121.658.294.91.518.252.215.462.471.63.77.177.289.322.602.434.938l-1.414.476a5.663 5.663 0 00-.252-.63 1.791 1.791 0 00-.35-.504 1.589 1.589 0 00-.504-.336 1.708 1.708 0 00-.7-.126c-.691 0-1.195.266-1.512.798-.317.523-.476 1.232-.476 2.128v1.652c0 .896.159 1.61.476 2.142.317.523.821.784 1.512.784.28 0 .513-.042.7-.126.196-.084.364-.196.504-.336s.257-.308.35-.504c.093-.196.177-.406.252-.63l1.414.476a4.912 4.912 0 01-.434.952 3.127 3.127 0 01-.63.77 2.968 2.968 0 01-.91.518c-.345.121-.756.182-1.232.182zm8.115 0c-.616 0-1.153-.112-1.61-.336a3.082 3.082 0 01-1.12-.994c-.29-.429-.504-.957-.644-1.582-.14-.625-.21-1.339-.21-2.142 0-.793.07-1.503.21-2.128.14-.635.354-1.167.644-1.596a2.965 2.965 0 011.12-.98c.457-.233.994-.35 1.61-.35.616 0 1.148.117 1.596.35.457.224.83.551 1.12.98.298.429.518.961.658 1.596.14.625.21 1.335.21 2.128 0 .803-.07 1.517-.21 2.142-.14.625-.36 1.153-.658 1.582-.29.429-.663.761-1.12.994-.448.224-.98.336-1.596.336zm0-1.302c.7 0 1.194-.261 1.484-.784.289-.532.434-1.251.434-2.156v-1.638c0-.896-.145-1.605-.434-2.128-.29-.532-.784-.798-1.484-.798s-1.195.266-1.484.798c-.29.523-.434 1.232-.434 2.128v1.652c0 .896.144 1.61.434 2.142.289.523.784.784 1.484.784zm6.924 1.134h-1.554v-9.772h3.654c.933 0 1.643.261 2.128.784.495.523.742 1.241.742 2.156 0 .747-.182 1.363-.546 1.848-.364.485-.887.784-1.568.896l2.254 4.088h-1.736l-2.072-3.948h-1.302V133zm1.876-5.208c.971 0 1.456-.443 1.456-1.33v-.602c0-.887-.485-1.33-1.456-1.33h-1.876v3.262h1.876zm7.905 5.376c-.85 0-1.564-.149-2.142-.448a4.13 4.13 0 01-1.428-1.19l1.008-.966c.373.448.77.779 1.19.994.42.205.896.308 1.428.308.616 0 1.087-.14 1.414-.42.336-.28.504-.681.504-1.204 0-.42-.122-.742-.364-.966-.243-.233-.658-.401-1.246-.504l-1.064-.168c-.467-.075-.859-.196-1.176-.364a2.72 2.72 0 01-.77-.616 2.467 2.467 0 01-.434-.798 3.448 3.448 0 01-.126-.938c0-.924.298-1.624.896-2.1.597-.485 1.418-.728 2.464-.728.774 0 1.432.126 1.974.378.55.243.994.588 1.33 1.036l-.98.98a3.14 3.14 0 00-.966-.784c-.364-.205-.817-.308-1.358-.308-.579 0-1.022.126-1.33.378-.299.243-.448.602-.448 1.078 0 .401.116.719.35.952.242.224.667.387 1.274.49l1.036.182c.877.159 1.516.481 1.918.966.401.476.602 1.059.602 1.75 0 .448-.08.859-.238 1.232-.15.373-.378.691-.686.952a3.23 3.23 0 01-1.12.616c-.439.14-.943.21-1.512.21zm13.877-.168v-9.772h6.118v1.316h-4.55v2.842h4.382v1.316h-4.382v2.982h4.55V133h-6.118zm9.92 0h-1.554v-9.772h3.654c.934 0 1.643.261 2.128.784.495.523.742 1.241.742 2.156 0 .747-.182 1.363-.546 1.848-.364.485-.886.784-1.568.896l2.254 4.088h-1.736l-2.072-3.948h-1.302V133zm1.876-5.208c.971 0 1.456-.443 1.456-1.33v-.602c0-.887-.485-1.33-1.456-1.33h-1.876v3.262h1.876zm6.519 5.208h-1.554v-9.772h3.654c.933 0 1.642.261 2.128.784.494.523.742 1.241.742 2.156 0 .747-.182 1.363-.546 1.848-.364.485-.887.784-1.568.896l2.254 4.088h-1.736l-2.072-3.948h-1.302V133zm1.876-5.208c.97 0 1.456-.443 1.456-1.33v-.602c0-.887-.486-1.33-1.456-1.33h-1.876v3.262h1.876zm7.988 5.376c-.616 0-1.152-.112-1.61-.336a3.09 3.09 0 01-1.12-.994c-.289-.429-.504-.957-.644-1.582-.14-.625-.21-1.339-.21-2.142 0-.793.07-1.503.21-2.128.14-.635.355-1.167.644-1.596a2.972 2.972 0 011.12-.98c.458-.233.994-.35 1.61-.35.616 0 1.148.117 1.596.35a2.83 2.83 0 011.12.98c.299.429.518.961.658 1.596.14.625.21 1.335.21 2.128 0 .803-.07 1.517-.21 2.142-.14.625-.359 1.153-.658 1.582a2.937 2.937 0 01-1.12.994c-.448.224-.98.336-1.596.336zm0-1.302c.7 0 1.195-.261 1.484-.784.29-.532.434-1.251.434-2.156v-1.638c0-.896-.144-1.605-.434-2.128-.289-.532-.784-.798-1.484-.798s-1.194.266-1.484.798c-.289.523-.434 1.232-.434 2.128v1.652c0 .896.145 1.61.434 2.142.29.523.784.784 1.484.784zm6.925 1.134h-1.554v-9.772h3.654c.933 0 1.642.261 2.128.784.494.523.742 1.241.742 2.156 0 .747-.182 1.363-.546 1.848-.364.485-.887.784-1.568.896l2.254 4.088h-1.736l-2.072-3.948h-1.302V133zm1.876-5.208c.97 0 1.456-.443 1.456-1.33v-.602c0-.887-.486-1.33-1.456-1.33h-1.876v3.262h1.876z"
            fill="currentColor"
          />
        </svg>
      )}
    />
  );
};