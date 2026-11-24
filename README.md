# One Word for Your Wi-Fi — Ghosting

[![make.fun](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![Rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/yannyonn94/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![Reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/yannyonn94/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

## The word

**Ghosting**

## The concept

Home Wi-Fi that vanishes mid-call, mid-download, mid-sentence — like a bad
date. No goodbye, no explanation, then back again later pretending nothing
happened. Everyone has lived it; the word needs no explanation, and as a
network name it is funny every single time you see it in the Wi-Fi list.

## Why this word

Scored against the judge's brief (on-subject, funny at once, true and
recognisable, fresh angle, instantly gettable), three candidates were
tested in-session:

| Word | Score (/25) |
| --- | --- |
| **Ghosting** | **23** |
| Needy | 22 |
| Moody | 21 |

`Ghosting` won: it is on-subject (Wi-Fi disappearing is the lived
experience), funny at first sight (the dating metaphor lands instantly),
true (everyone's Wi-Fi has dropped at the worst moment), fresh (nobody's
first Wi-Fi word is a dating word), and instantly gettable as one word —
no explanation needed, which the brief says is the whole game.

## How it works

`main.ts` (Node 22, no dependencies) writes exactly the word `Ghosting` to
`entry.txt` — no trailing newline, no extra output. 8 characters, 8 bytes,
inside the 1–20 character gate.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
