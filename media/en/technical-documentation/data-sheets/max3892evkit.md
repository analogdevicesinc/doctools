<!-- lastmod 2022-08-02 -->
## General Description

The MAX3892 evaluation kit (EV kit) is an assembled surface-mount demonstration board that provides easy evaluation of the MAX3892 2.7Gbps 4:1 serializer with clock synthesis and low-voltage differential signal (LVDS) inputs.

| DESIGNATION                                                                     |   QTY | DESCRIPTION                                                   |
|---------------------------------------------------------------------------------|-------|---------------------------------------------------------------|
| C1-C8, C10, C21, C23-C31                                                        |    19 | 0.1µF ± 10%, 10V ceramic capacitors (0402)                    |
| C9, C22                                                                         |     2 | 10µF ± 10%, 10V tantalum capacitors                           |
| C11-C20                                                                         |    10 | Short                                                         |
| D1, D2                                                                          |     2 | Red LEDs T1                                                   |
| J1-J6                                                                           |     6 | SMA connectors, edge-mount, tab center EFJohnson 142-0701-851 |
| J7, J8, J21, J26                                                                |     4 | Test points                                                   |
| J9-J20, J22, J23                                                                |    14 | SMB connectors, PC mount EFJohnson 131-1701-201               |
| J24, J25                                                                        |     2 | SMA connectors, PC mount EFJohnson 142-0701-201               |
| JU1, JU2, JU3, JU11, JU12, JU17, JU21, JU25, JU29, JU33, JU37, JU41, JU45, JU56 |    14 | 1 × 3-pin headers, 0.1in centers Digi-Key S1012-36-ND         |

- ♦ 3.3V Single Supply
- ♦ Selectable Reference Clock Frequencies: 622.08MHz, 155.52MHz, 77.76MHz, 38.88MHz 666.51MHz, 166.63MHz, 83.31MHz, 41.66MHz
- ♦ Selectable Parallel Input Clock Rate: 622.08MHz/311.04MHz, 666.51MHz/333.26MHz
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3892EVKIT | -40°C to +85°C | 44 QFN       |

## Component List

| DESIGNATION                                                                          |   QTY | DESCRIPTION                                           |
|--------------------------------------------------------------------------------------|-------|-------------------------------------------------------|
| JU1, JU2, JU4, JU8, JU13, JU17, JU21, JU25, JU29, JU33, JU37, JU41, JU45, JU53, JU56 |    15 | Shunts                                                |
| JU4, JU8, JU9, JU10, JU13, JU53, JU54, JU55                                          |     8 | 1 × 2-pin headers, 0.1in centers Digi-Key S1012-36-ND |
| JU11, JU12, JU17, JU21, JU25, JU29, JU33, JU37, JU41, JU45                           |    10 | 1 × 1-pin headers, 0.1in centers Digi-Key S1012-36-ND |
| L1, L2, L3                                                                           |     0 | DO NOT INSTALL                                        |
| R1-R6                                                                                |     0 | DO NOT INSTALL                                        |
| R7, R8                                                                               |     2 | 768 Ω ± 1% resistors (0402)                           |
| R10, R57                                                                             |     2 | 30k Ω ± 5% resistors (0402)                           |
| R11, R18, R20, R21, R24, R25, R26, R28, R29, R42                                     |    10 | 2k Ω ± 1% resistors (0402)                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

<!-- image -->

## Features

## MAX3892 Evaluation Kit

## Component List (continued)

| DESIGNATION                 |   QTY | DESCRIPTION                             |
|-----------------------------|-------|-----------------------------------------|
| R12-R17, R19, R22, R23, R27 |    10 | 0 Ω ± 1% resistors (0402)               |
| R54, R56                    |     2 | 100 Ω ± 5% resistors (0402)             |
| R55                         |     1 | 165 Ω ± 1% resistor (0402)              |
| U1                          |     1 | MAX3892EGH 44-pin QFN                   |
| U2                          |     1 | MAX4429ESA 8-pin SO                     |
| None                        |     1 | MAX3892 evaluation circuit board, rev A |
| None                        |     1 | MAX3892 EV kit data sheet               |
| None                        |     1 | MAX3892 data sheet                      |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| Murata     | 415-964-6321 | 415-964-8165 |
| Venkel     | 800-950-8365 | 512-794-0087 |

Note: Please indicate that you are using the MAX3892 when contacting these component suppliers.

## Quick Start

- 1) Set jumper JU56 to the ground position for the standard SONET 2.5Gbps data rate. Alternatively, this jumper may set the RATESET pin to VCC for an FEC 2.7Gbps data rate.
- 2) Install  JU53  for  a  622MHz reference clock at the RCLK pins. See Figure 1 for other reference clock frequencies. Install no jumper or install only one of jumpers JU53, JU54, or JU55, based on the reference clock frequency.
- 3) Apply a 622MHz clock to the RCLK inputs at J24 and J25. The LVPECL input voltage should be at least 300mVP-P differential, but not more than 1900mVP-P differential.
- 4) Install JU8 to select a 622MHz clock input to PCLKI for  latching  in  the  parallel  data.  This  also  enables the SCLKO for retiming the 2.5Gbps serial data. See Figure 1 for other states of the MODE pin. Install none or one of jumpers JU8, JU9, or JU10.
- 5) Connect PCLKO lines at J22 and J23 to PCLKI inputs at J12 and J11 (PCLKO+ is connected to PCLKI-). Alternatively, apply a 622MHz clock with LVDS levels of at least 100mVP-P differential, but

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- not more than 2400mVP-P differential to PCLKI. Adjust the data delay from the BERT to meet the setup and hold requirement.
- 6) Set jumper JU1 to ground the SLBPD pin. This powers down the loopback output buffer. Loopback output at the SLBO pins can be a 622MHz clock or 2.5Gbps data, depending on the state of JU2 (SLBEN). Set SLBEN to VCC for data and GND for clock output.
- 7) To automatically reset FIFOERROR, install JU4. This connects the FIFOERROR pin to RESET and resets the FIFO if the FIFO buffers' elasticity is exceeded. Leave jumper JU3 open.
- 8) For static  data  inputs,  install  jumper  JU13  to  allow setting a logic state. Set up a data pattern using jumpers JU17, JU21, JU25, JU29, JU33, JU37, JU41, and JU45. Connect data line PDI- to the opposite state of PDI+. If an external data pattern is to  be  applied,  remove the respective jumpers for the data channel. The EV kit is shipped with the data lines DC-coupled to the SMA connectors, so the  instantaneous input levels must be kept between 0V and 2.4V.
- 9) Connect the SDO and SCLK lines at J1 through J4 to  a  50 Ω terminated oscilloscope. Use matched cable lengths when making timing measurements.
- 10) Power up the EV kit with a 3.3V supply. Power to J21 is required only if AC-coupling capacitors C11-C20 are installed. To install C11-C20, cut the shorting strap first.  The  common-mode voltage at J21 is used when the external data inputs need a level shift to be LVDS-compatible.

## Control Descriptions (see Quick Start first)

| COMPONENT                                      | NAME             | FUNCTION                                                                                                             |
|------------------------------------------------|------------------|----------------------------------------------------------------------------------------------------------------------|
| J1, J2                                         | SCLKO ±          | Serial Clock Output, CML, Differential 2.5GHz/2.7GHz Clock                                                           |
| J3, J4                                         | SDO ±            | Serial Data Output, CML, Differential 2.5Gbps/2.7Gbps Data                                                           |
| J5, J6                                         | SLBO ±           | Serial Loopback/Data Output, CML, Data, or Clock                                                                     |
| J7                                             | V CC             | Supply Voltage                                                                                                       |
| J8, J26                                        | GND              | Supply Ground                                                                                                        |
| J9                                             | RESET            | External Reset Connection, TTL Input                                                                                 |
| J10                                            | FIFOERROR        | External FIFOERROR Connection, TTL Output                                                                            |
| J11, J12                                       | PCLKI ±          | Parallel Clock Input, LVDS                                                                                           |
| J13-J20                                        | PDI ±            | Parallel Data Input, LVDS                                                                                            |
| J21                                            | CMV              | Common-Mode Voltage. Not required for DC-coupled LVDS inputs. Set to approximately 1.2V when C11-C20 are installed.  |
| J22, J23                                       | PCLKO ±          | Parallel Clock Output, LVDS                                                                                          |
| J24, J25                                       | RCLK ±           | Reference Clock Input, LVPECL                                                                                        |
| JU1                                            | SLBPD            | Powers down the system loopback outputs when low. Loopback outputs are enabled when high.                            |
| JU2                                            | SLBEN            | Loopback Enable Input. SLBEN high enables serial data. SLBEN low enables a 622MHz/666MHz clock.                      |
| JU3                                            | RESET            | FIFO Error Reset. Pull high to unlatch FIFOERROR output, and center the FIFO in its elastic range.                   |
| JU4                                            | FIFOERROR        | FIFO Error Indicator. Connect FIFOERROR to RESET to reset the FIFO automatically.                                    |
| JU8, JU9, JU10                                 | MODE             | Select PCLKI Frequency 622MHz/311MHz, and Enable/Disable SCLKO. Install only one jumper or leave open. See Figure 1. |
| JU13                                           | STATIC DATA      | Install JU13 when using the static data jumpers below.                                                               |
| JU17, JU21, JU25, JU29, JU33, JU37, JU41, JU45 | PDI0 ± to PDI3 ± | Parallel Data Input Static Level Setup. Install PDI+ to the opposite state of PDI-.                                  |
| JU53, JU54, JU55                               | CLKSET           | Select RCLK Frequency (622MHz, 155MHz, 77MHz, 38MHz). Install one jumper or leave open. See Figure 1.                |
| JU56                                           | RATESET          | SONET or FEC Data Rate Select. Set high for FEC or low for SONET.                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3892 Evaluation Kit

## Detailed Description

## MAX3892 Evaluation Kit

Figure 1. MAX3892 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3892 Evaluation Kit

<!-- image -->

Figure 2. MAX3892 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3892 Evaluation Kit

Figure 3. MAX3892 EV Kit Component Placement Guide-Solder Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3892 Evaluation Kit

<!-- image -->

Figure 4. MAX3892 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3892 Evaluation Kit

Figure 5. MAX3892 EV Kit PC Board Layout-Ground Plane

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3892 Evaluation Kit

<!-- image -->

Figure 6. MAX3892 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3892 Evaluation Kit

Figure 7. MAX3892 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600