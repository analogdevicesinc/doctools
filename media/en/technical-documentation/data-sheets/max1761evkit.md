<!-- lastmod 2022-08-02 -->
## General Description

The MAX1761 evaluation kit (EV kit) demonstrates a standard 2A application circuit. This DC-DC converter steps down high-voltage batteries and/or AC adapters, generating a precision, low-voltage rail for use as chipset, I/O, and other low-voltage supplies in notebook computers and PDAs.

The MAX1761 EV kit provides dual 1.8V and 2.5V output voltages from a +5V to +20V battery input range. It delivers up to a 2A output current for each output with greater than 90% efficiency. The EV kit operates at 300kHz switching frequency and has superior line- and load-transient response.

This EV kit is a fully assembled and tested circuit board. It also allows the evaluation of other output voltages in the 1.0V to 5.5V range by changing feedback resistors R1-R4.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                |
|---------------|-------|------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF, 25V ceramic capacitor (1812) Taiyo YudenTMK432BJ106KM or TDKC4532X5R1E106M                           |
| C2, C7-C11    |     0 | Not installed (0805)                                                                                       |
| C3, C4        |     2 | 220µF,10Vlow-ESR40m Ω capacitors Sanyo 10TPB220M or 330µF,10V low-ESR30m Ω capacitors Kemet T510X337M010AS |
| C5            |     1 | 0.1µF ceramic capacitor (0805)                                                                             |
| C6            |     1 | 4.7µF, 10V X5R ceramic capacitor (1206) Taiyo Yuden LMK316BJ475ML                                          |
| C12           |     1 | 1µF, 25VX5Rceramiccapacitor Taiyo Yuden TMK316BJ105ML                                                      |
| D1, D2        |     0 | Not installed Nihon EP10QY03                                                                               |

<!-- image -->

## Features

- ♦ +5V to +20V Input Voltage Range
- ♦ Preset 1.8V and 2.5V Output Voltages
- ♦ Adjustable Output Voltages (1V to 5.5V, external divider)
- ♦ 2A Output Current
- ♦ 300kHz Switching Frequency
- ♦ No Current-Sense Resistor
- ♦ 4µA V+ Shutdown Supply Current
- ♦ 5µA VL Shutdown Supply Current
- ♦ 16-Pin QSOP Package
- ♦ Low-Profile Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1761EVKIT | 0 o C to +70 o C | 16 QSOP      |

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                                         |
|----------------|-------|-------------------------------------------------------------------------------------|
| L1, L2         |     2 | 7µH power inductors Sumida CDRH104R-7R0NC                                           |
| N1, P1, N2, P2 |     2 | Dual N- and P-channel MOSFETs International Rectifier IRF7319 or Fairchild FDS8958A |
| R1-R6          |     0 | Not installed (0805)                                                                |
| R7, R8         |     2 | 1M Ω ± 5% resistors (0805)                                                          |
| R9             |     1 | 10 Ω ± 5% resistor (0805)                                                           |
| R10-R13        |     0 | Not installed                                                                       |
| U1             |     1 | MAX1761EEE (16-pin QSOP)                                                            |
| SW1            |     1 | DIP-3 dip switch                                                                    |
| None           |     4 | Rubber bumpers 3M SJ-5007 Mouser 517-SJ-5007BK or equivalent                        |
| None           |     1 | MAX1761 PC board                                                                    |
| None           |     1 | MAX1761 data sheet                                                                  |
| None           |     1 | MAX1761 EV kit data sheet                                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX1761 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          |
|-------------------------|--------------|--------------|
| Fairchild               | 408-721-2181 | 408-721-1635 |
| International Rectifier | 310-322-3331 | 310-322-3332 |
| Sanyo                   | 619-661-6835 | 619-661-1055 |
| Sumida                  | 708-956-0666 | 708-956-0702 |
| Taiyo Yuden             | 408-573-4150 | 408-573-4159 |
| TDK                     | 847-390-4373 | 847-390-4428 |

Note: Please indicate that you are using the MAX1761 when contacting these suppliers.

## Quick Start

The MAX1761 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect voltmeters and loads (if any) to the VOUT pads.
- 2) Verify that switches ON1 and ON2 (SW1) are in the on position.
- 3) Connect a +5V to +20V supply to the pads marked VBATT and GND.

Table 1. Switch SW1 Functions

| SW1 LOCATION               | ON1 PIN                                                  | ON2 PIN                       | OPERATION MODE                                                                                                                                              |
|----------------------------|----------------------------------------------------------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ON1 = low, ON2 = X         | Connected to GND, VOUT1 = 0, VOUT2 = 0                   | -                             | MAX1761 is in shutdown mode.                                                                                                                                |
| ON1 = high, ON2 = low      | Connected to VBATT, VOUT1 = 2.5V, VOUT2 = depends on ON2 | Connected to GND, VOUT2 = 0   | VOUT1is in normal mode. VOUT2 is in shutdown mode.                                                                                                          |
| ON1 = high, ON2 = floating | Connected to VBATT, VOUT1 = 2.5V                         | ON2 = float VOUT2 = 1.8V      | Low-noise mode, forced fixed-frequency PWM operation.                                                                                                       |
| ON1 = high, ON2 = high     | Connected to VBATT, VOUT1 = 2.5V                         | Connected to VL, VOUT2 = 1.8V | Both outputs are enabled innormalmode. Normaloperation allowsautomaticPWM/ PFMswitchover for pulse skipping at light load, resulting in highest efficiency. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 4) Turn on the power and verify that the output voltages are 1.8V and 2.5V.
- 5) Refer to the Output Voltage Selection section in the MAX1761 data sheet to modify the board for different output voltages.
- 6) Refer to the Setting the Current Limit section in the MAX1761 data sheet to modify the board for a higher output current.

## Detailed Description

Switch Settings

Table 1 lists switch settings.

## Evaluating Other Output Voltages

The EV kit outputs are preset to +1.8V and +2.5V. However, the output voltages can also be adjusted between 1.0V and 5.5V by selecting R1/R2 and R3/R4 values. R1 and R3 are given by:

R1 or R3 = (R2 or R4) ((VOUT / VFB) -1) where VFB = 1.0V.

## MAX1761 Evaluation Kit

Figure 1. MAX1761 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1761 Evaluation Kit

<!-- image -->

Figure 2. MAX1761 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1761 EV Kit PC Board Layout-Ground Plane (Layer 3)

Figure 3. MAX1761 EV Kit PC Board Layout-Ground Plane (Layer 2)

<!-- image -->

Figure 5. MAX1761 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 6. MAX1761 EV Kit Component Placement GuideSolder Side

<!-- image -->

## MAX1761 Evaluation Kit

Figure 7. MAX1761 EV Kit PC Board Layout-Component Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.