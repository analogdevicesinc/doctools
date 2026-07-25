<!-- lastmod 2022-08-03 -->
## General Description

The MAX8559 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains two independent dual-output low-dropout (LDO) regulator  circuits.  The  top  circuit  utilizes  the  TDFN  package and is configured for outputs of 2.85V at 300mA and 1.8V at 300mA. The bottom circuit uses the UCSP™ package to minimize board space and is configured for 3.0V at 150mA and 2.85V at 150mA. Each circuit features two on-board shutdown controls, one for each regulator output. Pulling both shutdown controls low places the corresponding MAX8559 into a 0.01µA low-power shutdown mode.

## Component List

| DESIGNATION                     |   QTY | DESCRIPTION                                                         |
|---------------------------------|-------|---------------------------------------------------------------------|
| C1, C4, C5                      |     3 | 4.7µF, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J475KE19  |
| C3, C8                          |     2 | 0.01µF, 25V X7R ceramic capacitors (0402) Taiyo Yuden TMK105BJ103KV |
| C7, C9, C10                     |     3 | 2.2µF, 6.3V X5R ceramic capacitors (0603) Murata GRM185R60J225K     |
| SHDNA , SHDNB , SHDNA2 , SHDNB2 |     4 | 3-pin headers                                                       |
| Shunts                          |     4 | Shunts                                                              |
| U1                              |     1 | MAX8559ETA (TDFN)                                                   |
| U2                              |     1 | MAX8559EBA (UCSP)                                                   |
| None                            |     1 | MAX8559 EV kit PC board                                             |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE         |
|-------------|--------------|-----------------|
| Murata      | 814-237-1431 | www.murata.com  |
| Taiyo Yuden | 408-573-4150 | www.t-yuden.com |

Note: Indicate that you are using the MAX8559 when contacting these component suppliers.

UCSP is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

Features

- ♦ Dual-Output Power Supply MAX8559ETA: 2.85V at 300mA and 1.8V at 300mA MAX8559EBA: 3.0V at 150mA and 2.85V at 150mA
- ♦ 2.5V to 6V Input Supply Range
- ♦ Low-Noise (&lt;40µVRMS) Outputs
- ♦ Individual On-Board Shutdown Control
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE    |
|--------------|------------------|---------------|
| MAX8559EVKIT | 0 ° C to +70 ° C | 8 TDFN 8 UCSP |

## Quick Start

## Recommended Equipment

- One variable DC power supply capable of supplying up to 6V at 0.8A
- Two voltmeters (DMM)

## Procedure (MAX8559ETA, TDFN Package)

The MAX8559 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Set the power supply to 3.6V.
- 2) Ensure the power supply is turned off. Do not turn on the power supply until all connections are completed.
- 3) Ensure shunts are placed across pins 2 and 3 of jumpers SHDNA and SHDNB on the MAX8559 EV kit.
- 4) Connect the positive output of the power supply to the VIN pad on the PC board and the negative output of the power supply to the GND pad.
- 5) Connect a voltmeter across the VOUTA pad on the PC board and the corresponding GND pad.
- 6) Connect a voltmeter across the VOUTB pad on the PC board and the corresponding GND pad.
- 7) Turn on the power supply.
- 8) Verify the voltage at VOUTA is 2.85V.
- 9) Verify the voltage at VOUTB is 1.8V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX8559 Evaluation Kit

## Procedure (MAX8559EBA, UCSP Package)

The MAX8559 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Set the power supply to 3.6V.
- 2) Ensure the power supply is turned off. Do not turn on the power supply until all connections are completed.
- 3) Ensure shunts are placed across pins 2 and 3 of jumpers SHDNA2 and SHDNB2 on the MAX8559 EV kit.
- 4) Connect the positive output of the power supply to the VIN2 pad on the PC board and the negative output of the power supply to the GND2 pad.
- 5) Connect a voltmeter across the VOUTA2 pad on the PC board and the corresponding GND2 pad.
- 6) Connect a voltmeter across the VOUTB2 pad on the PC board and the corresponding GND2 pad.
- 7) Turn on the power supply.
- 8) Verify the voltage at VOUTA2 is 3.0V.
- 9) Verify the voltage at VOUTB2 is 2.85V.

## Detailed Description

The MAX8559 EV kit contains two separate LDO regulator  circuits.  Either  circuit  can  be  powered  from  a  DC power supply with a 2.5V to 6V input range. The top and bottom circuits are separate from each other and do not share a common ground plane.

The top circuit (MAX8559ETA) provides two fixed output voltages (2.85V and 1.8V) at 300mA each. The TDFN package is 3mm x 3mm and allows 1.95W of power dissipation. SHDNA and SHDNB are wired out to jumpers for selection between VIN and GND.

The bottom circuit (MAX8559EBA) provides two fixed output voltages (3.0V and 2.85V) at 150mA each. This circuit is  used to demonstrate the excellent low-noise performance of the MAX8559. SHDNA and SHDNB are wired out to jumpers for selection between VIN and GND.

## Shutdown Control

The MAX8559 has two SHDN\_ inputs. A logic low on SHDNA shuts down regulator A, while a logic low on SHDNB shuts down regulator B. If SHDNA and SHDNB are both low, both regulators and the internal reference are off and the supply current is reduced to 10nA. If either SHDNA or SHDNB is a logic high, the internal reference is on. See Table 1 and Table 2 for shunt positions.

## Table 1. Shutdown Selection (MAX8559ETA, TDFN Package)

| SHDNA JUMPER POSITION   | SHDNA            | SHDNB JUMPER POSITION   | SHDNB            | DESCRIPTION                                                    |
|-------------------------|------------------|-------------------------|------------------|----------------------------------------------------------------|
| 1 and 2                 | Connected to GND | 1 and 2                 | Connected to GND | Both regulators are shut down. Typical supply current is 10nA. |
| 2 and 3                 | Connected to VIN | 1 and 2                 | Connected to GND | Regulator A is enabled, regulator B is shut down.              |
| 1 and 2                 | Connected to GND | 2 and 3                 | Connected to VIN | Regulator A is shut down, regulator B is enabled.              |
| 2 and 3*                | Connected to VIN | 2 and 3*                | Connected to VIN | Both outputs are enabled.                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 2. Shutdown Selection (MAX8559EBA, UCSP Package)

| SHDNA2 JUMPER POSITION   | SHDNA             | SHDNB2 JUMPER POSITION   | SHDNB             | DESCRIPTION                                                 |
|--------------------------|-------------------|--------------------------|-------------------|-------------------------------------------------------------|
| 1 and 2                  | Connected to GND2 | 1 and 2                  | Connected to GND2 | Both outputs are shut down. Typical supply current is 10nA. |
| 2 and 3                  | Connected to VIN2 | 1 and 2                  | Connected to GND2 | Regulator A is enabled, regulator B is shut down.           |
| 1 and 2                  | Connected to GND2 | 2 and 3                  | Connected to VIN2 | Regulator A is shut down, regulator B is enabled.           |
| 2 and 3*                 | Connected to VIN2 | 2 and 3*                 | Connected to VIN2 | Both outputs are enabled.                                   |

<!-- image -->

Figure 1. MAX8559 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8559 Evaluation Kit

Figure 2. MAX8559 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8559 Evaluation Kit

<!-- image -->

Figure 3. MAX8559 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8559 Evaluation Kit

Figure 4. MAX8559 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600