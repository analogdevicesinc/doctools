<!-- lastmod 2022-08-03 -->
## General Description

The MAX4080 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) that contains a MAX4080SAUA (8-pin µMAX ® ) IC. The MAX4080 is a high-side, current-sense amplifier with an input common-mode voltage range that extends from 4.5V to 76V. The current-sense amplifier provides an analog voltage output proportional to the load current flowing through an external sense resistor.

The EV kit can also be used to evaluate the MAX4081, which is a bidirectional version of the current-sense amplifier. The MAX4081's single output pin continuously monitors the transition from charge to discharge and avoids the need for a separate polarity output pin. The MAX4081 requires an external reference to set the zerocurrent output level (VSENSE = 0V). Charging current is represented by an output voltage from VREF to VCC, while discharge current is given from VREF to GND.

All  gain  versions  of  the  MAX4080 and MAX4081 are footprint-compatible and the MAX4080SAUA can easily be replaced by a MAX4080FAUA, MAX4080TAUA, MAX4081FAUA, MAX4081TAUA, or MAX4081SAUA. With a combination of three gain versions (5V/V, 20V/V, 60V/V = F, T, S suffix) and a user-selectable, external sense resistor, the user can easily match the full-scale load current to the required output-voltage range.

For maximum versatility, these parts can operate with 76V input common-mode voltage at RS+ and RS- pins, independent of operating supply voltage (VCC) used. These parts also allow a large differential voltage between RS+ and RS- pins for high reliability. High-side current monitoring does not interfere with the ground path  of  the  load  being  measured,  making  the MAX4080/MAX4081 particularly useful in a wide range of high-voltage systems.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

## Features

- ♦ Real-Time Current Monitoring
- ♦ Wide 4.5V to 76V Input Common-Mode Range Independent of Operating Supply Voltage
- ♦ Bidirectional or Unidirectional ISENSE
- ♦ ±0.1% Full-Scale Accuracy
- ♦ 8-Pin µMAX Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4080EVKIT+ | EV Kit |

+Denotes lead-free and RoHS-compliant.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1            |     1 | 4.7µF ±10%, 100V X5R ceramic capacitor (2220) TDK C5750X5R2A475M                       |
| C2            |     1 | 0.1µF ±10%, 100V X5R ceramic capacitor (1206) TDK C3216X5R2A104K                       |
| C3, C4, C5    |     0 | Not installed, ceramic capacitors (1206)                                               |
| C6, C7        |     2 | 0.1µF ±10%, 25V X5R ceramic capacitors (0603) TDK C1608X5R1E104K                       |
| C8            |     0 | Not installed, ceramic capacitor (0603)                                                |
| JU1, JU2      |     2 | 3-pin headers                                                                          |
| R1            |     1 | 0.1 Ω ±1% current-sense resistor (1206) IRC LRC-LR1206LF-01-R100-F                     |
| R2, R3, R4    |     0 | Not installed, resistors-short (PC trace) (0603)                                       |
| U1            |     1 | Maxim high-side, current-sense amplifier with voltage output MAX4080SAUA+ (8-pin µMAX) |
| -             |     2 | Shunts                                                                                 |
| -             |     1 | PCB: MAX4080 Evaluation Kit+                                                           |

## MAX4080 Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| IRC, Inc.  | 361-992-7900 | www.irctt.com         |
| TDK Corp.  | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX4080 or MAX4081 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- One 12V, 1A power supply
- One electronic load capable of sinking 1A
- Two digital voltmeters (DVMs)

## Procedure

The MAX4080 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply or the electronic load until all connections are completed.

- 1) MAX4081 only: Verify that a shunt is installed across pins 1-2 of jumper JU1.
- 2) MAX4081 only: Verify that a shunt is installed across pins 1-2 of jumper JU2.
- 3) Set the power supply to 12V and connect the positive terminal to the VCC pad. Connect the ground of the power supply to the GND pad closest to the VCC pad.
- 4) Connect the VCC pad and the VSENSE+ pad.
- 5) Set the electronic load to sink 1A.
- 6) Connect the electronic load's positive terminal to the VSENSE- pad. Connect the load's ground to the GND pad closest to the VCC pad.
- 7) Connect a voltmeter across the VSENSE+ and VSENSE- pads. (Note that this voltmeter measurement will not accurately reflect actual sense voltage across the sense resistor due to voltage drop in the trace and in the connectors. Accurate measurement of  sense voltage across low-value sense resistors requires the use of 4-wire Kelvin-connected sense resistors.  The  EV  kit  board  shows  one  example of good layout practice by which RS+ and RS- of the current-sense amplifier can connect to commonly available 2-wire sense resistors.)
- 8) Connect the second voltmeter across the VOUT pad and the closest GND pad.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 9) Turn on the power supply.
- 10) Turn on the electronic load.
- 11) Verify  that  the  first  DVM  reading  is  approximately 100mV and the second DVM is approximately 6V.
- 12) Adjust the electronic load current to between 1A and 0A and verify that the reading of the second DVM is about 60 times the reading of the first DVM.

## Detailed Description

The MAX4080 EV kit is a current-sense amplifier that measures the load current and provides an analog voltage output. The full-scale VSENSE is set to 100mV. The full-scale ISENSE is set at 1A. They can be changed by replacing current-sense resistor R1 to another appropriate value.

## Applying the VCC Power Supply and the Load Power Supply

The EV kit is installed with a MAX4080SAUA, which has a gain of 60. The current-sense-resistor value is 0.1 Ω . The VOUT is given by:

V V A I OUT SENSE V SENSE = × = × × 0 1 60 .

where VSENSE is the sense voltage, ISENSE is the load current, and AV is the gain of the device.

Note: Output voltage is internally clamped not to exceed 18V.

Normal operating VCC, VSENSE+, and VSENSE- range is 4.5V to 76V.

## Measuring the Load Current

The load current is measured as a voltage drop (VSENSE) across an external sense resistor. This voltage is then amplified by the current-sense amplifier and presented at its OUT pin. Like all differential amplifiers, the output voltage has two components of error (an offset error and a gain error). The offset error affects accuracy of measurement at low currents and a gain error affects  output  accuracy at large currents-both errors affect  accuracy of measurement at intermediate currents. By minimizing both offset and gain errors, accurate  measurements  can  be  obtained  from  the MAX4080/MAX4081 over a wide dynamic range.

<!-- image -->

The MAX4080 EV kit, which is assembled with the MAX4080SAUA, is designed with a full-scale sense voltage drop of 100mV. For a typical 1A full-scale load current, this results in the use of a 0.1 Ω sense resistor on the MAX4080 EV kit using the following equation:

<!-- formula-not-decoded -->

For different full-scale sense voltage and full-scale loadcurrent arrangements, the equation above can be used to  determine the appropriate current-sense-resistor values. Refer to Table 1. Typical Component Values in the MAX4080/MAX4081 IC data sheet for further guidance.

## Evaluating the MAX4080FAUA/MAX4080TAUA

The MAX4080 EV kit can be used to evaluate other gain versions of the MAX4080 (5V/V, 20V/V, 60V/V = F, T, S suffix).  Replace U1 with a different version of the MAX4080 and refer to Table 1. Typical Component Values in the MAX4080/MAX4081 IC data sheet for additional information.

## Evaluating the MAX4081 Bidirectional Current-Sense Amplifiers

The MAX4080 EV kit can also be used to evaluate the MAX4081 bidirectional current-sense amplifiers. Replace U1 with a MAX4081SAUA, MAX4081TAUA, or MAX4081FAUA. The MAX4081 requires an external reference to set the zero-current output level (VSENSE = 0V). The charging current is represented by an output voltage from VREF to VCC, while discharge current is given from VREF to GND. Measuring VOUT with respect to VREF (instead of GND) gives a ± output voltage.

<!-- image -->

## MAX4080 Evaluation Kit

The VOUT reference level is controlled by REF1A and REF1B. VREF is defined as the average voltage of VREF1A and VREF1B. Connect REF1A and REF1B together to a low-noise, regulated voltage source to set the  output  reference  level.  In  this  mode,  VOUT equals VREF1A when VSENSE equals zero.

Alternatively, connect REF1B to ground and REF1A to a low-noise, regulated voltage source. In this case, the output reference level (VREF) is equal to VREF1A divided by two. VOUT equals half of VREF1A when VSENSE equals zero.

In either mode, the output swings above the reference voltage for positive current sensing (VRS+ &gt; VRS-). The output swings below the reference voltage for negative current sensing (VRS+ &lt; VRS-).

Use jumpers JU1 and JU2 to set the VREF on the EV kit. See Table 1 for jumper settings and the corresponding VREF values.

## Table 1. JU1 and JU2 Jumper Settings

| SHUNT POSITION   | SHUNT POSITION   | V REF            |
|------------------|------------------|------------------|
| JU1              | JU2              |                  |
| 1-2              | 1-2              | REFIN*           |
| 1-2              | 2-3              | REFIN/2          |
| 2-3              | 1-2              | (V CC + REFIN)/2 |
| 2-3              | 2-3              | V CC /2          |

*Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4080 Evaluation Kit

Figure 1. MAX4080 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX4080 EV Kit Component Placement Guide-

<!-- image -->

Component Side

## MAX4080 Evaluation Kit

Figure 3. MAX4080 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX4080 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5