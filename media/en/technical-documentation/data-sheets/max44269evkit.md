<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX44269 evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  evaluates  the  MAX44269  dual comparator  in  a  1.3mm  x  1.3mm  wafer-level  package (WLP).  The  EV  kit  circuit  can  be  easily  configured  by installing  shunts  and  changing  a  few  components  to support  multiple  comparator  application  circuits,  such as  window  detector,  jack  detection,  relaxation  oscillator, pulse-width modulated (PWM) generator, logic-level translator, or power-on-reset circuit. The EV kit provides 0603 component PCB pads for ease of evaluation. The EV kit circuit operates from a +1.8V to +5.5V VCC supply.

| DESIGNATION              |   QTY | DESCRIPTION                                                            |
|--------------------------|-------|------------------------------------------------------------------------|
| C1                       |     1 | 4.7 F F Q 10%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J475K |
| C2                       |     1 | 0.1 F F Q 10%, 50V X5R ceramic capacitor (0603) Murata GRM188R71H104k  |
| D1, D2                   |     0 | Not installed, diodes (0603)                                           |
| GND                      |     4 | Small black test points                                                |
| J1, J2                   |     2 | 3.5mm audio jacks                                                      |
| JU1, JU2                 |     2 | 3-pin headers                                                          |
| JU3, JU4, JU5            |     3 | 2-pin headers                                                          |
| OUTA, OUTB, TP1-TP4, VCC |     7 | Small red test points                                                  |

## MAX44269 Evaluation Kit Evaluates: MAX44269

## Features

- S 1.8V to 5.5V Input Voltage-Supply Range
- S Configurable for:

Window Detector Jack Detection Relaxation Oscillator PWM Generator Logic-Level Translator Power-on-Reset Circuit

- S Evaluates 9-Bump WLP Package
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION                  |   QTY | DESCRIPTION                                                            |
|------------------------------|-------|------------------------------------------------------------------------|
| R1, R2, R6-R9, R12, R13, R15 |     0 | Not installed, resistors (0603)                                        |
| R3, R5, R10, R14             |     4 | 0 I Q 5% resistors (0603)                                              |
| R4, R11                      |     2 | 100k I Q 5% resistors (0603)                                           |
| U1                           |     1 | Low-power dual comparator ( 9 WLP) Maxim MAX44269EWL+ (Top Mark: +AJL) |
| -                            |     5 | Shunts                                                                 |
| -                            |     1 | PCB: MAX44269 EVALUATION KIT                                           |

## Component Supplier

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX44269 when contacting this component supplier.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

- MAX44269 EV kit
- Three adjustable 0 to 5V DC power supplies
- Dual-channel oscilloscope

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn on the power supplies until all connections are completed.

- 1)  Verify that shunts are installed as followed:
- 2)  Set a DC power supply to 3.3V. Connect the positive terminal of the power supply to the VCC PCB pad and the ground terminal to the GND PCB pad.
- 3)  Set  another  DC  power  supply  to  2.5V.  Connect  the positive terminal of the power supply to the IN1+ PCB pad and the ground terminal to the GND PCB pad.
- 4)  Set another DC power supply to 2V. Connect the positive terminal of the power supply to the IN1- PCB pad and the ground terminal to the GND PCB pad.
- 5)  Enable all three DC power supplies.
- 6)  Verify that OUTA and OUTB are at logic-high (3.3V).
- 7)  Increase the IN1- voltage to 3V and verify that OUTA and OUTB are now at logic-low (0V).

JU1: Pins 1-2

JU2: Pins 2-3

JU3: Installed

JU4: Not installed

JU5: Installed

Table 1. Input Source (JU1, JU2)

| JUMPER   | SHUNT POSITION   | EV KIT CONFIGURATION                                     |
|----------|------------------|----------------------------------------------------------|
| JU1      | 1-2*             | Single source driving noninverting inputs.               |
| JU1      | 2-3              | Single source driving IN1+ and IN2- PCB pads.            |
| JU1      | Not installed    | Independent voltage sources driving noninverting inputs. |
| JU2      | 1-2              | Single source driving IN1- and IN2+ PCB pads.            |
| JU2      | 2-3*             | Single source driving inverting inputs.                  |
| JU2      | Not installed    | Independent voltage source driving inverting inputs.     |

* Default position.

<!-- image -->

## Quick Start

## Required Equipment

## MAX44269 Evaluation Kit

## Evaluates: MAX44269

## Detailed Description of Hardware

The  MAX44269  EV  kit  is  a  fully  assembled  and  tested PCB  that  evaluates  the  MAX44269  open-drain,  dual comparator. The EV kit requires a 1.8V to 5.5V input supply voltage at VCC for normal operation.

The EV kit circuit is configured for independent evaluation of comparator A and comparator B. The comparators have  rail-to-rail  inputs  and  an  internal  4mV  hysteresis. Comparator  A  input  signals  are  applied  at  the  IN1+/ IN1- PCB pads. Resistors R1, R2, and R3 are available to provide additional hysteresis using positive feedback. The comparator output can be monitored at the OUTA test  point.  Comparator  B  input  signals  are  applied  at the  IN2+/IN2-  PCB  pads.  Resistors  R8,  R9,  and  R10 are  available  to  provide  additional  hysteresis  using positive  feedback.  The  comparator  output  can  be monitored at the OUTB test point. Refer to the MAX44269 IC  data  sheet  for  additional  information  on  adding external hysteresis using the on-board resistors.

The  EV  kit  provides  various  jumpers  and  0603  PCB resistor  pads,  allowing  easy  configuration  for  various comparator application circuits such as a window detector,  jack  detection, relaxation oscillator, power-on-reset, or PWM generator. Jumpers JU1 and JU2 are available to provide flexibility  on  the  number  of  voltage  sources  used  for driving the comparator inputs. Jumper JU2 (in addition to JU4) can also be used for configuring the EV kit circuit for window detection or PWM generator operation. Jumpers JU3  and  JU5  are  available  for  logic-level  translation using  external  voltage  sources  applied  at  the  VPULLA and  VPULLB  PCB  pads,  respectively.  Refer  to  this document for proper jumper configuration when evaluating the various application circuits.

## Input Configuration

Jumpers JU1 and JU2 are provided to allow  flexibility for  configuring  the  voltage  source  for  the  comparators' inputs  and  configuring  the  inputs  for  the  various  comparator  applications.  See  Table  1  for  jumper  JU1  and JU2 configurations.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Comparator Application Circuits

## Logic-Level Translation

Jumpers JU3 and JU5 are available to select the output logic  voltage  for  the  comparators'  open-drain  outputs (Figure 1). Install a shunt at the jumpers to set VCC as the  comparator  output  logic  level.  Remove  the  shunt and  apply  the  desired  voltage  source  at  the  VPULLA and/or VPULLB PCB pads to set the comparator output logic level independent of the supply voltage. Note that the  OUTA and OUTB pins have an absolute maximum voltage  of  -0.3V  to  6V.  See  Table  2  for  proper  jumper configurations. Jumper JU4 is also provided to connect Comparator A and B outputs together for window-detection operation. See Table 3 for proper JU4 configuration.

## Jack Detection

Each of the EV kit comparators can be configured as a simple jack-detection circuit, as follows:

- 1) Short the IN1+ (or IN2+) PCB pads to VCC.
- 2) Install  a  pullup  resistor  greater  than  1k I at  the  R3 (or R10) pad to minimize the power dissipated across the resistors when inserting a standard 3-conductor plug at the corresponding jack (J1 or J2).
- 3) Uninstall jumpers JU1, JU2, and JU4.
- 4) Apply  a  suitable  external  reference  voltage  at  the IN1- (or IN2-) PCB pad. The value of the pullup resistor  and  the  reference  voltage  can  be  adjusted  to select the threshold voltage for accessory detection.
- 5) When no accessory is plugged into the jack (IN\_+ &gt;  IN\_-),  the  corresponding  OUT\_  is  at  logic-high. When the plug is inserted at jack J1 (or J2), the IN\_+ voltage falls below IN\_-, causing the corresponding OUT\_ to trip low.

## Table 2. OUTA and OUTB Logic Level (JU3, JU5)

| SHUNT POSITION   | OUT_ PIN                                            | LOGIC-HIGH VOLTAGE                                     |
|------------------|-----------------------------------------------------|--------------------------------------------------------|
| Installed*       | Pulled up to VCC through resistors R4/R11           | VCC                                                    |
| Not installed    | Pulled up to PULLA/ VPULLB through resistors R4/R11 | External voltage applied at the VPULLA/VPULLB PCB pads |

## Table 3. Jumper JU4 Configuration

| SHUNT POSITION   | EV KIT CONFIGURATION   |
|------------------|------------------------|
| Installed        | Window detector        |
| Not installed*   | Normal operation       |

<!-- image -->

## MAX44269 Evaluation Kit

## Evaluates: MAX44269

## Relaxation Oscillator

Comparator A can be configured to operate as a simple relaxation oscillator (Figure 2), as follows:

- 1) Add a suitable resistor and capacitor at the R7 and R6 pads, respectively.
- 2) Short IN1+ to VCC.
- 3) The  trip  thresholds  are  set  by  applying  suitable external hysteresis using resistors R1, R2, and R3.
- 4) Uninstall jumpers JU1, JU2, and JU4.
- 5) Comparator B can also be independently configured to operate as a relaxation oscillator, as follows:
- a) Add a suitable resistor and capacitor at the R13 and R12 pads, respectively.
- b) Short IN2+ to VCC.
- c) The  trip  thresholds  are  set  by  applying  suitable external hysteresis using resistors R8, R9, and R10.
- d) Uninstall jumpers JU1, JU2, and JU4.

Figure 1. Logic-Level Translator

<!-- image -->

Figure 2. Relaxation Oscillator

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Use the equations below to determine the optimum component values:

## COMPARATOR A:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Using the basic time-domain equations for the charging and discharging of the respective comparator RC circuit, the Comparator A oscillator frequency can be calculated using the equation below:

<!-- formula-not-decoded -->

where V IN1+  is in k I , R6 is in F F, and the oscillator frequency is in kHz.

## COMPARATOR B:

<!-- formula-not-decoded -->

Using the basic time-domain equations for the charging and discharging of the respective comparator RC circuit, the Comparator B oscillator frequency can be calculated using the equation below:

<!-- formula-not-decoded -->

where  V IN2+ =V CC,   R13  is  in  k I ,  R12  is  in F F,  and the oscillator frequency is in kHz.

## Window Detector Circuit

Table  4  depicts  the  proper  jumper  configuration  for evaluating the EV kit window detector application circuit (Figure 3) using Comparators A and B. See Table 4 for proper jumper configurations.

<!-- image -->

## MAX44269 Evaluation Kit

## Evaluates: MAX44269

Resistors  R3,  R15,  and  R12  pads  are  available  for setting the overvoltage, and  undervoltage-threshold levels. OUTA  provides an active-low undervoltage indication and OUTB provides an active-low overvoltage indication.  The  open-drain  outputs  of  both  comparators are  wired  in  an  OR  configuration  using  jumper  JU4  to give  an  active-high  power-good  signal  on  either  OUTA or OUTB.

For accurate threshold settings, use  the following equations:

Select  resistor  R12's  value  so  the  current  through  R12 exceeds 1.5 F A:

<!-- formula-not-decoded -->

where V IN1- is the reference voltage applied at the IN1or IN2+ PCB pads and R12 is in k I .

Choose the desired overvoltage threshold and calculate resistance RT using Equation 1 for resistor R12 value:

<!-- formula-not-decoded -->

where  RT  =  R3  +  R15  in  k I and  V OTH   is  the  desired overvoltage threshold in volts.

## Table 4. Window Detector Jumper Configurations

Figure 3. Window Detector Circuit

| JUMPER   | SHUNT POSITION   |
|----------|------------------|
| JU1, JU5 | Not installed    |
| JU2      | 1-2              |
| JU3, JU4 | Installed        |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Calculate R15 using the following equation:

<!-- formula-not-decoded -->

where V UTH  is  the  desired  undervoltage  threshold  and R15 is in k I .

Calculate the R3 resistor value using Equation 3 to obtain R15 value:

<!-- formula-not-decoded -->

where R3 is in k I .

## PWM Generator

The EV kit can be configured to generate a simple PWM signal using Comparators A and B (Figure 4). See Table 5  for  proper  jumper  configurations  on  the  EV  kit  for  a simple  PWM  generation  circuit.  Configure  Comparator A as a relaxation oscillator as described in the previous section.  Jumper  JU2  connects  the  sawtooth  waveform generated on Comparator A's inverting input to Comparator  B's  inverting  input.  The  analog  control voltage, applied on the noninverting input of Comparator B  (IN2+),  determines  the  pulse  width. Note: Since  the relaxation oscillator generates a sawtooth waveform, the duty cycle is not a linear function of the applied analog control voltage.

## Power-On-Reset (POR) Circuit

The EV kit can be used to evaluate a POR circuit (Figure 5). Comparator A can be configured as a POR circuit, as follows:

- 1)  Short the IN1+ and IN1- PCB pads to the VCC pad.
- 2)  Replace the R5 and R6 pads with suitable resistors to create a resistive-divider between VCC and GND at the comparator's inverting input.
- 3)  Populate a suitable resistor and capacitor on the R3 and  R2  pads,  respectively.  The  RC  time  constant provides  the  required  power-up  delay  time  at  the noninverting input.
- 4)  Diode D1 (optional) can be used to rapidly discharge the capacitor (C R2 ) in the event of sudden power loss.

To configure Comparator B for a POR circuit instead, do the following:

- 1)  Short the IN2+ and IN2- PCB pads to the VCC pad.
- 2)  Replace the R14 and R12 pads with suitable resistors to create a resistive-divider between VCC and GND at the comparator's inverting input.
- 3)  Populate a suitable resistor and capacitor on the R10 and  R9  pads,  respectively.  The  RC  time  constant provides  the  required  power-up  delay  time  at  the noninverting input.
- 4)  Diode D2 (optional) can be used to rapidly discharge the capacitor (C R9 ) in the event of sudden power loss.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX44269 Evaluation Kit

## Evaluates: MAX44269

## Table 5. PWM Generation Circuit Jumper Configuration

Figure 4. PWM Generator

| JUMPER   | SHUNT POSITION   |
|----------|------------------|
| JU1      | Not installed    |
| JU2      | 2-3              |
| JU3, JU5 | Installed        |
| JU4      | Not installed    |

<!-- image -->

Figure 5. Power-on-Reset Circuit

<!-- image -->

## MAX44269 Evaluation Kit

## Evaluates: MAX44269

<!-- image -->

Figure 6. MAX44269 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 7. MAX44269 EV Kit Component Placement Guide

<!-- image -->

## MAX44269 Evaluation Kit

## Evaluates: MAX44269

Figure 8. MAX44269 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 9. MAX44269 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44269EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX44269 Evaluation Kit

## Evaluates: MAX44269

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/11           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9