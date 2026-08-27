<!-- lastmod 2022-08-03 -->
## General Description

The MAX9610 evaluation kit (EV kit) provides a proven design to evaluate the MAX9610 high-side currentsense amplifier, which offers precision accuracy specifications  of  VOS less than 500µV (max) and gain error less than 0.5% (max). This EV kit demonstrates the MAX9610 in a tiny 1mm x 1.5mm x 0.8mm, 6-pin µDFN package. The MAX9610 is also available in a 5-pin SC70, but that package is not compatible with this EV kit.

The MAX9610 EV kit PCB comes with a MAX9610FELT+ installed,  which is  the  50V/V  gain  version.  Contact the factory  for  free  samples  of  the  pin-compatible MAX9610TELT+ and MAX9610HELT+, which are 25V/V and 100V/V gain versions, respectively.

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ±10%, 50V X7R ceramic capacitor (1206) Murata GRM31MR71H105KA TDK C3216X7R1H105K |
| C2            |     0 | Not installed, ceramic capacitor (0603)                                              |
| R1            |     1 | 0.05 ±0.5%, 0.5W 4-terminal current-sense resistor (1206) Ohmite LVK12R050DER        |

<!-- image -->

## MAX9610 Evaluation Kit

Features

- ♦ Precision Current Monitoring
- ♦ Multiple Fixed Gains Available 25V/V (MAX9610T) 50V/V (MAX9610F) 100V/V (MAX9610H)
- ♦ 1.6V to 5.5V Input Common-Mode Range
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9610EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| TP1, TP2      |     2 | Test points                                                   |
| U1            |     1 | Precision current-sense amplifier (6 µDFN) Maxim MAX9610FELT+ |
| -             |     1 | PCB: MAX9610 Evaluation Kit+                                  |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Ohmite Mfg. Co.                        | 866-964-6483 | www.ohmite.com              |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX9610 when contacting these component suppliers.

1

## MAX9610 Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX9610 EV kit
- 3.6V, 1A DC power supply
- An electronic load capable of sinking 800mA (e.g., HP 6060B)
- Two digital voltmeters

## Procedure

The MAX9610 EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply or the electronic load until all connections are completed.

- 1) Connect the negative terminal of the 3.6V supply to the GND pad closest to the VBATT pad and the positive terminal of the supply to the VBATT pad.
- 2) Set the electronic load to sink 800mA.
- 3) Connect the electronic load's negative terminal to the GND pad closest to the bottom of the EV kit and the positive terminal to the LOAD pad.
- 4) Connect the first voltmeter across test points TP1 and TP2 to measure VSENSE.
- 5) Connect the second voltmeter across the closest GND pad and the VOUT pad.
- 6) Turn on the power supply.
- 7) Turn on the electronic load.
- 8) Verify  that  the  first  voltmeter  reading  is  approximately 40mV and the second voltmeter is approximately 2V.

## Detailed Description of Hardware

The MAX9610 evaluation kit (EV kit) evaluates the MAX9610 unidirectional high-side, current-sense amplifier, which features a 1.6V to 5.5V input common-mode range. The input range is excellent for monitoring the current of a single-cell lithium-ion (Li+) battery, which at full  charge  is  4.2V,  typically  3.6V  in  normal  use,  and less than 2.9V when ready to be recharged.

## Applying the VRS+ Supply and the Load

The EV kit is installed with a MAX9610FELT+, which has a gain of 50V/V. The current-sense resistor (RSENSE) value is 0.05 Ω with ± 0.5% tolerance. The VOUT is given by:

VOUT = ILOAD x RSENSE x AV

where AV is the gain and ILOAD is the current load applied to the device.

Normal operating VRS+ and VRS- range is 1.6V to 5.5V.

## Measuring the Load Current

The load current is measured as a voltage drop (VSENSE) across an external sense resistor. This voltage is then amplified by the current-sense amplifier and presented at the VOUT pad. Like all differential amplifiers,  the  output  voltage  has  two  components of error (an offset error and a gain error). The offset error affects accuracy at low currents and the gain error affects  accuracy at large currents-both errors affect accuracy at intermediate currents. By minimizing both offset  and  gain  errors,  accuracy is optimized over a wide dynamic range.

## Evaluating Other Gain Versions

The MAX9610 EV kit can also be used to evaluate other gain versions of the MAX9610 (25V/V or 100V/V = T or H suffix, respectively). Replace U1 of the MAX9610 EV kit with a different version of the MAX9610.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9610 Evaluation Kit

Figure 1. MAX9610 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9610 Evaluation Kit

<!-- image -->

Figure 2. MAX9610 EV Kit Component Placement GuideComponent Side

Figure 3. MAX9610 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9610 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4