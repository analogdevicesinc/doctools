<!-- lastmod 2022-08-03 -->
## General Description

The MAX9928 evaluation kit (EV kit) provides a proven design to evaluate the MAX9928 uni-/bidirectional, highside, current-sense amplifier, which offers precision accuracy specifications of VOS &lt; 400µV and gain error &lt; 1.0%. This EV kit demonstrates the MAX9928 in an ultrasmall, 1mm x 1.5mm x 0.6mm, 6-bump UCSP™ package. The MAX9928 is also available in an 8-pin µMAX ® , but that package is not compatible with this EV kit.

The MAX9928 EV kit PCB comes with a MAX9928FABT+ installed, which is the 5µA/mV gain version. The MAX9928 EV kit can also be used to evaluate the MAX9928T, MAX9929F, and MAX9929T (2µA/mV, 50V/V, and 20V/V, respectively). This EV kit can also evaluate the MAX4372 in a footprint-compatible UCSP package. Contact the factory for free samples of the pin-compatible MAX9928TABT+, MAX9929FABT+, or MAX9929TABT+ devices.

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| CIN, COUT     |     0 | Not installed, capacitors (0603)                                     |
| C3            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K   |
| C4            |     1 | 1µF ±10%, 50V X5S ceramic capacitor (0603) Taiyo Yuden UMK107C5105KA |

<!-- image -->

## MAX9928 Evaluation Kit

Features

- ♦ Precision Real-Time Current Monitoring
- ♦ -0.1V to +28V Input Common-Mode Range
- ♦ Evaluates MAX9928, MAX9929, and MAX4372
- ♦ VOS &lt; 0.4mV; Gain Error &lt; 1%
- ♦ SIGN Bit to Show Charge/Discharge Current Flow
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9928EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| RSENSE        |     1 | 0.1 ±1%, 1/2W sensing resistor (1206) Vishay/Dale WSL1206R1000FEB18 |
| RIN1, RIN2    |     0 | Not installed, resistors-short                                      |
| ROUT          |     1 | 10k ±1% resistor (0603)                                             |
| U1            |     1 | Precision current-sense amplifier (6 UCSP) Maxim MAX9928FABT+       |
| -             |     1 | PCB: MAX9928 Evaluation Kit+                                        |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX9928 when contacting these component suppliers.

UCSP is a trademark and µMAX is a registered trademark of Maxim Integrated Products, Inc.

## MAX9928 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX9928 EV kit
- 5V/10mA DC power supply
- 12V/1A DC power supply
- An electronic load capable of sinking 800mA (e.g., HP 6060B)
- Two digital voltmeters

## Procedure

The MAX9928 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply or the electronic load until all connections are completed.

- 1) Connect the positive terminal of the 5V supply to the VCC pad. Connect the negative terminal of the 5V supply to the GND pad.
- 2) Connect the positive terminal of the 12V supply to the RS+ pad. Connect the negative terminal of the 12V supply to the GND pad.
- 3) Set the electronic load to sink 500mA.
- 4) Connect the electronic load's positive terminal to the RS- pad and the negative terminal to the GND pad.
- 5) Connect the first voltmeter across the OUT and the GND pads.
- 6) Connect the second voltmeter across the SIGN and the GND pads.
- 7) Turn on the power supplies.
- 8) Turn on the electronic load.
- 9) Verify that the OUT voltmeter reading is approximately 2.5V and the SIGN voltmeter is approximately 5V. Take care not to load the internal 1M Ω pullup resistor on the SIGN pin when measuring this voltage.

## Detailed Description of Hardware

The MAX9928 evaluation kit (EV kit) provides a proven design to evaluate the MAX9928 uni-/bidirectional, high-side, current-sense amplifier, which offers precision accuracy specifications of VOS &lt; 400µV and gain error &lt; 1.0%.

## Output Voltage Calculation

The MAX9928 EV kit is installed with a MAX9928FABT+, which has a gain of 5µA/mV. The current-sense resistor (RSENSE) value is 0.1 Ω with ±1% tolerance. The VOUT is given by:

VOUT = ILOAD x RSENSE x Gm x ROUT

where Gm is the gain and ILOAD is the current load applied to the device. Vary ROUT to change the effective voltage gain.

Applying VCC and VRS+ Supply Voltages The normal operating range for VCC is 2.5V to 5.5V for MAX9928/MAX9929. The normal operating range for VCC is 2.7V to 28V for MAX4372.

The normal input common-mode range at VRS+ and VRS- is -0.1V to +28V for MAX9928/MAX9929. The MAX4372 operates with an input range of 0V to 28V, but the total OUT error at 0V can be up to 28%.

## Measuring the Load Current

The load current is measured as a voltage drop (VSENSE) across an external sense resistor. This voltage is then amplified by the current-sense amplifier and presented as a current at its output pin and converted to a voltage by ROUT. Like all differential amplifiers,  the  output  voltage  has  two  components  of  error: an offset error and a gain error. The offset error affects accuracy at small VSENSE and a gain error affects accuracy at large VSENSE. By minimizing both offset and gain errors, accuracy can be optimized over a wide dynamic range.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Evaluating SIGN Output for MAX9928/MAX9929

The MAX9928 and MAX9929 have a digital SIGN output to indicate the direction of the load current flow (charge vs. discharge current for a battery).

To evaluate current flowing in the opposite direction, swap the position of the 12V supply and the electronic load (connect the 12V supply to RS- and connect the electronic load to RS+). Verify that the OUT voltmeter still  reads  approximately  2.5V  and  the  SIGN  voltmeter has changed to 0V.

## MAX9928 Evaluation Kit

## Evaluating MAX9929 or MAX4372

The MAX9929 and MAX4372 are voltage output devices with an internal 10k Ω ROUT resistor. When evaluating these devices, leave the MAX9928 EV kit ROUT open.

Refer to the MAX9928/MAX9929 IC data sheet and/or the MAX4372 IC data sheet for more information.

<!-- image -->

Figure 1. MAX9929F EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9928 Evaluation Kit

<!-- image -->

Figure 2. MAX9928 EV Kit Component Placement GuideComponent Side

Figure 3. MAX9928 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9928 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_