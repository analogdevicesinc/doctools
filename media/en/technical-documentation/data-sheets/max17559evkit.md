<!-- lastmod 2022-08-02 -->
## MAX1759 Evaluation Kit

## General Description

The  MAX17559  EV  kit  is  a  proven  design  to  evaluate the dual synchronous step-down regulator that provides independent 3.3V and 5V outputs capable of driving 8A and 15A loads from the 6V to 60V input-voltage range. Operating the two regulators 180° out-of-phase significantly reduces  the  peak  input  ripple  current,  allowing  the  use of  smaller, less expensive components, while minimizing parts count. The EV kit features adjustable input undervoltage lockout,  soft-start/stop  time,  and  current-limit  threshold, as well as selectable PWM/DCM modes, foldback/latchoff current limit, and independent open-drain PGOOD signals. By  disabling  channel  2,  the  evaluation  kit  is  capable  of operating from a lower input supply (4.5V to 60V), providing a single 3.3V output driving up to 15A.

## Benefits and Features

- 6V to 60V Input Range
- Output Rails: VOUT1: 3.3V/15A, VOUT2: 5V/8A
- 150kHz Switching Frequency
- Independent Enable Inputs
- Independent Adjustable Soft-Start Time
- Configurable Tracking Operation
- Selectable PWM/DCM Modes of Operation
- Fixed 180° Out-of-Phase Operation
- Selectable Foldback/Latchoff Current Limit
- Programmable Current-Limit Threshold
- Independent PGOOD Outputs
- Overcurrent, Overvoltage, and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and T ested

Ordering Information appears at end of data sheet.

Evaluates: MAX1759

## Quick Start

## Required Equipment

- MAX17559 EV kit
- 4.5V to 60V, 15A DC power supply
- Loads capable of sinking 8A and 15A
- Two digital voltmeters (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed .

- 1) Set the power supply voltage to 24V and ensure that the DC power supply is disabled.
- 2) Set one load to 8A and the other load to 15A. Disable the loads in the case of electronic loads (leave the loads unconnected in case of resistor loads. Ensure that the resistor power ratings are high enough to dissipate the output voltages).
- 3) Connect the positive terminal of the power supply to the VIN connector and the negative terminal to the PGND connector, which is nearest to VIN connector.
- 4) Connect one digital voltmeter across the VOUT1 connector and the nearest PGND connector, with the positive terminal of the DVM connected to the VOUT1 connector.
- 5) Connect the other digital voltmeter across the VOUT2 connector and the nearest PGND connector, with the positive terminal of the DVM connected to the VOUT2 connector.
- 6) Verify that the shunts are connected between pins 1-2 of the JU1 and JU2 jumpers to select default settings of the EV kit
- 7) Turn on the DC power supply.
- 8) Verify that the digital voltmeters display the expected voltages (3.3V±1% on VOUT1 and 5V±1% on VOUT2).
- 9) Enable the electronic load (connect the load in the case of resistor load).
- 10)  Verify that the voltmeters display the expected voltages (3.3V±1% on VOUT1 and 5V±1% on VOUT2).

<!-- image -->

## MAX17559 Evaluation Kit

## Detailed Description of Hardware

The MAX17559 EV Kit provides dual 3.3V/15A and 5V/8A outputs from a 6V to 60V input supply. By disabling channel 2,  the  EV  kit  provides  a  3.3V  output  to  drive  up  to  15A from a low 4.5V to 60V input voltage. The EV Kit is preset to  150kHz and operates 180° out-of-phase for optimum efficiency and component size.

The  EV  kit  implements  an  optional  sub-circuit,  R13-R18, R28,  D7,  and  JU1,  JU2  to  enable/disable  the  output  at a  desired  input  UVLO,  as  well  as  soft-start/stop  power sequence.  Resistors  R35  and  R36  are  selected  different values to configure the EV kit operating in DCM/PWM mode and foldback/latchoff, current-limit mode, respectively.

## Configuring the Output Voltages (VOUT1, VOUT2)

The device output voltages (V OUT1  and V OUT2 ) can be adjusted between 0.8V to 24V through sets of feedback resistor-dividers R19,R20 and R23,R24 by the following formula:

<!-- formula-not-decoded -->

Please refer to MAX17559 IC data sheet to select the R19 and R23 values, changing compensation components, as well as output capacitors for setting new output voltages.

## Soft-Start/Stop (SS\_)

The device offers an SS\_ pin to connect a capacitor to GND to adjust the soft-start/stop time during startup and shutdown. An internal  5µA  current  source  charges/discharges the capacitor at the SS\_ pin, providing a linear ramping voltage  for  output  voltage  reference.  The  soft-start/stop

## Table 1. Enable Control (JU1, JU2)

| JUMPER   | SHUNT POSITION   | EN                                               | MAX17558 OUTPUT                                                     |
|----------|------------------|--------------------------------------------------|---------------------------------------------------------------------|
| JU1      | Not installed    | Unconnected                                      | Enabled                                                             |
| JU1      | 2-3              | Connected to GND                                 | Disabled                                                            |
| JU2      | Not installed    | Unconnected                                      | Enabled                                                             |
| JU2      | 1-2              | Connected to the mid-point of input UVLO divider | Enabled, UVLO level is set by the resistor divider from VIN to GND. |
| JU2      | 2-3              | Connected to GND                                 | Disabled                                                            |

│

## Evaluates: MAX17559

time of V OUT1  and V OUT2  are calculated based on the following equation:

<!-- formula-not-decoded -->

The  default  soft-start/stop  time  of  V OUT1   or  V OUT2   is approximately 10.8ms at 68nF soft-start/stop capacitor.

## Enable/Undervoltage-Lockout Level (EN\_)

The  device  can  be  independently  started  up  or  shut down by manipulating the EN1 and EN2 pins. Leave EN\_ unconnected for a default enable controller. Place shunts across pins 1-2 of JU1 and JU2 to enable each controller  through  the  input  UVLO  formed  by  resistor-dividers. Connect a resistor-divider from V IN  to EN\_ and EN\_ to GND to program the UVLO threshold for the corresponding controller. The EN\_ pin can be programmed to 1.25V (typ) to detect UVLO at a desired input voltage to enable/ disable  the  corresponding  controller  with  50mV  (typ) hysteresis. Place jumpers across pins 2-3 of JU1 and JU2 to disable the controllers. Table 1 shows all configurations of jumpers to enable/disable each of controllers.

Select R14 (R18 for OUT2) below 10K and calculate R13 (R17) based on the following equation:

<!-- formula-not-decoded -->

where V INUVLO  is the input voltage at which the controller is required to turn on.

## MAX17559 Evaluation Kit

## Mode Selection (SKIP)

The  SKIP  pin  allows  the  user  to  select  between  the PWM and DCM modes of operation.  Set  R36  =  0Ω  to select constant-frequency PWM mode operation. Choose 100kΩ to operate in DCM mode.

## Fixed Phase-Shift Between Controllers

The two controllers of the dual switching regulator operate at a fixed 180° out-of-phase that interleaves the current pulses from the switches and reduces overlap time where they combine. The result is a significant reduction in total RMS  input  current,  allowing  for  less  expensive  input capacitors to be used, reducing shielding requirements for EMI, and improving operating efficiency.

## Current-Limit Threshold Selection

The EV kit includes current-limit resistors (R12 and R22) that can be modified to program current-limit thresholds for  controllers  1  and  2.  The  peak  current  limit  of  each controller  can  be  programmed  independently  by  selecting different values for R12 and R22. Note that changing R12 and R22 affect the stability and current-sense signal across the current sense pins. Refer to the Current Limit Programming  (ILIM\_) and Current  Sensing sections  of MAX17559 IC data sheet for calculating R12, R22 and the current sense resistor values.

## Evaluates: MAX17559

## Switching Frequency

The  EV  kit  is  set  to  a  150kHz  switching  frequency  by R14. Change the value of R14 to set a different switching frequency between 100kHz to 2200kHz. Use the following equation to calculate R14 when reconfiguring the switching frequency:

<!-- formula-not-decoded -->

where f SW is in kHz and R14 is in kΩ.

When  reconfiguring  the  EV  kit  switching  frequency,  it might  be  necessary  to  change  the  values  of  the  loopcompensation-network  components.  Refer  to  the Loop Compensation section of the MAX17559 IC data sheet for computing new compensation component values.

## Power-Good Outputs

The  EV  kit  provides  power-good  output  test  points PGOOD1  and  PGOOD2  to  monitor  the  PGOOD1  and PGOOD2 signals. The PGOOD signals are pulled-up to VCCINT  by  R26  and  R27.  PGOOD1  and  PGOOD2  are high  when  V OUT1   and  V OUT2 ,  respectively,  are  above 90% and below 110% of their programmed output voltages. When V OUT1  and V OUT2  are below 90% or above 110% of their programmed output voltages, PGOOD1 and PGOOD2 are low.

│

## EV Kit Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

400us/div

│

## EV Kit Performance Report (continued)

<!-- image -->

<!-- image -->

│

## MAX17559 Evaluation Kit

## Component Suppliers

| SUPPLIER                        | WEBSITE                      |
|---------------------------------|------------------------------|
| Wurth Elektronik                | www.we-online.com            |
| Renesas Electronics             | am.renesas.com               |
| Murata Americas                 | www.murata.com               |
| Panasonic Electronic Components | www.panasonic.com/industrial |
| Vishay Dale                     | www.vishay.com               |
| TDK Corp.                       | www.tdk.com                  |
| Rubycon Corp.                   | www.rubycon.com              |
| TT Electronics/Welwyn           | www.welwyn-tt.com            |

Note:

Indicate that you are using the MAX17559 when contacting these component suppliers.

## Component List, PCB Files and Schematic

See the following links for component information, PCB files, and schematics:

- MAX17559 EV BOM
- MAX17559 EV PCB Files
- MAX17559 EV Schematics

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17559EVKIT# | EV kit |

#Denotes RoHS compliant.

Evaluates: MAX17559

│

## MAX17559 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im ,ntegrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX17559

<!-- image -->

| BILL OF MATERIALS (BOM) Revision 5/15   | BILL OF MATERIALS (BOM) Revision 5/15   | BILL OF MATERIALS (BOM) Revision 5/15                                   |
|-----------------------------------------|-----------------------------------------|-------------------------------------------------------------------------|
| Designation                             | Qty                                     | Description                                                             |
| C1                                      | 1                                       | 220uF,63V Panasonic Electronic EEVFK1J221Q                              |
| C2-C9, C34, C35                         | 10                                      | CAP CER 4.7UF 80V 10% X7R 1210 Murata GRM32ER71K475KE14L                |
| C10,C11,C12, C15, C16                   | 5                                       | 330uF,9mΩ, 6.3V Panasonic Electronic 6TPF330M9L                         |
| C13,C14,C17, C18                        | 4                                       | 10uF,10V,X7R,1210,10% Murata GRM32DR71A106KA01L                         |
| C18                                     | 0                                       | 10uF,10V,X7R,1210,10% Murata GRM32DR71A106KA01L                         |
| C19                                     | 1                                       | CAP CER 0.1UF 100V 10% X7R 0603 Murata GRM188R72A104KA35D               |
| C20                                     | 1                                       | 10uF,10V,X7R,0805,10% Murata GRM21BR71A106KE51L                         |
| C21,C22                                 | 2                                       | 1uF,10V(16V),10%,X7R Murata GRM188R71A105KA61J Murata GRM188R71A225KE15 |
| C24,C25                                 | 2                                       | 1nF,50V,1%,NP0 Murata GRM1885C1H102FA01J                                |
| C26,C27                                 | 2                                       | 68nF,25V,X7R,10% Murata GRM188R71E683KA01 Murata GRM188R71E153KA01      |
| C29                                     | 1                                       | 270pF,50V,C0G,2%(5%) Murata GRM1885C1H271GA01 (GRM1885C1H271JA01)       |
| C30                                     | 1                                       | 33nF,25V,X7R,10% Murata GRM188R71E333KA01                               |
| C31                                     | 1                                       | 470pF,50V,C0G,55 Murata GRM1885C1H471JA01                               |
| C32,C33                                 | 0                                       | OPEN                                                                    |
| R1                                      | 1                                       | 2mΩ, 1W,1% Rohm Semiconducto PMR25HZPFV2L00                             |
| R2                                      | 1                                       | 4mΩ, 1W,1% Rohm Semiconducto PMR25HZPFV4L00                             |
| R3,R4,R5,R6,R7, R29, R30, R31, R35, R36 | 10                                      | 0Ω                                                                      |
| R8                                      | 1                                       | 2.2Ω                                                                    |
| R11                                     | 1                                       | 31.6KΩ                                                                  |
| R13,R14,R15,R16,R17,R18, R28, R32       | 0                                       | OPEN                                                                    |
| R19                                     | 1                                       | 46.4KΩ                                                                  |
| R20                                     | 1                                       | 14.7KΩ                                                                  |
| R21                                     | 1                                       | 5.11KΩ                                                                  |
| R23                                     | 1                                       | 86.6KΩ                                                                  |
| R24                                     | 1                                       | 16.5KΩ                                                                  |
| R25                                     | 1                                       | 9.09KΩ                                                                  |
| R26, R27                                | 2                                       | 10KΩ                                                                    |
| R33, R34                                | 2                                       | 2KΩ                                                                     |
| L1                                      | 1                                       | 3.1uH, 15%,26A,2.09mΩ Wurth Electronics 7443630310                      |
| L2                                      | 1                                       | 6.8uH,20%,18.5A,4.1mΩ Wurth Electronics 7443556680                      |

| N1,N2,N5                                 |   3 | 60V,25A,13mΩ Renesas RJK0651DPB-00#J5                                            |
|------------------------------------------|-----|----------------------------------------------------------------------------------|
| N3, N4, N6                               |   3 | 60V,45A,4.5mΩ Renesas RJK0653DPB-00#J5                                           |
| D1,D2                                    |   2 | DIODE SCHOTTKY 60V 5A TO277A Vishay Semiconductor SS5P6-M3/86A                   |
| D3,D4                                    |   2 | DIODE SCHOTTKY 100V 250MA NXP Semiconductors BAT46WJ,115                         |
| D5,D6                                    |   0 | Open                                                                             |
| D7                                       |   0 | Open                                                                             |
| U1                                       |   1 | MAX17559 Maxim MAX17559ACJ+                                                      |
| VIN,PGND,VOUT1,PGND,VOUT2,EN1,EN2,PGOO11 |     | 20G tinned copper Bus wire formed into 'U' shaped loops (0.25' off the PC board) |
| JU1, JU2                                 |   6 | 3-pin header ( 0.1' pitch) Sullins PREC003SAAN-RC                                |
| VIN,PGND,VOUT1,PGND,VOUT2,PGND           |   2 | Non -Insulate Jack Keystone Electronics 575-4                                    |
| CONN JUMPER SHORTING TIN                 |   2 | Shunts, 0.1" Pitch Sullins STC02SYAN                                             |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->