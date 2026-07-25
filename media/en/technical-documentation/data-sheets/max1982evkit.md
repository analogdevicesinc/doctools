<!-- lastmod 2022-08-05 -->
## General Description

The MAX1982 evaluation kit (EV kit) provides a regulated 1.2V output voltage while operating on input voltages from 1.25V to 5.5V. It delivers a 0.3A output current from a 1.25V to 2.5V input, with less than 300mV dropout. Operation with higher input voltages (up to 5.5V) is possible as long as the maximum power dissipation across the internal pass transistor is less than 727mW.

The MAX1982 EV kit is a fully assembled and tested surface-mount printed circuit (PC) board. The board is shipped with a fixed 1.2V output MAX1982 IC, and can also be used to evaluate the MAX1983 (adjustable output). Additional pads are provided on the board's component side to accommodate the external components used with the MAX1983.

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| C1            |     1 | 0.1µF ± 20%, X7R ceramic capacitor (1206) TDK C3216X7R2A104M |
| C2, C3        |     1 | 10µF ± 20%, X5R ceramic capacitors (1210) TDK C3225X7R1C106M |
| C4            |     1 | Not installed (0805)                                         |
| JU1           |     1 | 3-pin header                                                 |
| JU2           |     1 | 2-pin header                                                 |

<!-- image -->

Features

- ♦ 1.25V to 5.5V Input Supply Range
- ♦ 1.2V Fixed Output Voltage
- ♦ Up to 0.3A Output Current
- ♦ &lt;5µA Shutdown Supply Current
- ♦ Power-Good (PGOOD) Open-Drain Output with 1ms Rising Edge Propagation Delay (MAX1982)
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1982EVKIT | 0°C to +70°C | 6 SOT23      |

Note: To evaluate the MAX1983, request a MAX1983EUT free sample with the MAX1982EVKIT.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                              |
|---------------|-------|------------------------------------------|
| R1            |     1 | 100k Ω ± 5% resistor (0805)              |
| R2, R3        |     2 | Not installed (0805)                     |
| U1            |     1 | MAX1982EUT (6-pin SOT23) Top mark = ABEA |
| None          |     2 | Shunts                                   |
| None          |     1 | MAX1982 PC board                         |
| None          |     1 | MAX1982 data sheet                       |
| None          |     1 | MAX1982 EV kit data sheet                |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX1982 when contacting this component supplier.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX1982 Evaluation Kit

## Quick Start

## Recommended Equipment

- One variable DC power supply capable of supplying between 1.25V and 5.5V at 0.5A
- One fixed DC power supply capable of supplying 5V at 10mA
- Two voltmeters

## Procedure

The MAX1982 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Set the variable DC power supply to 2.5V.
- 2) Ensure that the variable DC power supply is turned off.
- 3) Ensure that the fixed 5V DC power supply is turned off.
- 4) Connect the variable DC power supply to the pad marked VIN. Connect the ground return of the power supply to the GND pad located across from VIN.
- 5) Connect the fixed 5V DC power supply to the pad marked BIAS. Connect the ground return of the power supply to the GND pad located across from VIN.
- 6) Connect a voltmeter and load (if any) to the pad marked VOUT. Connect the ground return of the voltmeter and load to the GND pad located across from the VOUT pad.
- 7)  Connect a voltmeter to the pad marked PGOOD. Connect the ground return of the voltmeter to the GND user pad located across from the VOUT pad.
- 8) Turn on the variable DC power supply.
- 9) Turn on the fixed 5V DC power supply.
- 10) Verify that the PGOOD voltage is 5V.
- 11) Verify that the output voltage is 1.2V.

## Detailed Description

The MAX1982 EV kit is a 300mA low-dropout (LDO) regulator capable of supplying a fixed 1.2V output from a variable 1.25V to 5.5V input. The EV kit comes equipped with on-board shutdown control, as well as additional  pads  for  evaluating  the  MAX1983 (adjustable) LDO.

## Shutdown Control

The MAX1982 has an active-low shutdown control input to  enable/disable its output. The 3-pin header JU1 selects the shutdown mode. Remove the shunt when driving  shutdown with an external signal. Table 1 lists the jumper selectable options.

## Evaluating the MAX1983

The MAX1982 can be replaced with a MAX1983 to generate an adjustable output voltage (0.8V to 2V) with an output current up to 0.3A. The modifications required are as follows:

- 1) Replace the IC (U1).
- 2)  Remove R1.
- 3) Add R2 and R3 (located on the board's component side).
- 4) Insert a shunt across JU2

To set the output voltage, choose R2 as follows:

<!-- formula-not-decoded -->

where:

VOUT = desired output voltage

VREF = 0.8V

R3 ≤ 40k Ω

## Adjusting PGOOD timing

The MAX1982 EV kit allows the user to extend the PGOOD propagation delay by adding capacitor C4. To set the propagation delay use the following equation:

<!-- formula-not-decoded -->

where:

t PGprop = PGOOD propagation delay = 2ms (typ)

VBIAS = 5V

VPGOOD = 4.5V

R1 = 100k Ω

t = desired propagation delay

Note:

t must be greater than tPGprop.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Table 1. Shutdown Selection

| JUMPER   | SHUNT POSITION   | SHDN PIN          | DESCRIPTION                   |
|----------|------------------|-------------------|-------------------------------|
| JU1      | 1-2              | Connected to BIAS | MAX1982 enabled, V OUT = 1.2V |
| JU1      | 2-3              | Connected to GND  | Shutdown mode, V OUT = 0V     |

<!-- image -->

Figure 1. MAX1982 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1982 Evaluation Kit

<!-- image -->

Figure 2. MAX1982 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1982 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1982 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600