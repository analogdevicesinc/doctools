<!-- lastmod 2022-08-02 -->
## MAX17545 5V Output Evaluation Kit

## General Description

The MAX17545 5V output evaluation kit (EV kit) provides a proven design to evaluate the MAX17545 high-voltage, high-efficiency,  synchronous  step-down  DC-DC converter. The EV kit is preset for 5V output at load currents up to  1.7A  and  features  a  500kHz  switching  frequency  for optimum  efficiency  and  component  size.  The  EV  kit features  adjustable  input  undervoltage  lockout,  adjustable  soft-start,  open-drain RESET signal,  and  external frequency synchronization.

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1            |     1 | 2.2µF ±10%, 50V X7R ceramic capacitor (1210) TDK C3225X7R1H225K             |
| C2            |     1 | 2.2µF ±10%, 10V X7R ceramic capacitor (0603) Murata GRM188R71A225K          |
| C3            |     1 | 5600pF ±10%, 25V X7R ceramic capacitor (0402) Murata GRM155R71E562K         |
| C4            |     1 | 22µF ±10%, 10V X7R ceramic capacitor (1210) Murata GRM32ER71A226K           |
| C5            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K          |
| C6            |     0 | Not installed, ceramic capacitor (0402)                                     |
| C7            |     1 | 47µF, 50V aluminum electrolytic capacitor (D = 10mm) Panasonic EEEFK1H470XP |
| JU1-JU3       |     3 | 3-pin headers                                                               |

## Evaluates: MAX17545 in 5V Output-Voltage Application

## Features

- Operates from a 6.5V to 42V Input Supply
- 5V Output Voltage
- Up to 1.7A Output Current
- 500kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- MODE Pin to Select Among PWM, PFM, or DCM Modes
- Open-Drain RESET Output
- External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| L1            |     1 | 10 μ H inductor Coilcraft XAL6060-103ME Cooper Bussmann MPI4040R4-100-R |
| R1            |     1 | 3.32MΩ ±1% resistor (0402)                                              |
| R2            |     1 | 732kΩ ±1% resistor (0402)                                               |
| R3            |     1 | 178kΩ ±1% resistor (0402)                                               |
| R4            |     1 | 39kΩ ±1% resistor (0402)                                                |
| R5            |     0 | Not installed, resistor (0402)                                          |
| R6            |     1 | 10kΩ ±1% resistor (0402)                                                |
| TP1, TP2      |     2 | Test pads                                                               |
| U1            |     1 | Buck converter (20 TQFN-EP*) Maxim MAX17545ATP+                         |
| -             |     3 | Shunts (JU1-JU3)                                                        |
| -             |     1 | PCB: MAX17545 - 5V OUTPUTEVKIT                                          |

Note: C7, R1, and R2 are optional components; R1 and R2 are not needed if the EN/UVLO pin is permanently connected to VIN. The electrolytic capacitor (C7) is required only when the VIN power supply is situated far from the MAX17545-based circuit. When R5 is open, the device switches at 500kHz switching frequency. The XAL6060 inductor has been used to prepare the EV kit test report.

<!-- image -->

## MAX17545 5V Output Evaluation Kit

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE                  |
|-----------------|--------------|--------------------------|
| Coilcraft, Inc. | 847-639-6400 | www.coilcraft.com        |
| CooperBussmann  | 713-209-8400 | www.cooperindustries.com |
| Murata Americas | 800-241-6574 | www.murataamericas.com   |
| Panasonic Corp. | 800-344-2112 | www.panasonic.com        |
| TDK Corp.       | 516-535-2600 | www.tdk.com              |

Note: Indicate that you are using the MAX17545 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX17545 5V output EV kit
- 6.5V to 42V, 4A DC input power supply
- Load capable of sinking 2A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed.

- 1)  Set the power supply at a voltage between 6.5V and 42V. Disable the power supply.
- 2)  Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the nearest PGND PCB pad. Connect the positive terminal of the 1.7A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3)  Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4)  Verify  that  shunts  are  installed  across  pins  1-2  on jumper JU1 and pins 2-3 on jumper JU3 (see Table 1 and Table 3 for details).
- 5)  Select  the  shunt  position  on  jumper  JU2  according to  the  intended  mode  of  operation  (see  Table  2  for details).
- 6)  Turn on the DC power supply.
- 7)  Enable the load.
- 8)  Verify that the DVM displays 5V.

## Detailed Description

The  MAX17545  5V  output  EV  kit  provides  a  proven design  to  evaluate  the  MAX17545  high-voltage,  highefficiency, synchronous step-down DC-DC converter. The EV kit is preset for 5V output from 6.5V to 42V input at load currents up to 1.7A and features a 500kHz switching frequency for optimum efficiency and component size.

The EV kit includes an EN/UVLO PCB pad and jumper JU1 to enable the output at a desired input voltage. The SYNC PCB pad and jumper JU3 allow an external clock to synchronize the device. Jumper JU2 allows the selection of a particular mode of operation based on light-load performance  requirements.  An  additional RESET PCB pad is available for monitoring whether the converter output is in regulation.

## Soft-Start Input (SS)

The  device  utilizes  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of C3, the external capacitor from SS to GND. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum value of C3, as shown by the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS ) is related to C3 by the following equation:

<!-- formula-not-decoded -->

For example, to program a 1ms soft-start time, C3 should be 5.6nF.

│

## MAX17545 5V Output Evaluation Kit

## Regulator Enable/Undervoltage-Lockout Level (EN/UVLO)

The  device  offers  an  adjustable  input  undervoltagelockout  level.  For  normal  operation,  a  shunt  should  be installed  across pins 1-2 on jumper JU1. To disable the output, install a shunt across pins 2-3 on JU1 and the EN/ UVLO pin is pulled to GND. See Table 1 for JU1 settings.

Set the voltage at which the device turns on with the resistive voltage-divider R1/R2 connected from VIN\_ to SGND. Connect the center node of the divider to EN/UVLO.

Choose R1 to be 3.32MΩ and then calculate R2 as follows:

<!-- formula-not-decoded -->

where V INU  is the voltage at which the device is required to turn on.

## MODE Selection (MODE)

The  device's  MODE  pin  can  be  used  to  select  among PWM, PFM, or DCM modes of operation. The logic state of the MODE pin is latched when VCC and EN/UVLO voltages exceed the respective UVLO rising thresholds and all internal voltages are ready to allow LX switching. State changes  on  the  MODE  pin  are  ignored  during  normal

## Table 1. Regulator Enable (EN/UVLO) Description (JU1)

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17545_ OUTPUT                                        |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2*             | Connected to VIN                                           | Enabled                                                 |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

* Default position.

## Evaluates: MAX17545 in 5V Output-Voltage Application

operation. Refer to the MAX17545 IC data sheet for more information on PWM, PFM, and DCM modes of operation.

Table 2 shows EV kit jumper settings that can be used to configure the desired mode of operation.

## External Clock Synchronization (SYNC)

The internal oscillator of the device can be synchronized to an external clock signal on the SYNC pin. The external synchronization clock frequency must be between 1.1f SW and  1.4f SW ,  where  f SW   is  the  frequency  of  operation set by R5. The minimum external clock high pulse width should be greater than 50ns and the minimum external clock low pulse width should be greater than 160ns.

## Table 2. MODE Description (JU2)

| SHUNT POSITION   | MODE PIN          | MAX17545_ MODE        |
|------------------|-------------------|-----------------------|
| Not installed*   | Unconnected       | PFM mode of operation |
| 1-2              | Connected to SGND | PWM mode of operation |
| 2-3              | Connected to VCC  | DCM mode of operation |

* Default position.

## Table 3. SYNC Description (JU3)

| SHUNT POSITION   | SYNC PIN                      | MAX17545_ SYNC                                       |
|------------------|-------------------------------|------------------------------------------------------|
| 1-2              | Connected to test loop on PCB | Frequency can be synchronized with an external clock |
| 2-3*             | Connected to SGND             | SYNC feature unused                                  |

* Default position.

│

## MAX17545 5V Output Evaluation Kit

## EV Kit Test Report

Figure 1. MAX17545 5V Output Load and Line Regulation (PWM Mode)

<!-- image -->

Figure 2. MAX17545 5V Output Efficiency (PWM Mode)

<!-- image -->

Figure 3. MAX17545 5V Output Load and Line Regulation (PFM Mode)

<!-- image -->

Figure 4. MAX17545 5V Output Efficiency (PFM Mode)

<!-- image -->

│

## MAX17545 5V Output Evaluation Kit

## EV Kit Test Report (continued)

Figure 5. MAX17545 5V Output Efficiency (DCM Mode)

<!-- image -->

## Evaluates: MAX17545 in 5V Output-Voltage Application

Figure 6. MAX17545 5V Output Full Load Bode Plot (VIN = 24V)

<!-- image -->

Figure 7. MAX17545 5V Output, No Load to 0.85A Load Transient (PWM Mode)

<!-- image -->

│

## EV Kit Test Report (continued)

Figure 8. MAX17545 5V Output, 5mA to 0.85A Load Transient (PFM Mode)

<!-- image -->

Figure 9. MAX17545 5V Output, 50mA to 0.85A Load Transient (DCM Mode)

<!-- image -->

Figure 10. MAX17545 5V Output, 0.85A to 1.7A Load Transient

<!-- image -->

│

## MAX17545 5V Output Evaluation Kit

## Evaluates: MAX17545 in 5V Output-Voltage Application

Figure 11. MAX17545 5V Output EV Kit Schematic

<!-- image -->

## MAX17545 5V Output Evaluation Kit

Figure 12. MAX17545 5V Output EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 13. MAX17545 5V Output EV Kit Component Side PCB layout

<!-- image -->

## Evaluates: MAX17545 in 5V Output-Voltage Application

Figure 14. MAX17545 5V Output EV Kit PCB LayoutInner Layer 1

<!-- image -->

Figure 15. MAX17545 5V Output EV Kit PCB Layout-Inner Layer 2

<!-- image -->

## MAX17545 5V Output Evaluation Kit

Figure 16. MAX17545 5V Output EV Kit PCB LayoutSolder Side

<!-- image -->

## Evaluates: MAX17545 in 5V Output-Voltage Application

Figure 17. MAX17545 5V Output EV Kit Component Placement Guide-Top Solder Mask

<!-- image -->

Figure 18. MAX17545 5V Output EV Kit Component Placement Guide-Bottom Solder Mask

<!-- image -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17545EVKITB# | EV Kit |

#Denotes RoHS compliant.

## MAX17545 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/14           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSlied. MaxiP ,nteJrated reserYes the riJht to chanJe the circuitr\ and sSeci¿cations without notice at an\ tiPe.

│

Evaluates: MAX17545 in

5V Output-Voltage Application