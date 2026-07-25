<!-- lastmod 2022-08-03 -->
## General Description

The MAX6603 evaluation kit (EV kit) is an assembled and tested PC board that allows evaluation of the MAX6603 dual-channel, platinum resistive temperature devices (Pt-RTD) to voltage signal conditioner. The MAX6603  EV  kit  monitors  two  series-connected Pt-RTDs on channel 1. It excites and amplifies the signal from the Pt-RTDs to achieve a high-voltage, filtered signal on channel 1.

The EV kit comes with the MAX6603ATB+ installed.

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H104K  |
| C2-C5         |     4 | 0.01µF ±5%, 25V C0G ceramic capacitors (0603) TDK C1608C0G1E103J |
| C6, C7        |     0 | Open (0603)                                                      |
| C8            |     1 | 10µF ±10%, 10V X5R ceramic capacitor (1210) TDK C3225X5R1A106K   |
| D1            |     1 | Schottky diode (3-pin SOT23) Central Semi CMPSH-3                |
| D2            |     1 | Zener diode, 6.2V, 500mW (2-pin SOD-123) Diodes Inc. MMSZ5234B   |

<!-- image -->

## Features

- ♦ Provides One 200 Ω Equivalent Pt-RTD
- ♦ Supports Two External Pt-RTDs
- ♦ Two Diagnostic LED Indicators
- ♦ Fully Assembled and Tested
- ♦ Includes Demo PC Board
- ♦ On-Board 5V Regulator
- ♦ Easy Access User Pads

## Ordering Information

| PART         | TYPE   | IC PACKAGE   |
|--------------|--------|--------------|
| MAX6603EVKIT | EV kit | 10 TDFN-EP   |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| JU1           |     1 | 3-pin header (gold contact finish)                              |
| JU2, JU3, JU4 |     3 | 2-pin headers (gold contact finish)                             |
| LED1, LED2    |     2 | Red LEDs (0603) Panasonic LNJ208R8ARA                           |
| R1, R2        |     2 | 510 Ω ±5% resistors (0603)                                      |
| RTD1, RTD2    |     2 | 100 Ω ±0.2% platinum RTDs Honeywell HEL-777-A-T-0 (plastic SIP) |
| U1            |     1 | MAX6603ATB+ (10-pin TDFN-EP)                                    |
| U2            |     1 | MAX667ESA (8-pin SO)                                            |
| -             |     4 | Shunts (gold contact finish)                                    |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | www.centralsemi.com   |
| Diodes Incorporated   | 805-446-4800 | www.diodes.com        |
| TDK                   | 847-803-6100 | www.component.tdk.com |

Note: Indicate you are using the MAX6603 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX6603 Evaluation Kit

## Quick Start

## Required Equipment

Before you begin, you need the following equipment:

- Maxim MAX6603 EV kit
- 6V to 12V regulated DC supply

## Procedure

- 1) Place the shunt on pins 1 and 2 of JU1 (VCC connects to the on-board 5V voltage regulator).
- 2) Place the shunts on JU2 and JU3 (LED1 and LED2 connect to DG1 and DG2 , respectively).
- 3) Place the shunt on JU4 (Connects the on-board RTD1 and RTD2).
- 4) Connect the 6V to 12V DC supply to the HVIN(+) pad and GND(-) pad.
- 5) Verify LED1 is off and LED2 is on.
- 6) Verify the voltage on the OUT1 pad is approximately 1.10V at room temperature.

## Detailed Description

## Platinum-RTD

The MAX6603 EV kit includes two 100 Ω Pt-RTDs, configuration jumpers, diagnostic fault indicator LEDs, and a  5V  voltage  regulator.  The  two  board-mounted 100 Ω Pt-RTDs are wired in series to form an equivalent 200 Ω Pt-RTD and connected to channel 1 only. The boardmounted Pt-RTDs can be electrically disconnected from the circuit allowing an external Pt-RTD to be connected to the MAX6603 through twisted-pair cabling. The two diagnostic indicator LEDs are driven by the MAX6603 DG1 and DG2 digital diagnostic outputs. The MAX6603 EV kit can be wired into a target system with appropriate jumper configurations and operate from the target system supply voltage (3.0V to 5.5V).

The MAX6603 EV kit can provide stand-alone evaluation by using the on-board 5V regulator and Pt-RTDs. Disconnect the on-board Pt-RTDs, LEDs, and 5V regulator to connect the MAX6603 EV kit directly to a target system.

## Power-Supply Configuration

Connect a user supplied 6V to 12V supply to the HVIN(+) and GND(-) pads. Place the shunt on pin 1 and pin 2 of JU1 to use the on-board +5V regulator.

## Fault Detection

The DG1 and DG2 pins are the diagnostic signal outputs for the RS1 and RS2 inputs, respectively. The DG1 and DG2 pins assert low upon fault detection. Refer to the MAX6603 IC data sheet for fault detection conditions. If the shunt is placed on JU2 (as shown in Table 2), LED1 lights up when DG1 is  asserted low. If the shunt is placed on JU3 (as shown in Table 3), LED2 lights up when DG2 is asserted low.

## Table 2. LED1 Connection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                         |
|----------|------------------|-------------------------------------|
| JU2      | 1-2*             | LED1 connected to the DG1 pin.      |
| JU2      | No shunt         | LED1 disconnected from the DG1 pin. |

## Table 3. LED2 Connection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                         |
|----------|------------------|-------------------------------------|
| JU3      | 1-2*             | LED2 connected to the DG2 pin.      |
| JU3      | No shunt         | LED2 disconnected from the DG2 pin. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Place a shunt on pin 2 and pin 3 of JU1 to apply a usersupplied 3.0V to 5.5V power supply to VIN(+) and GND(-) pads. Table 1 shows the JU1 jumper settings.

## Table 1. External/On-Board Power-Supply Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                       |
|----------|------------------|---------------------------------------------------|
| JU1      | 1-2*             | Apply a user-supplied 6V to 12V supply to HVIN.   |
| JU1      | 2-3              | Apply a user-supplied 3.0V to 5.5V supply to VIN. |

<!-- image -->

## On-Board RTD Connection

The MAX6603EVKIT has two on-board 100 Ω Pt-RTDs. Place the shunt on JU4 (as shown in Table 4) to connect the 200 Ω equivalent Pt-RTD to the input channel RS1. Remove the shunt to apply the external Pt-RTD.

## MAX6603 Evaluation Kit

## Table 4. Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                             |
|----------|------------------|-------------------------------------------------------------------------|
| JU4      | 1-2*             | On-board Pt-RTDs connected to channel RS1.                              |
| JU4      | No shunt         | On-board Pt-RTDs disconnected from channel RS1. Apply external Pt-RTDs. |

* Default position.

<!-- image -->

Figure 1. MAX6603 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6603 Evaluation Kit

<!-- image -->

Figure 2. MAX6603 EV Kit Component Placement GuideComponent Side

Figure 3. MAX6603 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX6603 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600