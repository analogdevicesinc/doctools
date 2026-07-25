<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX747 evaluation kit (EV kit) provides a regulated 5.0V output voltage from a 6V to 15V input.  It delivers a 1.25A output current and up to 95% efficiency from a 6V supply using small, surface-mount components.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX747EVKIT-SO | 0°C to +70°C  | Surface Mount |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_EV Kit

<!-- image -->

<!-- image -->

<!-- image -->

## MAX747 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 6.0V to 15.0V Input Voltage Range
- ' Fixed 5V or Optional Adjustable Output Voltage
- ' 1.25A Output Current Capability
- ' Up to 95% Efficiency
- ' PWM Architecture
- ' External Shutdown Control
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C3, C4        |     2 | 0.1µF ceramic capacitors                                                                |
| C5            |     1 | 0.22µF ceramic capacitor                                                                |
| C6            |     1 | 470pF ceramic capacitor                                                                 |
| C1, C8        |     2 | 220µF, 10V, low-ESR tantalum capacitors AVX TPSE227M010R0100 or Sprague 595D227X0010R2T |
| C2, C7        |     2 | 68µF, 20V, low-ESR tantalum capacitors AVX TPSE686M020R0150 or Sprague 595D686X0020R2T  |
| D1            |     1 | 3A, 20V Schottky diode (SMT) Nihon NSQ03A02, Motorola MBRS340T3 or IR30BQ040            |
| L1            |     1 | 33µH, 1.8A inductor (SMT) Sumida CDR125-330, CoilCraft D03316-333                       |
| P1            |     1 | P-channel MOSFET (SO-8) Motorola MMSF3P02HD, Siliconix Si9430DY or IRF7204              |
| R6            |     1 | 0.068 Ω , 5% resistor (SMT) Dale WSL-2010-R068-J or IRC LR2010-05-R068-J                |
| U1            |     1 | MAX747CSD                                                                               |
| JU1           |     1 | 3-pin header                                                                            |
| None          |     1 | Shunt                                                                                   |
| None          |     1 | MAX747 data sheet                                                                       |

1

## MAX747 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER              | PHONE                         | FAX            |
|-----------------------|-------------------------------|----------------|
| Capacitors            |                               |                |
| AVX                   | (207) 282-5111 (800) 282-4975 | (207) 283-1941 |
| Matsuo                | (714) 969-2491                | (714) 960-6492 |
| Murata Erie           | (814) 237-1431 (800) 831-9172 | (814) 238-0490 |
| Sprague               | (603) 224-1961                | (603) 224-1430 |
| Inductors             |                               |                |
| CoilCraft             | (708) 639-6400                | (708) 639-1469 |
| Coiltronics           | (407) 241-7876                | (407) 241-9339 |
| Sumida                | (708) 956-0666                | (708) 956-0702 |
| Diodes                |                               |                |
| Central Semiconductor | (516) 435-1110                | (516) 435-1824 |
| Motorola              | (602) 244-5303                | (602) 244-4015 |
| Nihon                 | (805) 867-2555                | (805) 867-2556 |
| Power MOSFETs         |                               |                |
| IR                    | (310) 322-3331                | (310) 322-3332 |
| Motorola              | (602) 244-3576                | (602) 244-4015 |
| Siliconix             | (408) 988-8000                | (408) 970-3950 |
| Resistors             |                               |                |
| Dale-Vishay           | (402) 564-3131                | (402) 563-1841 |
| IRC                   | (512) 992-7900                | (512) 992-3377 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX747 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 6V to 15V power supply to the pad marked VIN. Connect ground to the GND pad.
- 2) Connect a voltmeter and load (if any) to the VOUT pad.
- 3) Place the shunt across pins 1 and 2 of JU1 for normal operation.
- 4) Turn on the power supply and verify that the output voltage is 5V.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Jumper Selection

The MAX747 has a TTL/CMOS-logic level input pin (SHDN) to disable the output.  Table 1 lists the options for the shutdown control jumper, JU1.  An external signal may be used by removing the JU1 shunt and connecting the control signal to the SHDN pad.

## Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX747 OUTPUT              |
|------------------|------------------|----------------------------|
| 1 & 2            | Connected to GND | MAX747 Enabled, V OUT = 5V |
| 2 & 3            | Connected to VIN | Shutdown Mode, V OUT = 0V  |

## Setting the Output Voltage

The MAX747's output voltage can be set to 5V by grounding FB, or it can be adjusted from 2V to 14V using an external voltage divider. Resistors R4 and R5, located on the solder side of the PC board, form a voltage divider between the output voltage and the FB pin. Select a value between 10k Ω and 1M Ω for resistor R4. Calculate R5 as follows:

<!-- formula-not-decoded -->

Resistor R4 is shorted for a fixed 5V output. Be sure to cut  the  shorting  trace  between  the  pads  of  R4  before installing  the  resistor.  Also,  the  shorting  trace  at  JU2 must be cut to disconnect the OUT pin from the output.

In adjustable mode, the FB pin becomes the compensation input pin (instead of the CC pin). Remove the CC pin capacitor (C6) and install an FB pin compensation capacitor (C9). Refer to the Compensation Capacitor section of the MAX747 data sheet for instructions on selecting an appropriate capacitor value. The supplied output capacitors are rated at 10V; use a higher rated capacitor if necessary.

## Using the Low-Battery Indicator

The MAX747 has an additional comparator that is useful for monitoring the voltage level of the input source.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX747 Evaluation Kit

Figure 1.  MAX747 EV Kit Schematic

<!-- image -->

Resistor locations R1 and R2, on the solder side of the PC board, are connected as a voltage divider between the LBI pad and the MAX747 LBI pin. Note that a PC board trace across R1 shorts the LBI pin to ground when this function is not used. Cut the trace before installing R1. Also note that the LBI pad is shorted to the VIN pad by another PC board trace. Cut this trace if a voltage other than VIN is to be monitored. Refer to the Setting the LowBattery Detector Voltage section of the MAX747 data sheet for instructions on selecting values for resistors R1 and R2.

When using the LBO output, install a 100k Ω pull-up resistor (R3). LBO is disabled in shutdown mode.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## High Output Current Capability

The MAX747 can be configured to deliver higher output currents. Take care to size external components according to higher peak currents. Refer to the Design Procedure section of the MAX747 data sheet for further details.

Surface-mount inductors with higher current capability are available from Coiltronics (CTX-03-12384) and CoilCraft (DO3340).

## MAX747 Evaluation Kit

<!-- image -->

Figure 2.  MAX747 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX747 EV Kit PC Board Layout-Component Side

Figure 3.  MAX747 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  MAX747 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit  patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600