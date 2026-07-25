<!-- lastmod 2022-08-04 -->
## General Description

The MAX8515 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that demonstrates the capability of the MAX8515A shunt regulator in  a  voltage-regulation  circuit  and  the  MAX8515  shunt regulator in an overvoltage protection (OVP) circuit for isolated DC-to-DC converters.

The EV kit circuit is designed to operate from an input voltage supply with a nominal output of 8V and an output voltage range of 6V to 10V. The input voltage can be adjusted from 1.8V to 18V by replacing circuit components. The voltage-regulation circuit and the OVP circuit have their thresholds set to 0.8V and 1V, respectively. The thresholds can be adjusted by replacing feedback resistors on the circuit board.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| C1, C5        |     2 | 0.22µF ± 10%, 35V X7R ceramic capacitors (0805) Taiyo Yuden GMK212BJ224KG TDK C2012X7R1H224KT |
| C2, C3        |     0 | Not installed, ceramic capacitors (0603)                                                      |
| C4, C6        |     0 | Not installed, capacitors (0805)                                                              |
| R1, R8        |     2 | 1k Ω ± 5% resistors (0603)                                                                    |
| R2, R10       |     0 | Not installed, resistor (0603)                                                                |
| R3            |     1 | 3.3k Ω ± 0.1% resistor (0603)                                                                 |
| R4, R12       |     2 | 10k Ω ± 0.1% resistors (0603)                                                                 |
| R5, R9        |     2 | 2k Ω ± 5% resistors (0603)                                                                    |
| R6, R13       |     2 | 100k Ω ± 5% resistors (0603)                                                                  |
| R7, R14       |     2 | 1.5k Ω ± 5% resistors (0603)                                                                  |
| R11           |     1 | 6.2k Ω ± 0.1% resistor (0603)                                                                 |
| U1            |     1 | MAX8515AEXK (5-pin SC70), top mark: ADX                                                       |
| U2            |     1 | MAX8515EZK (5-pin SOT23), top mark: ADRL                                                      |
| U3, U4        |     2 | Opto-isolators (8-pin SO) Fairchild MOC207                                                    |
| None          |     1 | MAX8515 PC board                                                                              |

## Procedure

- 1) Connect voltmeters across the VC and PGND pads and across the OVP and PGND pads.
- 2) Connect the 5VDC power supply to the VREF pad. Connect the supply ground to the PGND pad.
- 3) Connect the adjustable power supply to the VOUT pad. Connect the supply ground to the GND pad.

## Component Suppliers

| SUPPLIER    | PHONE        | FAX            | WEBSITE               |
|-------------|--------------|----------------|-----------------------|
| Fairchild   | 888-522-5372 | Local rep only | www.fairchildsemi.com |
| Taiyo Yuden | 800-348-2496 | 847-925-0899   | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405   | www.component.tdk.com |

Note:

Please indicate that you are using the MAX8515 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

- ♦ Isolated Voltage Regulation Feedback CircuitSet to 0.8V Threshold
- ♦ Isolated OVP Circuit-Set to 1V Threshold
- ♦ Adjustable Output-Voltage Thresholds
- ♦ Galvanically Isolated Input and Output Grounds
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX8515EVKIT | 0°C to +70°C | 5 SC70/SOT23 |

## Quick Start

The MAX8515 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supplies until all connections are completed.

## Equipment Required

- 5VDC power supply
- 8VDC power supply
- 0.5V to 1.5V adjustable power supply
- 2 voltmeters

## MAX8515 Evaluation Kit

- 4) Connect the 8VDC power supply to the VIN pad. Connect the supply ground to the GND pad.
- 5) In  the  following  sequence,  turn  on  the  VREF,  VIN, and VOUT power supplies.
- 6) Slowly raise output voltage VOUT above 0.8V (isolated voltage-feedback circuit threshold) and then above 1V (OVP circuit threshold).
- 7) The VC output voltage goes to logic low when VOUT is higher than 0.8V and the OVP output goes to logic low when VOUT is higher than 1V.

## Detailed Description

The MAX8515 EV kit circuit simplifies the evaluation of the  MAX8515A shunt regulator in a voltage-regulation circuit and the MAX8515 shunt regulator in an OVP circuit  used in isolated DC-to-DC converters. Galvanic isolation  is  achieved  by  the  shunt  regulator's  ability  to drive an optocoupler that separates the circuit's supply voltage and feedback inputs from the output shunt stage grounds.

The voltage-regulation circuit is set to regulate at 0.8V and provides an isolated voltage-feedback signal. PC board pads are provided for adding resistors and capacitors for loop compensation. The OVP threshold is set to 1V and provides an isolated logic signal. Both circuits'  thresholds  can  be  reconfigured to as low as 0.6V by replacing their respective feedback resistors.

## Input Voltages

The MAX8515 EV kit is designed to operate from a voltage supply connected across the VIN and GND pads on the EV kit. The input voltage source supplies the isolated voltage-feedback circuit and the OVP circuit on the EV kit. The EV kit operates from a nominal input voltage of 8V and has a range of 6V to 10V. The input voltage is nominally set to 8V by current-limiting resistors R1 and R8 that limit the optocoupler shunting current  under 10mA. The EV kit's operational voltage is dependent on the application and can be adjusted in the 1.8V to 18V range by replacing current-limiting resistors R1, R5, R8, and R9 and selecting them to limit the current to under 10mA.

The MAX8515 EV kit also requires an input voltage reference at the VREF pad. The voltage applied at VREF determines the voltage at the VC and OVP signal output pads during board operation.

## Output

The isolated voltage-regulation feedback circuit and the OVP circuit on the EV kit are configured to monitor a single output from a DC-to-DC converter. The voltage output from the DC-to-DC converter must be connected across the VOUT and GND pads of the EV kit.

## Voltage-Regulation Circuit (Top Circuit)

The top circuit on the EV kit board features the MAX8515A shunt regulator in a 5-pin SC70 package and has an initial accuracy of ±0.5%. The voltage-regulation circuit is set for an output-regulation threshold of 0.8V that is set by feedback resistors R3 and R4.

The voltage-regulation threshold can be adjusted to a minimum of 0.6V by replacing feedback resistors R3 and R4 and using the following equation:

VTHRESHOLD = VFB ✕ ((R3 / R4) +1)

where VFB = 0.6V.

By default, the voltage-regulation circuit functions as an OVP circuit and requires the installation of compensation components R2, C2, C3, and C11 to function as a voltage-regulation circuit. These components are application dependent and may require verification in the lab. Refer to the Optical Feedback section in the MAX8515 data sheet to select the proper compensation components.

When the voltage at the VOUT pad rises above the set threshold, the shunt regulator sinks current to drive the optocoupler and generates a voltage signal at the VC pad. Connect VC to the primary side of the DC-to-DC converter's voltage control stage.

## Overprotection Circuit (Bottom Circuit)

The bottom circuit on the EV kit board features the MAX8515 shunt regulator in a 5-pin SOT23 package and has an initial accuracy of ±1%. The OVP circuit has an OVP threshold of 1V that is set by feedback resistors R11 and R12.

The overvoltage threshold can be adjusted to a minimum of 0.6V by replacing feedback resistors R11 and R12 and using the following equation:

VTHRESHOLD = VFB ✕ ((R11 / R12) +1)

where VFB = 0.6V.

When the voltage at the VOUT pad rises above the set threshold, the shunt regulator sinks current to drive the optocoupler and generates a logic-low signal at the OVP pad. Connect OVP to the primary side of the converter's control stage.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8515 Evaluation Kit

<!-- image -->

Figure 1. MAX8515 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8515 Evaluation Kit

<!-- image -->

Figure 2. MAX8515 EV Kit Component Placement GuideComponent Side

Figure 3. MAX8515 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8515 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4