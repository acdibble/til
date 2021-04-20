# Killing other ssh connections

A list of current ssh connections can be found using the `who` or `w`, the
latter providing more info:

```bash
$ w
 09:40:18 up 16:20,  2 users,  load average: 0.00, 0.00, 0.00
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     pts/0    69.240.215.252   09:34    5:58   0.04s  0.04s -bash
root     pts/1    69.240.215.252   09:21    0.00s  0.06s  0.00s w
```

To disconnect another ssh session you can use `pstree -p` to list current
running processes in a tree format with their PIDs:

```bash
$ pstree -p
systemd(1)───sshd(822)─┬─sshd(7275)───bash(7352)───pstree(8338)
                       └─sshd(7996)───bash(8073)
```

The current session can be found by determining which sshd (ssh daemon, i.e. a
single ssh connection) process is currently running `pstree`.
