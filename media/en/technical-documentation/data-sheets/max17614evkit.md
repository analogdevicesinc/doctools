<!-- lastmod 2025-02-13 -->
<!-- image -->

## Evaluates: MAX17614 in Ideal Diode/Power Source Selector Applications

## General Description

The MAX17614  evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the  MAX17614 ideal diode/power source selector in a 20-pin TQFN-EP package. The EV kit allows two power sources to be connected as inputs. The load gets power from  the  higher  voltage  power  source  for  ideal  diode applications. For power source selector applications, the load gets power from either of the two power sources by driving  respective  EN  pins.  The  EV  kit  configurations allow  independent  settings  for  the  two  instances  to demonstrate adjustable overvoltage, undervoltage, reverse current blocking, three current-limit types (autoretry, continuous, and latch-off) with different programmable  current-limit  thresholds  (from  0.15A  to 3A). For more details about the IC benefits and features, refer to the MAX17614 IC data sheet.

## Features

- 4.5V to 40V Operating Input Voltage Range (Remove the TVS Diodes D101, D201, and Open Jumpers JU101, JU201 to Extend the Operating Range up to 60V)
- 40V TVS Diodes (D101 and D201) across the Input Terminals
- Schottky Diode (D103) across the Output Terminals
- Evaluates Undervoltage Lockout (UVLO1, UVLO2), Overvoltage Lockout (OVLO1, OVLO2), Three Current-Limit Types, and Current-Limit Thresholds
- UVLO Programmed to 4.5V for Both Input Voltages
- OVLO Programmed to 40.2V for Both Input Voltages
- Internally Pulled-Up Active High Enable Inputs
- Jumper-Configurable Current Limits (Selected as 0.3A by Default)
- Jumper-Configurable (JU102, JU202) Current-Limit Types (Selected as Autoretry by Default)
- Programmable Startup Blanking Times (C103, C203)
- Fault Indication Signals ( UVOV1, UVOV2, FLAG1 , FLAG2)
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

319-101000; Rev 1; 8/23

MAX17614 Evaluation Kit

## Quick Start

## Configuration Diagram

Figure 1. MAX17614 EV Kit Setup Diagram

<!-- image -->

## Required Equipment

- MAX17614 EV kit
- Two 60V, 4A DC power supplies
- Multimeters
- Adjustable load (0A to 3.5A)
- USB power source or 5V DC power supply

## Equipment Setup and Test Procedure

A typical bench setup for MAX17614 EV Kit is shown in Figure 1.

The EV kit is fully assembled and tested. Follow the steps to verify board operation.

## Caution: Do not turn on power supply until all connections are completed.

1. Connect the USB cable to J103 from a USB power source or connect a 5V DC power supply to 5V test point.
2. Verify that LED1 glows.
3. Verify that the JU105 and JU205 jumpers are installed.
4. Verify that all jumpers are in their default positions.
5. Set the first 60V DC power supply (VIN1) to 5V and connect to VIN1 (J101). Verify that VOUT (J102) is 5V.
6. Connect a 200 Ω resistive load across VOUT and GND terminals.

## Follow the steps (7-10) to test OVLO operation.

7. Gradually increase VIN1 and monitor VOUT voltage (J102). Verify that VOUT voltage (J102) increases as VIN1 increases and goes down when the input voltage reaches approximately 40.2V. Also check that UVOV1 status changes from 0V to 5V.

Evaluates: MAX17614 in Ideal Diode/Power Source Selector Applications

8. Gradually decrease VIN1 and verify that VOUT voltage (J102) is restored back when the input voltage reaches approximately 38.8V. Also check that UVOV1 status changes from 5V to 0V.
9. Reduce VIN1 to zero volts and verify that the output voltage goes down to zero volts.
10.  Set the second 60V DC power supply (VIN2) to 5V and connect to VIN2 (J201). Verify that VOUT (J102) is 5V. Repeat the steps 7-8 and verify the device U2 performance for OVLO operation.

## Follow the steps (11-14) to test current-limit operation.

11.  Set VIN1 to 24V and connect the adjustable load between VOUT and GND terminals and a multimeter in series to measure the current. Gradually increase the load current and verify that VOUT (J102) goes down when the load current increases above 0.3A. Also check that FLAG1 status changes from 5V to 0V.
12.  Jumper JU103 can be configured to change the current limit as shown in Table 3 . Verify various current-limit settings by repeating Step 11.
13.  Reduce VIN1 to zero volts and verify that the output voltage goes down to zero volts.
14.  Set the second 60V DC power supply (VIN2) to 24V and connect to IN2 (J201). Verify that VOUT (J102) is 24V. Repeat the steps 11-12 and verify the device U2 performance for different current-limit settings.

## Follow the steps (15-20) to test ideal diode application.

15.  Configure the jumpers JU103 and JU203 to current-limit setting = 3A as shown in Table 3 and connect 2.7A load between VOUT and GND terminals.
16.  Set VIN2 to 20V and connect to VIN2 (J201). Verify that VOUT (J102) is 20V.
17.  Set VIN1 to 24V and connect to VIN1 (J101) to observe seamless switchover of VOUT voltage (J102) from VIN2 = 20V to VIN1 = 24V.
18.  Observe that device U1 enters forward conduction state by verifying FLAG1 status change from 0V to 5V and device U2 enters reverse blocking state by verifying FLAG2 status change from 5V to 0V.
19.  Set the first DC power supply (VIN1) to 18V and observe seamless switchover of VOUT voltage (J102) from VIN1 to 20V.
20.  Observe that device U1 enters reverse blocking state by verifying FLAG1 status change from 5V to 0V and device U2 enters forward conduction state by verifying FLAG2 status change from 0V to 5V .

## Follow the steps (21-26) to test power source selector application.

21.  Configure the jumpers JU103 and JU203 to current-limit setting = 3A as shown in Table 3 and connect 2.7A load between VOUT and GND terminals.
22.  Set VIN1 to 24V and connect to VIN1 (J101). Verify that VOUT (J102) is 24V. Verify that the load is supported from VIN1.
23.  Set VIN2 to 20V and connect to VIN2 (J201). Verify that VOUT (J102) is still 24V and the load is supported from VIN1.
24.  Set JU104, JU204 open and drive EN1 low with a waveform generator. Verify that VOUT (J102) switchover to VIN2 (= 20V) and IIN1 is 0A, the load is supported from VIN2.
25.  Drive EN1 high with a waveform generator. Verify that VOUT (J102) switchover to VIN1 (= 24V) and IIN2 = 0A, the load is supported from VIN1.
26.  To select/deselect the second power supply (VIN2), drive EN2 high and low with a waveform generator. Repeat steps 21-25 to demonstrate power source selector application using EN2.

## Detailed Description of Hardware

The conventional redundant power architecture solution to support a critical load is to OR two power sources using Schottky diodes. In this scheme, if one of the power sources were to fail, switchover to the other source occurs smoothly without  interruption  of  power  to  the  load.  However,  the  Schottky-based  solution  suffers  from  power  loss  and  higher temperature  rise  while  also  requiring  a  large  number  of  discrete  components  for  implementation  of  other  important protection features such as current limit, UVLO, and OVLO.

The MAX17614 device with internal back-to-back nFETs provides a highly integrated, efficient, and reliable ideal diode solution for fast and seamless switchover response while delivering significant reduction in component count and design complexity . The MAX17614 EV kit circuit can be configured to evaluate the MAX17614 performance for ideal diode applications and power source selector applications during selection of input supply voltages by driving respective EN signals (EN1 and EN2).

The MAX17614 EV kit circuit can be configured to evaluate user-defined UVLO and OVLO thresholds using respective resistor-dividers.  The  current-limit  threshold  is  determined  by  external  resistors  connected  to  the  SETI  pin  and  is configurable through jumpers JU103 and JU203. Using jumpers JU102 and JU202, the EV kit circuit can be configured to evaluate autoretry, continuous, and latch-off current-limit modes. LED1 on the EV kit indicates availability of logic power for fault indication signals ( UVOV1, UVOV2, FLAG1, and FLAG2) . The MAX17614 offers a programmable startup blanking time that enables charging of large capacitances on the output during startup and when recovering from a fault condition. Connecting a capacitor (C103, C203) from the TSTART pin (TSTART1 and TSTART2) to GND programs the startup blanking time. The EV kit provides on-board output capacitors (C107, C108) to enable a demonstration of the MAX17614 protection features while charging large capacitors. The capacitors (C107, C108) can be disconnected using Jumper JU106.  For more details about the IC benefits and features, refer to the MAX17614 IC data sheet.

## Input Power Supply

The EV kit is powered by two user-supplied 4.5V to 60V power supplies connected between input connector (J101 and J201) terminals. The EV kit features 40V rating TVS diodes at input terminals to support high input surge applications. To extend the operating input voltage up to 60V, remove TVS diode and adjust OVLO resistor configuration accordingly with reference to Undervoltage Lockout/Overvoltage Lockout (UVLO/OVLO) Programming section.

## Ideal Diode Application

The EV kit features jumpers (JU105 and JU205) to connect the OUT pins of devices U1 and U2 to VOUT (J102) (see Table 1 ). For more details about the MAX17614 timing parameters for ideal diode applications, refer to the MAX17614 IC data sheet.

## Table 1. Output Jumper (JU105, JU205) Settings

| JU105 SHUNT POSITION   | JU205 SHUNT POSITION   | DESCRIPTION                                                              |
|------------------------|------------------------|--------------------------------------------------------------------------|
| Installed*             | Installed*             | Ideal diode application: Both OUT1 and OUT2 are connected to VOUT (J102) |
| Installed              | Not Installed          | Only OUT1 is connected to VOUT (J102)                                    |
| Not Installed          | Installed              | Only OUT2 is connected to VOUT (J102)                                    |
| Not Installed          | Not Installed          | Both OUT1 and OUT2 are not connected to VOUT (J102)                      |

*Default Position

## Power Source Selector

The EN pin of the MAX17614 allows a system microcontroller to turn ON/OFF power to the load, thus enabling the system to select a power source based on operating conditions. Configure shunt position not installed for jumpers JU104 and JU204 and drive the EN pins of devices U1 and U2 high or low for selection of input supply voltages.

Choose the jumpers (JU104 and JU204) settings to enable or disable operation of the MAX17614 (see Table 2 ).

## Table 2. EN (JU104, JU204) Settings

| SHUNT POSITION   | DESCRIPTION                 |
|------------------|-----------------------------|
| Not Installed*   | EN1/EN2 pin unconnected     |
| 1-2              | EN1/EN2 is connected to GND |

*Default Position

## Setting the Current-Limit Threshold (SETI)

The EV kit features jumpers (JU103 and JU203) to select the current-limit threshold. Install jumpers as shown in Table 3 to change the current-limit threshold. The current limit can be programmed between 0.15A to 3A. The current limit (ILIM) is programmed by the resistor RSETI connected at the SETI pin. Use the following equation to calculate the current-limit setting resistor:

<!-- formula-not-decoded -->

where ILIM is the desired current limit in mA and RSETI is in kΩ.

Do not use RSETI lower than 1.5kΩ.

## Table 3. Current-Limit Threshold Jumper (JU103, JU203) Settings

| SHUNT POSITION   | CURRENT-LIMIT THRESHOLD                        |
|------------------|------------------------------------------------|
| 1-2              | Adjustable using the resistor pot (R107, R207) |
| 3-4*             | 0.3A                                           |
| 5-6              | 1.5A                                           |
| 7-8              | 3A                                             |

## Current Monitoring

The MAX17614 features read out of the current flowing from IN-to-OUT. The current from IN-to-OUT is mirrored with a ratio of 3032 (C IRATIO ) and flows out through the SETI pin, into the external current-limit resistor. The voltage on the SETI pin provides information about IN current with the following relationship:

<!-- formula-not-decoded -->

where I IN-OUT  is current from IN-to-OUT in A

VSETI  is SETI pin voltage in V

and R SETI is in kΩ

## Current-Limit Type Selection (CLMODE)

The EV kit features jumpers (JU102 and JU202) to select different current-limit type responses (see Table 4 ). For more details about each current-limit type, refer to the MAX17614 IC data sheet.

## Table 4. Current-Limit Type Selection (JU102, JU202)

| SHUNT POSITION   | CURRENT-LIMIT TYPE   |
|------------------|----------------------|
| 1-2              | Latch-off            |
| 2-3              | Continuous           |
| Not Installed*   | Autoretry            |

*Default Position

## Undervoltage Lockout/Overvoltage Lockout (UVLO/OVLO) Programming

The UVLO threshold for input voltage is set through the R101, R102 resistive divider for U1 and R201, R202 resistive divider for U2, respectively. Use the following equations to calculate the value of R102 and R202 to adjust falling input UVLO threshold. The recommended value of R101 and R201 is 2.2M Ω .

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where V UVF  = 1.45V (typ)

VIN1\_UVF  = Required falling input undervoltage threshold for U1

VIN2\_UVF  = Required falling input undervoltage threshold for U2

The OVLO threshold for input voltage is set through the R103, R104 resistive divider for U1 and R203, R204 resistive divider for U2, respectively. Use the following equation to calculate the value of R104 and R204 to adjust rising input OVLO threshold. The recommended value of R103 and R203 is 450k Ω to 500kΩ .

<!-- formula-not-decoded -->

## MAX17614 Evaluation Kit

where V OVR  = 1.5V (typ)

VIN1\_OVR  = Required rising input overvoltage threshold for U1

VIN2\_OVR  = Required rising input overvoltage threshold for U2

## Startup Blanking Time (TSTART) Programming

Connecting a capacitor from the TSTART1/TSTART2 pin to GND programs the startup blanking time. In order to program tTSTART1/tTSTART2, the capacitor C103/C203 connected to the TSTART1/TSTART2 pin is charged with a constant current of 5μA (typ). When the voltage on the capacitor (C103/C203) reaches 1.5V, t TSTART1/tTSTART2 is considered expired and C103/C203 is discharged to ground.

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

For more details about startup requirements, refer to the MAX17614 IC data sheet.

## Output Load Capacitor

Configure Jumper JU106 to connect output to 470µF capacitors (see Table 5 ).

## Table 5. Output Load Capacitor (JU106) Settings

| SHUNT POSITION   | DESCRIPTION                        |
|------------------|------------------------------------|
| Installed        | C107 and C108 connected to OUT     |
| Not Installed*   | C107 and C108 not connected to OUT |

*Default Position

## Evaluates: MAX17614 in Ideal Diode/Power Source Selector Applications

<!-- formula-not-decoded -->

## MAX17614 EV Kit Typical Operating Characteristics

(C IN1  = C IN2  = 1µF, C OUT  = 4.7µF, V IN1  = 24V, V IN2  = 20V, V BUS  = 5V, I LIMIT1  = I LIMIT2  = 3A, CLMODE1 = CLMODE2 = Autoretry, VIN1\_OVR  = V IN2\_OVR  = 40.2V, T A  = +25°C, unless otherwise noted. I IC1 , I IC2  measured using JU105, JU205, respectively)

<!-- image -->

INTA

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17614 Evaluation Kit

## Evaluates: MAX17614 in Ideal Diode/Power Source Selector Applications

(C IN1  = C IN2  = 1µF, C OUT  = 4.7µF, V IN1  = 24V, V IN2  = 20V, V BUS  = 5V, I LIMIT1  = I LIMIT2  = 3A, CLMODE1 = CLMODE2 = Autoretry, VIN1\_OVR  = V IN2\_OVR  = 40.2V, T A  = +25°C, unless otherwise noted. I IC1 , I IC2  measured using JU105, JU205, respectively)

<!-- image -->

<!-- image -->

## Component Suppliers

| SUPPLIER            | WEBSITE            |
|---------------------|--------------------|
| Murata Americas     | www.murata.com     |
| Vishay              | www.vishay.com     |
| Panasonic           | www.panasonic.com  |
| Taiyo Yuden         | www.taiyoyuden.com |
| Diodes Incorporated | www.diodes.com     |
| Bourns, Inc.        | www.bourns.com     |

Note:

Indicate that you are using MAX17614 when contacting these component suppliers.

<!-- image -->

<!-- image -->

## MAX17614 EV Kit Bill of Materials

|   S.NO | PART REFERENCE                                                             |   QTY | DESCRIPTION                                                                                                        | MANUFACTURER PART NUMBER                 |
|--------|----------------------------------------------------------------------------|-------|--------------------------------------------------------------------------------------------------------------------|------------------------------------------|
|      1 | C1                                                                         |     1 | 1µF 10% 25V X7R ceramic capacitor (0603)                                                                           | TAIYO YUDEN TMK107B7105KA                |
|      2 | C102, C202                                                                 |     2 | 1µF 10% 100V X7R ceramic capacitor (1206)                                                                          | TAIYO YUDEN HMK316B7105KLH               |
|      3 | C104                                                                       |     1 | 4.7µF 10% 100V X7R ceramic capacitor (1206)                                                                        | MURATA GRM31CZ72A475KE11                 |
|      4 | C107, C108                                                                 |     2 | 470µF 20% 63V aluminum (8mm)                                                                                       | PANASONIC EEU-FR1J471                    |
|      5 | D1                                                                         |     1 | Power Schottky Diode, 60V, 1A (SMA)                                                                                | DIODES INCORPORATED B160-13-F            |
|      6 | D101, D201                                                                 |     2 | TVS Diode, 40V, 600W (SMB)                                                                                         | BOURNS SMBJ40CA                          |
|      7 | D103                                                                       |     1 | Power Schottky Diode, 100V, 2A (POWERDI-123)                                                                       | DIODES INCORPORATED DFLS2100             |
|      8 | LED1                                                                       |     1 | Green LED (1206)                                                                                                   | LUMEX OPTOCOMPONENTS INC SML-LX1206GC-TR |
|      9 | R1                                                                         |     1 | SMT Resistor 1kΩ 1% (0805) 0.125W                                                                                  | VISHAY DALE CRCW08051K00FK               |
|     10 | R101, R201                                                                 |     2 | SMT Resistor 2.2MΩ 1% (0603) 0.1W                                                                                  | VISHAY DALE CRCW06032M20FK               |
|     11 | R102, R202                                                                 |     2 | SMT Resistor 1.1MΩ 1% (0603) 0.1W                                                                                  | VISHAY CRCW06031M10FK                    |
|     12 | R103, R203                                                                 |     2 | SMT Resistor 470kΩ 1% (0603) 0.1W                                                                                  | VISHAY DALE CRCW0603470KFK               |
|     13 | R104, R204                                                                 |     2 | SMT Resistor 18.2kΩ 1% (0603) 0.1W                                                                                 | PANASONIC ERJ-3EKF1822                   |
|     14 | R105, R113, R205, R213                                                     |     4 | SMT Resistor 4.99kΩ 1% (0402) 0.063W                                                                               | VISHAY DALE CRCW04024K99FK               |
|     15 | R106, R206                                                                 |     2 | SMT Resistor 150kΩ 1% (0402) 0.063W                                                                                | VISHAY DALE CRCW0402150KFK               |
|     16 | R107, R207                                                                 |     2 | Through-Hole Radial Trimmer Potentiometer 50kΩ 10% 0.5W                                                            | BOURNS 3296W-1-503LF                     |
|     17 | R108, R111, R208, R211                                                     |     4 | SMT Resistor 1.5kΩ 1% (0402) 0.063W                                                                                | VISHAY DALE CRCW04021K50FK               |
|     18 | R109, R209                                                                 |     2 | SMT Resistor 15kΩ 1% (0402), 0.063W                                                                                | VISHAY DALE CRCW040215K0FK               |
|     19 | R110, R210                                                                 |     2 | SMT Resistor 3kΩ 1% (0402) 0.063W                                                                                  | VISHAY DALE CRCW04023K00FK               |
|     20 | R112, R212                                                                 |     2 | SMT Resistor 20kΩ 1% (0402) 0.063W                                                                                 | VISHAY DALE CRCW040220K0FK               |
|     21 | R114, R115, R214, R215                                                     |     4 | SMT Resistor 10kΩ 1% (0402) 0.063W                                                                                 | VISHAY DALE CRCW040210K0FK               |
|     22 | U1, U2                                                                     |     2 | 4.5V to 60V, 3A, Ideal Diode/Power Path Selector with Current Limit, UV, OV Protection (20-pin TQFN-EP, 4mm x 4mm) | ADI MAX17614ATP+                         |
|     23 | 5V                                                                         |     1 | Red Test Point 0.040" (1.02mm) Hole Diameter                                                                       | KEYSTONE 5000                            |
|     24 | EN1, EN2, UVLO1, UVLO2                                                     |     4 | White Test Point 0.063" (1.60mm) Hole Diameter                                                                     | KEYSTONE 5012                            |
|     25 | FLAG1 , FLAG2 , OVLO1, OVLO2, SETI1, SETI2, TSTART1, TSTART2, UVOV1, UVOV2 |    10 | White Test Point 0.040" (1.02mm) Hole Diameter                                                                     | KEYSTONE 5002                            |
|     26 | GND, GND1, GND3                                                            |     3 | Black Test Point 0.063" (1.60mm) Hole Diameter                                                                     | KEYSTONE 5011                            |
|     27 | GND2, GND4                                                                 |     2 | Black Test Point 0.040" (1.02mm) Hole Diameter                                                                     | KEYSTONE 5001                            |
|     28 | OUT1, OUT2, VIN1, VIN2, VOUT                                               |     5 | Red Test Point 0.063" (1.60mm) Hole Diameter                                                                       | KEYSTONE 5010                            |

Evaluates: MAX17614 in Ideal Diode/Power Source Selector Applications

## Evaluates: MAX17614 in Ideal Diode/Power Source Selector Applications

|   S.NO | PART REFERENCE                                  |   QTY | DESCRIPTION                              | MANUFACTURER PART NUMBER            |
|--------|-------------------------------------------------|-------|------------------------------------------|-------------------------------------|
|     29 | SU1-SU11                                        |    11 | Shunt Connector, Black Closed Top        | SULLINS ELECTRONICS CORP. STC02SYAN |
|     30 | J101, J102, J201                                |     3 | 2-Pin Green PC Terminal Block            | TE CONNECTIVITY 282837-2            |
|     31 | J103                                            |     1 | USB B connector                          | FCI CONNECT 61729-0010BLF           |
|     32 | JU101, JU104, JU105, JU106, JU201, JU204, JU205 |     5 | 2-Pin Single-Row Header                  | SULLINS ELECTRONICS CORP. GCC02SAAN |
|     33 | JU102, JU202                                    |     4 | 3-Pin Single-Row Header                  | SULLINS ELECTRONICS CORP. GBC03SAAN |
|     34 | JU103, JU203                                    |     2 | 2x4 Dual-Row Header                      | SULLINS ELECTRONICS CORP. GBC04DAAN |
|     35 | C101, C201                                      |     2 | PACKOUT: Aluminum-Electrolytic Capacitor | PANASONIC EEE-FK1K4R7P              |
|     36 | C103, C203                                      |     0 | OPEN: Ceramic Capacitor (0603)           | -                                   |
|     37 | C105, C106                                      |     2 | PACKOUT: Ceramic Capacitor (1206)        | MURATA GRM31CZ72A475KE11            |
|     38 | D102, D202                                      |     2 | PACKOUT: 40V, 600W, TVS (SMB)            | BOURNS SMBJ40CA                     |
|     39 | PCB                                             |     1 | PCB: MAX17614 Evaluation Kit             | -                                   |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU103                  | (3:4)                  |
| JU105                  | (1:2)                  |
| JU203                  | (3:4)                  |
| JU205                  | (1:2)                  |

## MAX17614 EV Kit Schematics

<!-- image -->

A

<!-- image -->

## MAX17614 EV Kit PCB Layout

<!-- image -->

## MAX17614 EV Kit PCB Layout (Continued)

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17614EVKIT# | EV Kit |

#Denotes RoHS compliance.

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 6/23            | Initial release                    | -               |
|                 1 | 8/23            | Updated MAX17614 EV Kit Schematics | 12              |

<!-- image -->

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable.  However,  no  responsibility  is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.

Evaluates: MAX17614 in Ideal Diode/Power Source Selector Applications