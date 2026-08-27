<!-- lastmod 2022-08-03 -->
## General Description

The MAX7474 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that configures the MAX7474 IC for automatically equalizing a baseband composite video input signal from low-cost, unshielded twisted pair (UTP) such as Category 5e (Cat 5e) cable.

The MAX7474 EV kit operates from a single 5V DC power supply. The EV kit accepts differential video input signals and provides a single-ended output. The EV kit features loss-of-sync and loss-of-burst outputs and also provides an option to set the video output signal's back-porch DC level.

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE         |
|-----------------------|--------------|-----------------|
| AVX Corp.             | 843-946-0238 | www.avxcorp.com |
| KEMET Corp.           | 864-963-6300 | www.kemet.com   |
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com  |

Note: Indicate that you are using the MAX7474 when contacting these component suppliers.

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| BP_LVL, VOUT  |     2 | 75 Ω BNC PCB-mount connectors                                                      |
| C1, C2        |     2 | 1µF ±10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J105K                 |
| C3, C6        |     2 | 0.1µF ±10%, 16V X7R, ceramic capacitors (0603) Murata GRM188R71C104K               |
| C4, C5        |     2 | 0.022µF ±10%, 50V X7R, ceramic capacitors (0603) Murata GRM188R71H223K             |
| C7            |     1 | 470µF ±20%, 6.3V tantalum capacitor (D Case) AVX TAJD477M006R KEMET T491D477M006AT |
| GND           |     1 | PC test point, black                                                               |
| J1            |     1 | 3-pin header                                                                       |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                                      |

<!-- image -->

## Features

- ♦ Single 5V DC Power-Supply Operation
- ♦ Differential Video Input
- ♦ Single-Ended AC- or DC-Coupled Output
- ♦ Fully Equalized for Up to 300m of Cat 5e Cable
- ♦ Improved Signal Quality for Up to 600m of Cat 5e Cable
- ♦ Fixed Cable-Length Equalization in the Absence of Burst
- ♦ Adjustable Back-Porch DC Level
- ♦ Loss-of-Burst (LOB) and Loss-of-Sync (LOS) Outputs
- ♦ Evaluates the MAX7474 IC in 16-Pin SSOP Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX7474EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| JU4           |     1 | 2-pin header                                                          |
| R1, R2        |     2 | 49.9 Ω ±1% resistors (0603)                                           |
| R3            |     1 | 0 Ω ±5% resistor (0603)                                               |
| R4            |     1 | 10k Ω ±10%, 3/8in square 19-turn cermet trimmer                       |
| U1            |     1 | Twisted-pair adaptive video equalizer (16-pin SSOP) Maxim MAX7474EAE+ |
| U2            |     1 | Low-power voltage reference (5-pin SOT23) Maxim MAX6037AAUK25+        |
| VIN           |     1 | RJ-45 black through-hole connector, 8P-8C                             |
| V_INN         |     1 | PC test point, white                                                  |
| V_INP         |     1 | PC test point, red                                                    |
| -             |     4 | Shunts                                                                |
| -             |     1 | PCB: MAX7474 Evaluation Kit+                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX7474 Evaluation Kit

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- 5V, &gt; 100mA DC power supply
- Video signal generator (e.g., Tektronix TG-700 or equivalent)
- Video measurement equipment (e.g., Tektronix VM700T or equivalent)
- Active differential cable driver

## Procedure

The MAX7474 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Install a shunt across pins 2-3 of jumper JU1 and a shunt across pins 1-2 of jumper JU2 (for ≥ 225m manual cable length equalization).
- 2) Install  a  shunt  across pins 1-2 of jumper JU3 (back-porch DC level set by R4).
- 3) Verify that no shunt is installed on jumper JU4 (ACcoupled video output).
- 4) Connect the differential video input signal to the VIN connector or the V\_INP and VINN test points.
- 5) Connect the VOUT BNC connector on the EV kit to the input of the video measurement equipment.
- 6) Connect the power-supply ground to the GND pad on the EV kit.
- 7) Connect the 5V DC power supply to the VCC pad on the EV kit.
- 8) Set the video signal generator for the desired video input signal.
- 9) Turn on the power supply and enable the video signal generator output.
- 10) Analyze the video output signal with the video measurement equipment.

## Detailed Description of Hardware

The MAX7474 EV kit is designed to evaluate the MAX7474 in a 16-pin SSOP package. The MAX7474 is an adaptive equalizer for video over UTP cable. The EV kit  circuit  is  designed  on  a  2-layer,  1oz  copper  PCB and all components are installed on the top layer. The MAX7474 EV kit operates from a 5V DC power supply that can deliver at least 100mA of current.

The MAX7474 EV kit accepts differential video input signals and provides a single-ended output nominal 1VP-P. A differential video input signal can be connected to the VIN RJ-45 connector (pins 7-8), or the V\_INP and V\_INN test points on the MAX7474 EV kit. See Table 4 in the Jumper Selection section for the VIN RJ45 connector pin configuration.

The MAX7474 EV kit automatically equalizes the baseband composite video signal from a low-cost UTP cable, and provides an option to set the fixed equalization level to compensate for different input cable lengths up to 300m in the absence of a burst signal. The MAX7474 fixed  equalization level is  jumper selectable. See the Jumper Selection section for more details.

The MAX7474 EV kit provides an option to set the back-porch DC level for the video output signal. The video output's back-porch DC level can be set by an on-board voltage reference (U2) or by an external voltage source connected to the BP\_LVL BNC connector. U2 is a MAX6037 voltage reference that provides an on-board 0 to 2.5V voltage reference for the backporch DC level. Potentiometer R4 is used to set the back-porch DC level. The back-porch DC level is set to 1.4V at the factory. See the Jumper Selection section for more detail.

## Jumper Selection

## Fixed Equalization Level (FEQ0, FEQ1)

The MAX7474 EV kit provides an option to set the fixed equalization level for the video input signal to compensate for different cable lengths in the absence of burst. Jumpers JU1 and JU2 set the fixed equalization level pins (FEQ0 and FEQ1) of the MAX7474 IC. When using cable lengths greater than 75m, set the fixed equalization level according to Table 1.

## Table 1. JU1 and JU2 Jumper Selection (FEQ0, FEQ1)

| SHUNT POSITION   | SHUNT POSITION   |   EQUALIZATION LEVEL (dB) | COMPENSATED CABLE   |
|------------------|------------------|---------------------------|---------------------|
| JU2 (FEQ1)       | JU1 (FEQ0)       |                           | LENGTH (m)          |
| 2-3 (low)        | 2-3 (low)        |                         0 | 0 to 75             |
| 2-3 (low)        | 1-2 (high)       |                      +4.5 | 75 to 225           |
| 1-2* (high)      | 2-3* (low)       |                     +10.5 | ≥ 225               |
| 1-2 (high)       | 1-2 (high)       |                     +10.5 | ≥ 225               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Back-Porch DC Level (BPLVL)

The MAX7474 EV kit provides an option to set the back-porch DC level for the video output signal. Jumper JU3 selects the voltage source that sets the back-porch DC level for the MAX7474 BPLVL pin. See Table 2 for shunt positions.

Table 2. JU3 Jumper Selection (BPLVL)

| SHUNT POSITION   | MAX7474 BPLVL PIN                                               | BACK-PORCH DC LEVEL                 |
|------------------|-----------------------------------------------------------------|-------------------------------------|
| 1-2*             | Connected to U2, pin 5 (through potentiometer R4; 1.4V default) | 0 to 2.5V (set by potentiometer R4) |
| 2-3              | Connected to BP_LVL BNC connector                               | External reference source           |

## Output Coupling (VOUT)

The MAX7474 EV kit provides an option to select the output coupling of the video output signal on the MAX7474 EV kit for AC- or DC-coupling. Jumper JU4 selects the output coupling for the MAX7474 output. See Table 3 for shunt positions.

Table 3. JU4 Jumper Selection (VOUT)

| SHUNT POSITION   | MAX7474 OUTPUT   |
|------------------|------------------|
| Installed        | DC-coupled       |
| Not installed*   | AC-coupled       |

<!-- image -->

## MAX7474 Evaluation Kit

## RJ-45 Connector Pin Configuration (VIN)

The MAX7474 EV kit provides an RJ-45 connector to accept a differential video input signal at the VIN RJ45 connector. Table 4 lists the RJ-45 connector pin configuration.

Table 4. RJ-45 Connector Pin Configuration (VIN)

| RJ-45 (VIN) PIN   | SIGNAL        |
|-------------------|---------------|
| 1-6               | No connection |
| 7                 | V_INN         |
| 8                 | V_INP         |

## Header J1 (LOB, LOS)

The MAX7474 EV kit provides a 3-pin header to access the LOB and LOS status output signals and GND. The LOB outputs a logic-high when the color burst portion of the video signal is not detected at the input. Similarly,  the  LOS  outputs a logic-high when the sync signal of the video signal is not detected at the input. Table 5 lists the header J1 pinout.

Table 5. Header J1 Pinout (LOB, LOS, GND)

|   HEADER J1 PIN | SIGNAL LEVEL   | FUNCTION             |
|-----------------|----------------|----------------------|
|               1 | LOB = high     | No color burst       |
|               1 | LOB = low      | Color burst detected |
|               2 | LOS = high     | No sync signal       |
|               2 | LOS = low      | Sync signal detected |
|               3 | GND            | GND                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7474 Evaluation Kit

Figure 1. MAX7474 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7474 Evaluation Kit

Figure 2. MAX7474 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX7474 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7474 Evaluation Kit

Figure 4. MAX7474 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600