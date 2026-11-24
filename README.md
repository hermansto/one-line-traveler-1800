[![make.fun · u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/hermansto/one-line-traveler-1800/rank.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/leaderboard)
[![reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/hermansto/one-line-traveler-1800/reward.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

# One Sentence for a Traveler from 1800

One sentence, under 200 characters, explaining the modern internet to a time traveler from the year 1800 — using only words that existed in 1800.

> Imagine a great web of copper wire and glass that lets any man send a letter to any other man in the world in the blink of an eye, and read every book ever writ from his own chair.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/traveler-1800-out node main.ts
cat /tmp/traveler-1800-out/entry.txt
```

`main.ts` writes the sentence to `entry.txt` in the output directory only, then reads it back and verifies it matches exactly.
