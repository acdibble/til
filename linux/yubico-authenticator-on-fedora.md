# Yubico Authenticator on Fedora

To get Yubico Authenticator to recognize your key on Fedora, you need a package
called `pcscd`, which is available via `dnf` under `pcsc-lite`.

```shell
$ sudo dnf install pcsc-lite
$ sudo service pcscd start
```

Yubico Authenticator should now find your Yubikey.
