<!-- lastmod 2022-08-04 -->
## General Description

The MAX1612 evaluation kit (EV kit) is a complete bridge-battery management circuit. A small 2.4V, 50mAh NiCd battery, similar to the type commonly used in  bridge  circuits  of  notebook  computers,  is  mounted on the board. When the main power source is disconnected, the MAX1612 boosts the 2-cell bridge battery voltage to 6V to power the load. The MAX1612 also controls the battery's trickle charge cycle.

The MAX1612 evaluation board can also be used to evaluate the MAX1613. Simply order a free sample of the MAX1613EEE and replace the MAX1612 with the MAX1613.

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| BATT1         |     1 | 2.4V, 50mAh NiCd battery pack TNR Technical N50AAAF2SMT (2 x Sanyo N50AAA)      |
| C1            |     1 | 0.33µF ceramic capacitor                                                        |
| C2            |     1 | 4.7nF ceramic capacitor                                                         |
| C3            |     1 | 68nF ceramic capacitor                                                          |
| C4            |     1 | 1µF ceramic capacitor                                                           |
| C5            |     1 | 100µF, 10V low-ESR tantalum cap AVX TPSD107M010R0100 or Sprague 593D107X0010D2W |
| C6            |     1 | 22µF, 35V low-ESR tantalum cap AVX TPSE226M035R0300 or Sprague 593D226X0035E2W  |
| C7            |     0 | Not installed                                                                   |
| D1            |     1 | 30V, 500mA Schottky diode Motorola MBR0530                                      |
| D2            |     1 | Not installed                                                                   |

## Component Suppliers

| SUPPLIER      | PHONE        | FAX          |
|---------------|--------------|--------------|
| Coilcraft     | 847-639-6400 | 847-639-1469 |
| Coiltronics   | 561-241-7876 | 561-241-9339 |
| Sprague       | 603-224-1961 | 603-224-1430 |
| Sumida        | 847-956-0666 | 847-956-0702 |
| TNR Technical | 714-253-9944 | 714-253-9949 |

- ' Bridge-Battery Charger
- ' 6V, 50mA Bridge Output
- ' 5V Linear Regulator
- ' Input Voltage Disconnect Detection
- ' Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1612EVKIT | 0°C to +70°C  | 16 QSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| L1            |     1 | 22µH, 800mA power inductor Coilcraft DS1608C-223, Sumida CD43-220, or equivalent |
| J1-J5         |     5 | 2-pin jumpers                                                                    |
| R1            |     1 | Not installed                                                                    |
| R2            |     1 | 2.2k Ω , 5% resistor                                                             |
| R3            |     1 | 442k Ω , 1% resistor                                                             |
| R4            |     1 | 20k Ω , 1% resistor                                                              |
| R5            |     1 | 200k Ω , 1% resistor                                                             |
| R6            |     1 | 160k Ω , 5% resistor                                                             |
| R7, R8        |     2 | 470k Ω , 5% resistors                                                            |
| SW1           |     1 | Momentary switch                                                                 |
| U1            |     1 | MAX1612EEE                                                                       |
| None          |     5 | Shunts                                                                           |
| None          |     1 | MAX1612 printed circuit board                                                    |
| None          |     1 | MAX1612/MAX1613 data sheet                                                       |

## Quick Start

The MAX1612 EV kit is shipped with the on-board battery disconnected. The battery must be charged before use. Follow these steps to charge the battery and verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Install  a  shunt  across  all  jumpers  to  set  the  board for operation without external signals. Note: Be sure to reinstall the shunt across J2; prior to shipment, this shunt was removed to disconnect the battery.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

<!-- image -->

Features

## MAX1612 Evaluation Kit

- 2) Connect a 15V power supply to the VCHARGE pad and voltmeters to the FULL and VMAIN pads.
- 3) Turn on the power supply and momentarily press Switch SW1 to reset the internal counter. Then verify that  the  voltmeter  attached  to  the  FULL  pad  indicates a logic-low level (&lt; 0.4V). Jumper J3 connects the FULL pin to the CCMD pin,  placing  the MAX1612 in the battery-charge mode. The voltmeter attached to the VMAIN pad will read the input voltage.
- 4) The battery will take up to 16 hours to charge. Full charge is indicated when the FULL pin goes high (&gt; 2.4V).
- 5) Physically disconnect the input supply, and the VMAIN voltage will be held above 6V by the MAX1612.

Note: The board may be operated using an external 2.4V power supply instead of the on-board battery by removing the shunt across jumper J2 and attaching the supply to the BBATT pin.

## Table 1.  Jumper Functions

| JUMPER   | SHUNT POSITION   | PIN CONNECTION                     | MAX1612 OPERATION                                                                                                     |
|----------|------------------|------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| -J1      | Shorted          | VCHARGE connected to VMAIN         | Normal connection                                                                                                     |
| -J1      | Open             | VCHARGE disconnected               |                                                                                                                       |
| -J2      | Shorted          | On-board battery connected         | Normal connection                                                                                                     |
| -J2      | Open             | On-board battery disconnected      | An external battery or power supply may be connected to the BBATT pad.                                                |
| J3       | Shorted          | CCMD pin connected to the FULL pin | Charges the battery whenever the FULL pin goes low.                                                                   |
| J3       | Open             | CCMD pin open                      | Charge cycle controlled by an external signal connected to the CCMD pad.                                              |
| J4       | Shorted          | BBON pin connected to the LBO pin  | Turns on the DC-DC converter whenever the LBO pin goes low.                                                           |
| J4       | Open             | BBON pin open                      | DC-DC converter controlled by an external signal connect- ed to the BBON pad. See Figure 2 in the MAX1612 data sheet. |
| J5       | Shorted          | DCMD pin connected to the LBO pin  | The internal timer counts down whenever the LBO pin is low.                                                           |
| J5       | Open             | DCMD pin open                      | The countdown function is controlled by an external signal connected to the DCMD pad.                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description

The MAX1612 evaluation board can be operated with or  without  external  control.  With  shunts  across  J1-J5, the board will drive VMAIN to 6V when VCHARGE is removed and will control the charging of the bridge battery whenever VCHARGE is greater than 7V. Alternatively, the shunts across J3-J5 can be removed and external signals used to control the board.

## Jumper Selection

The jumpers on the board may be removed to allow alternate batteries or to control the MAX1612 with external  signals.  Table  1  lists  the  jumpers  and  their  functions.

## Component Selection

The capacitor values controlling the charge and discharge timers will need to be adjusted for each application.  The  ideal  charge  time  depends on the charge current set by R2 and the actual battery being used. The discharge time depends on the load during the discharge cycle. Refer to the MAX1612 data sheet for instructions on selecting values for your application.

Resistor R1 and diode D2 may be installed to provide a low-level current to compensate for the bridge battery's self-discharge.

Figure 1.  MAX1612 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1612 Evaluation Kit

<!-- image -->

Figure 2.  MAX1612 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX1612 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX1612 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600