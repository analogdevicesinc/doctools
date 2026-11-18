LLM Agent
=========

Runs a [pi](https://pi.dev) agent review on a branch, tag, PR number, or SHA.

Usage:

```
- uses: analogdevicesinc/doctools/llm@action
  with:
    ref: ${{ inputs.ref }}
    prompt-file: ${{ env.prompt_file }}
    api-key: ${{ secrets.PORTKEY_API_KEY }}
    skills: |
      if_base_ref="*recipes*" remote=org/repo@skills skill="cooking"
```

Skills
------

Extra skills from shallow, sparse git clones, one per line, as key=value pairs:

```
remote=<org/repo|git url>[@<branch|tag>] skill=<path> [if_<var>=<glob>...]
```

For example:

```
if_base_ref="*adsp*" remote=org/repo@skills skill="adsp"
```

`org/repo` expands to `https://github.com/org/repo`; without `@<ref>`,
the default branch is cloned.
Conditions match environment variables, such as `base_ref` set by checkout.
Without conditions (default `'*'`), the skill is always loaded.
