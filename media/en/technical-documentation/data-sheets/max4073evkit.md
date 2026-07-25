<!-- lastmod 2022-08-03 -->
## General Description

The MAX4073 evaluation kit (EV kit) is an assembled and tested PCB used to evaluate the MAX4073 highside current-sense amplifier, which is designed for lowcost,  compact, current-sense applications. The EV kit has a 2V to 28V input common-mode sense-voltage range that is independent of the supply voltage. The EV kit  comes assembled with the MAX4073F IC (internal gain = 50V/V), but can also evaluate the MAX4073T/ MAX4073H (internal gains of 20/100, respectively) ICs.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4073EVKIT+ | EV Kit |

| DESIGNATION    |   QTY | DESCRIPTION                                                                            |
|----------------|-------|----------------------------------------------------------------------------------------|
| C1, C5         |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K TDK C1608X7R1H104K |
| C2, C4, C7, C8 |     0 | Not installed, capacitors (0603)                                                       |
| C3, C6         |     2 | 1µF ±10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H105K TDK C2012X7R1H105K   |
| RS+, RS-       |     2 | Test points                                                                            |

<!-- image -->

## MAX4073 Evaluation Kit

Features

- ♦ High-Side Current Sensing
- ♦ Multiple Fixed Gains Available 20V/V (MAX4073T) 50V/V (MAX4073F) 100V/V (MAX4073H)
- ♦ 3V to 28V Operating Supply (VCC)
- ♦ 2V to 28V Common-Mode Range Independent of Supply Voltage
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| R1            |     1 | 0.07 Ω ±1% current-sense resistor (1206) Vishay/Dale WSL1206R0700FEB |
| R2, R3        |     0 | Not installed, resistors-short (PC trace) (0603)                     |
| U1            |     1 | High-side current-sense amplifier (5 SC70) Maxim MAX4073FAXK+        |
| -             |     1 | PCB: MAX4073 Evaluation Kit+                                         |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-564-3131 | www.vishay.com              |

Note: Indicate that you are using the MAX4073 when contacting these component suppliers.

1

## MAX4073 Evaluation Kit

## Quick Start

## Recommended Equipment

- 12V, 1A power supply (VBAT)
- 5V power supply (VCC)
- Electronic load capable of sinking 1A
- Digital voltmeter (DVM)

## Procedure

The MAX4073 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supplies until all connections are completed.

- 1) Set the input power supply to 12V. Connect the ground of the power supply to the GND pad and connect the positive terminal to the VSOURCE pad.
- 2) Set the VCC power supply to 5V. Connect the ground of the VCC supply to the GND pad and connect the positive terminal to the VCC pad.
- 3) Set the electronic load to sink 1A.
- 4) Connect the electronic load's ground to the GND pad. Connect the load's positive terminal to the LOAD pad.
- 5) Connect the DVM across the OUT pad and the GND pad.
- 6) Turn on the 5V power supply.
- 7) Turn on the 12V power supply.
- 8) Adjust the electronic load current (ISENSE) between 0A and 1A and verify that VOUT is proportional to VSENSE according to the following equation:

<!-- formula-not-decoded -->

where VSENSE = ISENSE x R1 and AV is the gain of the device (50V/V for MAX4073F).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description of Hardware

The MAX4073 EV kit is a current-sense amplifier that measures the load current and provides an analog voltage output. The EV kit is installed with a MAX4073FAXK+, which has a gain of 50V/V. With the installed currentsense resistor (RSENSE) value of 0.07 Ω , and a full-scale I SENSE of 1A, the full-scale VSENSE is set to 70mV. The VOUT is given by:

VOUT = AV x RSENSE x ISENSE

where ISENSE is the load current and AV is the gain of the device. Set the full-scale output range by selecting RSENSE and the appropriate gain version of the MAX4073.

## Measuring the Load Current

The load current is measured as a voltage drop (VSENSE) across an external sense resistor. This voltage is then amplified by the current-sense amplifier and presented at the OUT pad. Like all differential amplifiers,  the  output  voltage  has  two  components of error (an offset error and a gain error). The offset error affects accuracy at low currents and the gain error affects  accuracy at large currents-both errors affect accuracy at intermediate currents. By minimizing both offset  and  gain  errors,  accuracy is optimized over a wide dynamic range.

## Evaluating Other Gain Versions

The MAX4073 EV kit can be used to evaluate other gain versions of the MAX4073 (20V/V, 100V/V = T, H suffix). Replace U1 with a different version of the MAX4073 and refer to Table 1. Recommended Component Values in the MAX4073 IC data sheet for additional information.

<!-- image -->

## MAX4073 Evaluation Kit

Figure 1. MAX4073 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4073 Evaluation Kit

<!-- image -->

Figure 2. MAX4073 EV Kit Component Placement GuideComponent Side

Figure 3. MAX4073 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX4073 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4