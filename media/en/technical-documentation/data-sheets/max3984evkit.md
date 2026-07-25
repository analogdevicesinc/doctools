<!-- lastmod 2022-08-02 -->
## General Description

The MAX3984 evaluation kit (EV kit) is a fully assembled and tested demonstration board that provides complete evaluation of the MAX3984 1Gbps to 10Gbps preemphasis driver with receive equalizer.

| DESIGNATION                 |   QTY | DESCRIPTION                              |
|-----------------------------|-------|------------------------------------------|
| C1                          |     1 | 33µF ±10% tantalum capacitor (B case)    |
| C2, C3, C8                  |     3 | 0.1µF ±10% ceramic capacitors (0402)     |
| C4-C7, C9, C10              |     6 | 0.01µF ±5% ceramic capacitors (0402)     |
| J1-J4                       |     4 | SMA connectors (edge-mount, tab-contact) |
| J6, J10, TP1, TP2, TP3, TP5 |     6 | Test points                              |

## Quick Start

See Figure 1 for quick reference.

- 1) Remove shunt from JU2.
- 2) Install shunt on JU3. This disables the squelch. To enable squelch connect JU2 between VCC and center pin and remove JU3.
- 3) Install  shunt  on  TX\_DISABLE (JU4) between GND (logic 0) and the center pin. This enables the output of the chip.
- 4) Install  shunt on IN\_LEV (JU1) between GND (logic 0) and center pin. This disables the equalization at the input of the chip.
- 5) Install shunts on PE0 (JU5) and PE1 (JU6) between GND (logic 0) and the center pin. This sets the output preemphasis to a minimum. See Table 1 for a complete list of settings.
6. ♦ Fully Assembled and Tested
7. ♦ Allows Full Electrical Evaluation

<!-- image -->

Features

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX3984EVKIT+ | 0°C to +85°C | 16 TQFN-EP   |

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                              |
|------------------|-------|------------------------------------------|
| JU1, JU2 JU4-JU7 |     6 | 3-pin headers (0.1in centers)            |
| JU3              |     1 | 2-pin header (0.1in centers)             |
| None             |     6 | Shunts                                   |
| L1               |     1 | 4.7µH ±10% inductor (1008)               |
| R1               |     1 | 4.7k Ω ±5% resistor (0402)               |
| U1               |     1 | MAX3984UTE+ 16-pin TQFN-EP               |
| None             |     1 | PCB: MAX3984 EV kit circuit board, Rev A |

- 6) Install  shunt on OUT\_LEV (JU7) between GND (logic  0)  and  the  center  pin.  This  sets  the  output swing to a reduced level.
- 7) Connect at +3.3V power supply to the +3.3V (J6) and GND (J10) terminals. Set the current limit to 150mA. Monitor the supply voltage at VCC (TP2). This is the supply that powers the chip.
- 8) Apply a 500mVP-P differential signal to IN+ (J1) and IN- (J2).
- 9) Using 50 Ω cables, connect OUT+ (J3) and OUT(J4) to an oscilloscope with a 50 Ω input terminations.

## MAX3984 Evaluation Kit

## Adjustment and Control Descriptions (see Quick Start first)

| COMPONENT   | NAME       | FUNCTION                                                                                                                                                                                                                 |
|-------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1, J2      | IN+, IN-   | Data Input. CML input that is internally terminated with 50 to VCC - 1.5V.                                                                                                                                               |
| J3, J4      | OUT+, OUT- | Data Output. CML output that is internally terminated with 50 to VCC.                                                                                                                                                    |
| J6, J10     | +3.3V, GND | Connection for a +3.3V or +3.6V Power Supply. Set the current limit to 150mA.                                                                                                                                            |
| JU1         | IN_LEV     | Receive Equalization Control Input. Set to VCC (logic 1) for higher LOS assert/deassert levels and 10in FR-4 compensation. Set to GND(logic 0) for lower LOS assert/deassert levels and to bypass the FR-4 equalization. |
| JU2         | -          | LOS Pullup Termination. Connected to VCC terminates the LOS though a 4.7k resistor to VCC. Connected to TP5 terminates the LOS through a 4.7k resistor to +5.5V.                                                         |
| JU3         | -          | LOS Disable. Intalling jumper disable the LOS. Remove jumper for normal LOS operation.                                                                                                                                   |
| JU4         | TX_DISABLE | Tramsitter Disable. Set to GND (logic 0) for normal operation. Set to VCC (logic 1) or open to reduce the differential output to less than 10mV P-P .                                                                    |
| JU5         | PE0        | Preemphasis Control Least Significant Bit. See Table 1 for controls.                                                                                                                                                     |
| JU6         | PE1        | Preemphasis Control Most Significant Bit. See Table 1 for controls.                                                                                                                                                      |
| JU7         | OUT_LEV    | Output-Swing Control. Set to VCC (logic 1) or open for maximum output swing. Set to GND (logic 0) for reduced swing.                                                                                                     |
| TP1         | LOS        | Loss-of-Signal Output. Monitor with high-impedance probe.                                                                                                                                                                |
| TP2, TP3    | VCC,GND    | Connection for Monitoring VCC and GND                                                                                                                                                                                    |
| TP5         | +5.5V      | Connection for Alternate Pullup Voltage for LOS                                                                                                                                                                          |

## Table 1. Preemphasis Settings

|   PE1 |   PE0 |   PREEMPHASIS (dB) |
|-------|-------|--------------------|
|     0 |     0 |                3.5 |
|     0 |     1 |                6.5 |
|     1 |     0 |                9.5 |
|     1 |     1 |                 13 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3984 Evaluation Kit

<!-- image -->

Figure 1. MAX3984 EV Kit Quick Reference

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3984 Evaluation Kit

Figure 2. MAX3984 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3984 Evaluation Kit

<!-- image -->

Figure 3. MAX3984 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3984 Evaluation Kit

Figure 4. MAX3984 EV Kit PCB Layout-Component Side, Layer 1

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3984 Evaluation Kit

Figure 5. MAX3984 EV Kit PCB Layout-Ground Plane, Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3984 Evaluation Kit

Figure 6. MAX3984 EV Kit PCB Layout-Power Plane, Layer 3

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3984 Evaluation Kit

Figure 7. MAX3984 EV Kit PCB Layout-Bottom Side, Layer 4

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

SPRINGER

9