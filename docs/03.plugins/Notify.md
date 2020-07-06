# Notify

Notify is a FSG plugin that can display animated messages (floating above everything in your pages) to users in the form of a notification. They are useful for alerting the user of an event and can even engage the user through actions. Also known as a toast or snackbar.

## Instalation

```
/*
 * No installation step is necessary.
 * It gets installed by default.
 */
```

## Usage

### Basic

```js
// outside of a Vue file
import { Notify } from '@doc88/flux-style-guide'

Notify.create('Run! Berry, run!')
// or with a config object:
Notify.create({
  message: 'Run! Berry, run!'
})

// inside of a Vue file
this.$f.notify('Message')
// or with a config object:
this.$f.notify({...})
```

@[example](NotifyBasic)

### With caption

@[example](NotifyCaption)

### With Icon or Avatar

@[example](NotifyIconAvatar)

### With actions

@[example](NotifyActions)

### Multline

@[example](NotifyMultiline)

### Grouping

Each notification has an underlying unique group which is computed out of the message + caption + multiLine + actions labels + position. When multiple notifications get triggered with the same group, instead of showing all of them and flooding the view, only the first one remains on screen along with a badge. The badge content represents the number of times that the same notification has been triggered (and with same position) since the first one appeared on screen.

However, if you wish to disable this behavior, specify group: false. In the example below, the first button triggers the same notification twice each time is clicked. The second button has grouping disabled. The third button, however, has a custom group name so each subsequent notification replaces the old one and increments the badge number.

@[example](NotifyGrouping)

### Timeout progress

Should you wish, there is a way to tell the user when the notification will disappear from the screen. That’s for the cases when timeout is not set to 0.

@[example](NotifyTimeout)

### Using HTML

You can use HTML on message if you specify the html: true prop. Please note that this can lead to XSS attacks, so make sure that you sanitize the message by yourself.

@[example](NotifyHtml)

### Programmatically closing

Notifications are meant to be dismissed only by the user, however for exceptional cases you can do it programmatically. Especially useful when you set indefinite timeout (0).
```js
const dismiss = this.$q.notify({...})
...
dismiss()
```

## Notify API

### Injection

```js
$f.notify
```