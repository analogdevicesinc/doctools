Workflow run to context
=======================

Tastefully convert a 'workflow_run.url' from a 'workflow_run' webhook into a series data.
The use case is to activate downstream tests, based on the repository + touched files.

For example:
https://api.github.com/repos/analogdevicesinc/linux/actions/runs/26873974794 (pull request)
outputs:
```
{
  "owner": "analogdevicesinc",
  "repository": "linux",
  "branch": "mirror_ci/jic23/iio/testing",
  "head_sha": "010c31d76bfb49bb2c53cc4cb9a0ae63031a6ead",
  "base_sha": "ae8360f3715aa61714864fc81f39790cbb883d40",
  "changed_files": "Documentation/ABI/testing/sysfs-bus-iio\nDocumentation/devicetree/bindings/iio/dac/adi,ad3530r.yaml\ndrivers/iio/dac/Kconfig\ndrivers/iio/dac/ad3530r.c",
  "pr": "3177",
  "state": "",
  "is_fork": "",
  "merge_commit_sha": "",
  "base_branch_head_sha": "83e04bccee664e7f526c56bfab33eb84903ee848"
}
```

and
https://api.github.com/repos/analogdevicesinc/linux/actions/runs/26882970726 (push)
outputs
```
{
  "owner": "analogdevicesinc",
  "repository": "linux",
  "branch": "main",
  "head_sha": "779ef3851915d7b198a31c8a6e44f5aebe136e83",
  "base_sha": "a11ce39b724ecb4b32dc3ff471d826989d3eefc6",
  "changed_files": "arch/arm64/boot/dts/xilinx/vu11p-ad9084-vpx-reva-204C_M4_L8_NP16_8p0_4x2.dtso arch/arm64/boot/dts/xilinx/vu11p-ad9084-vpx-reva.dtso arch/arm64/boot/dts/xilinx/vu11p-ad9084-vpx-revb-204C_M4_L4_NP16_8p0_2x2.dtso arch/arm64/boot/dts/xilinx/vu11p-ad9084-vpx-revb-204C_M4_L8_NP16_8p0_4x2.dtso arch/arm64/boot/dts/xilinx/vu11p-ad9084-vpx-revb.dtso",
  "pr": "",
  "state": "",
  "is_fork": "",
  "merge_commit_sha": "",
  "base_branch_head_sha": ""
}

```

Usage:

```
on:
  workflow_dispatch:
    inputs:
      workflow_run_url:
        description: "The api url of the workflow_run"
        required: true
        type: string

jobs:
  checks:
    runs-on: ubuntu-slim

    steps:
    - uses: analogdevicesinc/doctools/workflow-run-to-context@action
      id: context
      with: ${{ inputs.workflow_run_url }}

    - name: Debug
      env:
        context: ${{ toJson(steps.context.outputs) }}
      run: |
        echo "$context"
```

