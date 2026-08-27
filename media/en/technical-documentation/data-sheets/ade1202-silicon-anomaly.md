<!-- lastmod 2020-01-07 -->
<!-- image -->

Silicon Anomaly

This anomaly list describes the known bugs, anomalies, and workarounds for the ADE1202 silicon.

Analog Devices, Inc., is committed, through future silicon revisions, to continuously improve silicon functionality. Analog Devices tries to ensure that these future silicon revisions remain compatible with your present software/systems by implementing the recommended workarounds outlined here.

## ADE1202 FUNCTIONALITY ISSUES

|   Silicon Revision Identifier | Silicon Status   | Anomaly Sheet   |   Number of Reported Anomalies |
|-------------------------------|------------------|-----------------|--------------------------------|
|                             4 | Released         | Rev. 0          |                              1 |

Note that Silicon Revision Identifier 4 can be read from the REVID bitfield in Register CTRL.

## Dual Channel, Configurable, Isolated Digital Input

[ADE1202](https://www.analog.com/ADE1202?doc=ADE1202-silicon-anomaly.pdf)

<!-- image -->

## FUNCTIONALITY ISSUES

## Table 1. System Level EMC Weakness [er001]

| Background   | The pass/fail criteria for digital inputs is that the DOUTx pins operate as expected in the following circumstances: When the input is asserted, the DOUTx pins go high within the programmed filter time.                                                                                                                                                                                                    |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Issue        | The successive approximation register (SAR) analog-to-digital converter (ADC) multiplexes between sampling the IN1 and IN2 inputs at 100 kSPS with the results going into the ADC1 register and ADC2 register, respectively, every 50 kSPS. Under some conditions, the ADC1 and ADC2 outputs from the ADE1202 may be temporarily swapped. The system typically recovers from this issue within a few samples. |
|              | Conditions that can cause this issue include the following:                                                                                                                                                                                                                                                                                                                                                   |
|              | High levels of RF noise.                                                                                                                                                                                                                                                                                                                                                                                      |
|              | Electrical fast transients.                                                                                                                                                                                                                                                                                                                                                                                   |
|              | Common-mode noise higher than 50 kV/µs.                                                                                                                                                                                                                                                                                                                                                                       |
|              | The digital filter used in the digital input application to generate the DOUTx pin voltage, configured in the BIN_FILTER register, filters out these glitches as long as the length of the disturbance is less than the filter time and the up/down mode is selected.                                                                                                                                         |
|              | This error cannot be observed by reading a register. However, the COMFLT bit in the STATUS register may be set when this error occurs. If the IN1 and IN2 analog inputs are at the same level, this phenomenon is not visible.                                                                                                                                                                                |
|              | For applications using the ADC samples directly, implement debouncing in the software to reject the erroneous swapped ADC1 register and ADC2 register values.                                                                                                                                                                                                                                                 |
| Workaround   | To mitigate the risk of the system level electromagnetic compatibility (EMC) from swapping the ADCx outputs, sample the DOUTx pin voltage instead of the ADCx register values in the application (if possible), and then increase the BIN_FILTER time to 1 ms or greater and select up/down mode instead of up/clear mode.                                                                                    |

<!-- image -->