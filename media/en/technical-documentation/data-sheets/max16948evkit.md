<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The  MAX16948  evaluation  kit  (EV  kit)  is  an  assembled and  tested  PCB  used  to  evaluate  the  MAX16948  dual high-voltage, current-sensing LDO regulator/switch. The EV  kit  demonstrates  the  device's  features:  open-drain fault  indicator  outputs,  current-limiting  threshold-setting inputs, current-sense outputs, LDO/switch operation, and shutdown function.

Ordering Information appears at end of data sheet.

| DESIGNATION    |   QTY | DESCRIPTION                                                                        |
|----------------|-------|------------------------------------------------------------------------------------|
| C1             |     1 | 22 F F Q 50V aluminum electrolytic capacitor (8.0mm x 6.2mm) Panasonic EEETG1H220P |
| C2, C10-C13    |     5 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K                |
| C3             |     1 | 1 F F Q 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E105K                |
| C4, C5         |     2 | 2.2 F F Q 10%, 25V X7R ceramic capacitors (1206) TDK C3216X7R1E225K                |
| C8, C9         |     0 | Not installed, ceramic capacitors (1206)                                           |
| D1             |     1 | 50V, 1A Schottky diode (SMA) Diodes Inc. B150-13-F                                 |
| D2             |     1 | Red LED (0805)                                                                     |
| D3             |     1 | Yellow LED (0805)                                                                  |
| D4, D5         |     2 | 20V, 1A Schottky diodes (MicroSMP) Vishay MSS1P2U                                  |
| IN, LIM1, LIM2 |     3 | Red test points                                                                    |
| JU1, JU2       |     2 | 4-pin headers                                                                      |

<!-- image -->

## MAX16948 Evaluation Kit

## Evaluates: MAX16948

## Features

- S 4.5V to 28V Wide Input Voltage Range (45V Load Dump Tolerant)
- S 2-Channel LDO/Switch
- S Resistor-Adjustable Current-Limit Threshold
- S Current-Sensing Outputs
- S Open-Drain, Fault Indicator Outputs ( ERR1 and ERR2 )
- S Shutdown Control Inputs ( SHDN1 and SHDN2 )
- S Proven PCB Layout
- S Fully Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| JU3, JU4      |     2 | 3-pin headers                                                  |
| JU5           |     1 | 2-pin header                                                   |
| L1, L3        |     2 | 1mH, 480mA inductors (10.5mm x 10.3mm) Sumida CDRH105RNP-102NC |
| L2, L4        |     0 | Not installed, inductors (1206)                                |
| P1, P3        |     2 | 50 I BNC connectors                                            |
| P2, P4        |     0 | Not installed, BNC connectors                                  |
| R1, R3        |     2 | 3.01k I Q 1% resistors (0603)                                  |
| R2, R4        |     2 | 750 I Q 1% resistors (0603)                                    |
| R5, R6        |     2 | 0 I Q 5% resistors (0603)                                      |
| R7,R8         |     2 | 2.49k I Q 1% resistors (0603)                                  |
| R9, R13       |     2 | 4.02k I Q 1% resistors (0603)                                  |
| R10, R11      |     2 | 2.71k I Q 5% resistors (0603)                                  |
| R14, R15      |     2 | 10k I Q 5% resistors (0603)                                    |
| R16, R17      |     2 | 100 I Q 5% resistors (0603)                                    |
| SW1, SW2      |     2 | Momentary pushbutton switches                                  |
| U1            |     1 | Dual current-sensing LDO (16 TQFN-EP) Maxim MAX16948AGTE/V+    |
| -             |     5 | Shunts                                                         |
| -             |     1 | PCB: MAX16948 EVALUATION KIT                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supplies until all connections are completed.

- 1) Verify that all jumpers are in their default position, as shown in Table 1.
- 2) Adjust the power supply to 14V.
- 3) Adjust both loads to 100mA.
- 4) Connect  the  power  supply  between  the  VIN  and GND PCB pads on the EV kit.
- 5) Connect the first load between the REG\_OUT1 and GND PCB pads on the EV kit.
- 6) Connect the second load between the REG\_OUT2 and GND PCB pads on the EV kit.
- 7) Connect the first voltmeter between the REG\_OUT1 and GND PCB pads on the EV kit.
- 8) Connect  the  second  voltmeter  between  the  REG\_ OUT2 and GND PCB pads on the EV kit.
- 9) Enable the power supply and both loads.
- 10)  Verify that the first voltmeter displays 5V.
- 11)  Verify that the second voltmeter also displays 5V.

<!-- image -->

## MAX16948 Evaluation Kit

## Evaluates: MAX16948

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Sumida Corp.                           | 847-545-6700 | www.sumida.com              |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Indicate you are using the MAX16948 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX16948	EV	kit
- 14V,	1A	DC	power	supply
- Two	electronic	loads
- Two	voltmeters

## Table 1. Jumper Descriptions (JU1-JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                               |
|----------|------------------|-----------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects the FB1 pin to the resistor-divider (R1 and R2), which sets VOUT1 to 5V.                         |
| JU1      | 1-3              | Connects the FB1 pin to the REG pin, which sets VOUT1 to 8.5V.                                            |
| JU1      | 1-4              | Connects the FB1 pin to GND, which sets channel 1 as a switch.                                            |
| JU2      | 1-2*             | Connects the FB2 pin to the resistor-divider (R3 and R4), which sets VOUT2 to 5V.                         |
| JU2      | 1-3              | Connects the FB2 pin to the REG pin, which sets VOUT2 to 8.5V.                                            |
| JU2      | 1-4              | Connects the FB2 pin to GND, which sets channel 2 as a switch.                                            |
| JU3      | 1-2              | Connects the SHDN1 pin to GND for shutdown mode.                                                          |
| JU3      | 2-3*             | Connects the SHDN1 pin to the input voltage for normal operation.                                         |
| JU4      | 1-2              | Connects the SHDN2 pin to GND for shutdown mode.                                                          |
| JU4      | 2-3*             | Connects the SHDN2 pin to the input voltage for normal operation.                                         |
| JU5      | Installed*       | D2 and D3 LEDs are used as fault indicators for ERR1 and ERR2 .                                           |
| JU5      | Open             | LEDs D2 and D3 are not used. The ERR1 and ERR2 test pads on the EV kit are used to monitor fault signals. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Note:

## Detailed Description of Hardware

The MAX16948 EV kit is an assembled and tested PCB used  to  evaluate  the  MAX16948  dual  high-voltage, current-sensing LDO/switch. The EV kit operates from a 4.5V to 28V DC supply voltage. The EV kit demonstrates the device's features: open-drain fault indicator outputs, current-limiting threshold-setting inputs, current-sensing outputs, LDO/switch operation, and shutdown function.

## Open-Drain Fault Indicator Outputs ( ERR1 , ERR2 )

The EV kit provides D2 and D3 to monitor the fault indicator outputs, ERR1 and ERR2 , respectively. The LED lights up when a fault is detected.

## FB Inputs (FB1, FB2)

The feedback input pins (FB1 and FB2) control the output voltage on VOUT1 and VOUT2. Connect FB\_ to GND (shunts on pins 1-4 on jumpers JU1 and JU2) to select current-limited switch operation. The voltage applied at the input is approximately the voltage at the output.

Connect  an  external  resistive  divider  for  adjustable LDO  operation  (shunts  on  pins  1-2  of  JU1  and  JU2).

<!-- image -->

## MAX16948 Evaluation Kit

## Evaluates: MAX16948

With this configuration, the output voltage VOUT\_ (VOUT1 or  VOUT2)  is  approximately  5V.  The  output  can  be adjusted between 1V and 12V according to the following equation:

<!-- formula-not-decoded -->

where VFB is 1V (typ), RTOP is the resistor from the output to the feedback node, and RBOTTOM is the resistor from the feedback node to ground.

Connect  FB\_  to  REG  (shunts  on  pins  1-3  on  JU1  and JU2) to choose the internal resistive divider for the 8.5V regulator option.

## Shutdown ( SHDN1 , SHDN2 )

The EV kit provides jumpers JU3 and JU4 to control the active-low shutdown inputs, SHDN1 and SHDN2 , respectively. For normal operation, place a shunt on pins 2-3 on JU3 (enables LDO/switch 1) and a shunt on pins 2-3 on JU4  (enables  LDO/switch  2).  For  low-power  shutdown mode, place a shunt on pins 1-2 on JU3 (disables LDO/ switch 1) and a shunt on pins 1-2 on JU4 (disables LDO/ switch 2).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16948 Evaluation Kit

## Evaluates: MAX16948

<!-- image -->

Figure 1. MAX16948 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16948 Evaluation Kit

## Evaluates: MAX16948

<!-- image -->

Figure 2. MAX16948 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX16948 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16948 Evaluation Kit

## Evaluates: MAX16948

<!-- image -->

Figure 4. MAX16948 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16948EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX16948 Evaluation Kit Evaluates: MAX16948

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/11           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8