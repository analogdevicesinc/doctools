<!-- lastmod 2022-08-04 -->
## MAX12005 Evaluation Kit

## General Description

The MAX12005 evaluation kit (EV kit) provides a proven PCB layout  that  facilitates  evaluation  of  the  MAX12005 satellite switch RFIC. The EV kit is fully assembled and tested. A software control program with a graphical user interface (GUI) is available from www.maximintegrated. com/evkitsoftware ,  allowing  full  user  control  of  the  IC functions and settings.

The EV Kit has 75Ω RF lines. However, to make evaluation easy with standard 50Ω test equipment, there are 75Ω to 50Ω impedance transformation networks on-board at all input and output ports.

## Features

- ● USB Interface to Host PC
- ● Easy-to-Use GUI Software
- ● 75Ω to 50Ω On-Board Impedance Transformation Network at All Ports
- ● Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## EV Kit Contents List

|   QTY | DESCRIPTION                                  |
|-------|----------------------------------------------|
|     1 | Circuit board assembly: MAX12005 EV kit      |
|     1 | USB high-speed A-to-mini B cable, 5ft (1.5m) |

## Quick Start

The EV kit is fully assembled and factory test­ ed. Follow the instructions in the Connections and Setup section to test the device. The EV kit features two methods to control the IC: either  through  a  standard  SPI  interface  or  by  using T one/ Voltage, Tone Burst, using DiSEqC 1.x/2.x. This procedure describes operation with standard SPI interface.

## Test Equipment Required

This  section  lists  the  recommended  test  equipment  to verify the operation of the MAX12005. It is intended as a guide only and substitutions may be possible:

- ● MAX12005 EV kit
- ● DC supply capable of delivering +3V and 300mA of continuous current
- ● One HP8648D or equivalent signal source capable of generating up to 2.2GHz
- ● HP8561E or equivalent RF spectrum analyzer with a minimum 100kHz to 3GHz frequency range
- ● PC, laptop or tablet with Microsoft Windows XP ® , Windows ® 7, 8 OS and a USB port
- ● USB-A male to mini-USB cable

## Connections and Setup

This section provides step-by-step instructions for getting the EV kit up and running with SPI.

## Software Setup

- 1) Download the MAX12005 control software zip folder from https://www.maximintegrated.com . Unzip the folder before installing the software.
- 2) Install the CDM20814\_Setup.exe file from the Interface\_ Driver folder by double-clicking on the file icon.
- 3) Restart your computer.
- 4) Install the software by double-clicking on the Setup. exe file from the MAX12005\_GUI folder. Follow the instruc­ tions in the installation Wizard.
- 5) Now select Control Panel from the Windows Start menu, and double-click on System/Device Manager, expand the Universal Serial Bus controllers icon, and there should be a new USB device, USB Serial Converter. This is highlighted in Figure 2.
- 6) Go to the installation directory and start the Satellite Reception Switch Control v2.1.2.exe GUI software by double-clicking on the icon shown in Figure 3.

<!-- image -->

Evaluates: MAX12005

## MAX12005 Evaluation Kit

## Software Description

The GUI has several control fields ( Receiver 1- Receiver 4, Configuration, Cascade, Mode, and Gain ) and control buttons ( Default Settings (brings the GUI back to default settings), Send (sends the current settings to the EV Kit), and a Quit ).

The Receiver group  boxes  are  used  to  set  the  RF output states. The Receiver 1-Receiver 4 group boxes correspond to RF Out 1-RF Out 4. Within each Receiver group  box  there  are  seven  parameters  that  define  the source of the RF signal, the gain setting, and the type of tone envelope.

If the Cascade drop-down list in the Configuration group box is set to Single ,  each RF output has eight inputs to select  from,  such  as  satellite  A  or  B,  low  band  or  high band, horizontal or vertical polarization. These labels do not necessarily refer to the actual sources, but are labeled for user convenience. All input configurations are identical.

Register 01 has the bits to control the mode and switching action of the IC. The three bits;  satellite, polarization and band, make eight possible combinations to select which of the eight RFIN1-8 will be seen on a particular output. Table 1 shows what the GUI labels are equivalent to and Table 2 shows the possible combinations on each output RFOUT1-4.

In Cascade mode,  two  EV  kits  are  required.  See  the MAX12005 IC data sheet for a typical configuration. In this mode, the Option switch is enabled, allowing selection of up to four satellite inputs.

## Table 1. Software GUI Labels and Functions

| FUNCTION                          |
|-----------------------------------|
| 0 = Master/Single IC 1 = Slave IC |
| 0 = Sat A 1 = Sat B               |
| 0 = Vertical 1 = Horizontal       |
| 0 = low 1 = high                  |

## Hardware Setup

- 1) With the output disabled, connect the +3V supply to the V CC  terminal on the MAX12005EV Kit.
- 2) Connect the supply ground to the GND terminal on the MAX12005 EV Kit.
- 3) Connect a USB cable between the MAX12005 EV Kit and the PC with MAX12005 control software.
- 4) Set the S202 switch on the EV Kit board to the SPI ON position (right-hand position or towards the USB connector). Figure 1 shows the location of the S202 switch.
- 5) Set the signal generator to accurately deliver -37dBm (equivalent to 70dBµV) CW tone at 950MHz.
- 6) Connect it to one of the eight RFIN1-8 inputs ports.
- 7) Connect one of the four RFOUT1-4 ports to the spectrum analyzer.
- 8) Set the center frequency on the spectrum analyzer to 950MHz and span to 1MHz.
- 9) Turn on the +3V power supply and note the current. It should be approximately 135mA.
- 10)  Use the software control GUI to select the input to show up on the output port connected to the spectrum analyzer. Refer to MAX12005 SPI Registers, Table 1 and Table 2 to understand the switching options.
- 11)  On the spectrum analyzer, the output RF signal should be approximately -44dBm at 950MHz with Output Gain set to default +6dB.

Note: Always hit Send after making any changes in the GUI.

Note: All  RF  lines  are  75Ω.  However,  to  make  testing easy with standard 50 Ω test equipment, there are 75Ωto 50Ω  impedance  transformation  networks  on-board  at all  input  and  output  ports.  These  resistive  impedance transformation networks have a loss of 6dB across them. During  testing,  unused  RF  connectors,  either  inputs  or outputs, must be terminated in 50Ω loads.

Evaluates: MAX12005

## Table 2: Switching Options

|   SATELLITE BIT |   POLARIZATION BIT |   BAND BIT | GUI LABEL               | INPUT SELECTED   |
|-----------------|--------------------|------------|-------------------------|------------------|
|               0 |                  0 |          0 | Sat A, vertical, low    | RFIN1            |
|               0 |                  0 |          1 | Sat A, vertical, high   | RFIN3            |
|               0 |                  1 |          0 | Sat A, horizontal, low  | RFIN2            |
|               0 |                  1 |          1 | Sat A, horizontal, high | RFIN4            |
|               1 |                  0 |          0 | 0 Sat B, vertical, low  | RFIN5            |
|               1 |                  0 |          1 | Sat B, vertical, high 0 | RFIN7            |
|               1 |                  1 |          0 | Sat B, horizontal, low  | RFIN6            |
|               1 |                  1 |          1 | Sat B, horizontal, high | RFIN8            |

Figure 1. MAX12005 EV KIT.

<!-- image -->

Evaluates: MAX12005

Figure 2. Showing installation of the USB Serial Converter Device

<!-- image -->

Figure 3. Software GUI Icon

<!-- image -->

Evaluates: MAX12005

Figure 4. Screenshot of the MAX12005 EV Kit GUI

<!-- image -->

Figure 5. Cascade Mode Allows for Up to Four Satellite Inputs (Labeled A-D).

<!-- image -->

## MAX12005 Evaluation Kit

## MAX12005 SPI Registers

Address range 00 to 11 registers are write only.

| ADDRESS             | BIT   | NAME                    | FUNCTION                                                                                                                                    | DEFAULT   |
|---------------------|-------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| (Configuration_reg) | 15:11 | Unused                  | -                                                                                                                                           | -         |
| (Configuration_reg) | 10    | tone_env_en4            | 0 = Normal DiSEqC_TX4 output. 1 = DiSEqC_TX1 outputs 22kHz envelope as received by DiSEqC_RX4.                                              | 0         |
| (Configuration_reg) | 9     | tone_env_en3            | 0 = Normal DiSEqC_TX4 output. 1 = DiSEqC_TX1 outputs 22kHz envelope as received by DiSEqC_RX3.                                              | 0         |
| (Configuration_reg) | 8     | tone_env_en2            | 0 = Normal DiSEqC_TX4 output. 1 = DiSEqC_TX1 outputs 22kHz envelope as received by DiSEqC_R2.                                               | 0         |
| (Configuration_reg) | 7     | tone_env_en1            | 0 = Normal DiSEqC_TX4 output. 1 = DiSEqC_TX1 outputs 22kHz envelope as received by DiSEqC_RX1.                                              | 0         |
| (Configuration_reg) | 6     | option                  | 0 = Master/single IC, 1 = Slave IC                                                                                                          | 0         |
| (Configuration_reg) | 5     | cascade                 | 0 = Single, 1 = Cascaded                                                                                                                    | 0         |
| (Configuration_reg) | 4     | mode                    | 0 = Switch, 1 = LNB                                                                                                                         | 0         |
| (Configuration_reg) | 3:0   | mux_ctrl                | Switch matrix controlled by: 0 = DiSEqC 1 = SPI Separately for each receiver: Bit 0 = RFOUT1, Bit 1 = RFOUT2 Bit 2 = RFOUT3, Bit 3 = RFOUT4 | 0000      |
| (Mode & Switch_reg) | 15    | option 3 (RFOUT4)       | 0 = Master/single IC, 1 = Slave IC                                                                                                          | 0         |
| (Mode & Switch_reg) | 14    | satellite 3 (RFOUT4)    | 0 = RFIN1-RFIN4 (Satellite A) 1 = RFIN5-RFIN8 (Satellite B)                                                                                 | 0         |
| (Mode & Switch_reg) | 13    | polarization 3 (RFOUT4) | 0 = RFIN1, RFIN3, RFIN5, RFIN7 1 = RFIN2, RFIN4, RFIN6, RFIN8                                                                               | 0         |
| (Mode & Switch_reg) | 12    | band 3 (RFOUT4)         | 0 = RFIN1, RFIN2, RFIN5, RFIN6 1 = RFIN3, RFIN4, RFIN7, RFIN8                                                                               | 0         |
| (Mode & Switch_reg) | 11    | option 2 (RFOUT3)       | 0 = Master/single IC, 1 = Slave IC                                                                                                          | 0         |
|                     | 10    | satellite 2 (RFOUT3)    | 0 = RFIN1-RFIN4, 1 = RFIN5-RFIN8                                                                                                            | 0         |
|                     | 9     | polarization 2 (RFOUT3) | 0 = RFIN1, RFIN3, RFIN5, RFIN7 1 = RFIN2, RFIN4, RFIN6, RFIN8                                                                               | 0         |
|                     | 8     | band 2 (RFOUT3)         | 0 = RFIN1, RFIN2, RFIN5, RFIN6 1 = RFIN3, RFIN4, RFIN7, RFIN8                                                                               | 0         |
|                     | 7     | option 1 (RFOUT2)       | 0 = Master/single IC, 1 = Slave IC                                                                                                          | 0         |
|                     | 6     | satellite1 (RFOUT2)     | 0 = RFIN1-RFIN4, 1 = RFIN5-RFIN8                                                                                                            | 0         |
|                     | 5     | polarization 1 (RFOUT2) | 0 = RFIN1, RFIN3, RFIN5, RFIN7 1 = RFIN2, RFIN4, RFIN6, RFIN8                                                                               | 0         |

Evaluates: MAX12005

## MAX12005 Evaluation Kit

## MAX12005 SPI Registers (continued)

Address range 00 to 11 registers are write only.

| ADDRESS                                    | BIT   | NAME                    | FUNCTION                                                                                                                        |   DEFAULT |
|--------------------------------------------|-------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------|-----------|
| (Mode & Switch_reg)                        | 4     | band 1 (RFOUT2)         | 0 = RFIN1, RFIN2, RFIN5, RFIN6 1 = RFIN3, RFIN4, RFIN7, RFIN8                                                                   |         0 |
| (Mode & Switch_reg)                        | 3     | option 0 (RFOUT1)       | 0 = Master/single IC, 1 = Slave IC                                                                                              |         0 |
| (Mode & Switch_reg)                        | 2     | satellite 0 (RFOUT1)    | 0 = RFIN1-RFIN4, 1 = RFIN5-RFIN8                                                                                                |         0 |
| (Mode & Switch_reg)                        | 1     | polarization 0 (RFOUT1) | 0 = RFIN1, RFIN3, RFIN5, RFIN7 1 = RFIN2, RFIN4, RFIN6, RFIN8                                                                   |         0 |
| (Mode & Switch_reg)                        | 0     | band 0 (RFOUT1)         | 0 = RFIN1, RFIN2, RFIN5, RFIN6 1 = RFIN3, RFIN4, RFIN7, RFIN8                                                                   |         0 |
| (Gain_reg)                                 | 15:10 | unused                  | -                                                                                                                               |         0 |
| (Gain_reg)                                 | 9:8   | in_gain                 | Common input gain RFIN1 through RFIN8: Bit 8 = 0, Bit 9 = 0: 0dB Bit 8 = 1, Bit 9 = 0: 6dB Bit 8 = 0, Bit 9 = 1: 12dB           |        00 |
| (Gain_reg)                                 | 7:6   | out_gain3               | Output gain RFOUT4 (see address 11, bits 15:10) Bit 6 = 0, Bit 7 = 0: 0dB Bit 6 = 1, Bit 7 = 0: -6dB Bit 6 = 0, Bit 7 = 1: +6dB |        00 |
| (Gain_reg)                                 | 5:4   | out_gain2               | Output gain RFOUT3 (see address 11, bits 15:10) Bit 4 = 0, Bit 5 = 0: 0dB Bit 4 = 1, Bit 5 = 0: -6dB Bit 4 = 0, Bit 5 = 1: +6dB |        00 |
| (Gain_reg)                                 | 3:2   | out_gain1               | Output gain RFOUT2 (see address 11, bits 15:10) Bit 2 = 0, Bit 3 = 0: 0dB Bit 2 = 1, Bit 3 = 0: -6dB Bit 2 = 0, Bit 3 = 1: +6dB |        00 |
| (Gain_reg)                                 | 1:0   | out_gain0               | Output gain RFOUT1 (see address 11, bits 15:10) Bit 0 = 0, Bit 1 = 0: 0dB Bit 0 = 1, Bit 1 = 0: -6dB Bit 0 = 0, Bit 1 = 1: +6dB |        00 |
| (Output Gain Select & Calibrate_reg) 9 8 7 | 15:10 | unused                  | -                                                                                                                               |    000000 |
| (Output Gain Select & Calibrate_reg) 9 8 7 |       | External test clock     | 0 = Pin 16 inactive 1 = Pin 16 is clock input for DiSEqC interface.                                                             |         0 |
| (Output Gain Select & Calibrate_reg) 9 8 7 |       | fuse output impedance   | 0 = 10kΩ (no need to use or test) 1 = 100kΩ                                                                                     |         0 |
| (Output Gain Select & Calibrate_reg) 9 8 7 |       | output cut_off          | Cut-off oscillator calibration output (burn = 1)                                                                                |         0 |
| (Output Gain Select & Calibrate_reg) 9 8 7 | 6     | burn_gasket             | Burn gasket (burn = 1)                                                                                                          |         0 |
| (Output Gain Select & Calibrate_reg) 9 8 7 | 5     | burn_in                 | Burn_in calibration value (burn = 1)                                                                                            |         0 |
| (Output Gain Select & Calibrate_reg) 9 8 7 | 4:0   | calibrate               | DiSEqC clock frequency calibration value                                                                                        |     01100 |

Evaluates: MAX12005

## Component Information, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematic.

- ● MAX12005 EV BOM
- ● MAX12005 EV PCB Layout
- ● MAX12005 EV Schematic

Evaluates: MAX12005

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX12005EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX12005 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                       | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------|-----------------|
|                 0 | 5/12            | Initial release                                   | -               |
|                 1 | 5/16            | Updated Quick Start section                       | 1-10            |
|                 2 | 5/16            | Updated part number in Ordering Information table | 9               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX12005

| DESIGNATION                                                              |   QTY | DESCRIPTION                                                       |
|--------------------------------------------------------------------------|-------|-------------------------------------------------------------------|
| +8V, 3V, ADDR, ARM_MONITOR, DSQOUT, EXTM, EXT_CLK, GROUND, START_MONITOR |     9 | Single gold pin Sullins PBC36SAAN                                 |
| ARM, START                                                               |     2 | Normally off momentary SPST switches Tyco FSM2JSMA                |
| C1, C71                                                                  |     2 | 30pF ±5% ceramic capacitors (0603) Murata GRM1885C1H300J          |
| C1L, C3L, C5L, C9L                                                       |     4 | 100µF electrolytic capacitors SANYO 35MV100AX                     |
| C2                                                                       |     1 | 0.1µF ±10%, ceramic capacitor (0603) Murata GRM188R71C104K        |
| C2L, C7L                                                                 |     2 | 0.1µF ±10%, ceramic capacitors (0603) Murata GRM188R71E104K       |
| C3, C21, C24, C12L, C12L1, C13L, C13L1, CD1- CD4                         |    11 | 0.01µF ±10%, ceramic capacitors (0603) Murata GRM188R71E103K      |
| C4L, C6L                                                                 |     2 | 0.47µF ±10%, ceramic capacitors (0603) Murata GRM188R71E474K      |
| C8L, C10L, C11L                                                          |     3 | 0.22µF ±10%, 0603 ceramic capacitors (0603) Murata GRM188R71E224K |
| C22                                                                      |     1 | 4.7µF ±10%, ceramic capacitor (0603) Murata GRM188R60J475K        |
| COMP, RF_BOARD                                                           |     2 | 20-pin (2 x 10) headers, 0.1in centers Sullins PEC36DAAN          |
| D1                                                                       |     1 | 25V Schottky diode (SOD123) Nihon EP05Q03L                        |
| D2, D4                                                                   |     2 | 25V Schottky diodes (SOD123) General Semi BAT43W                  |
| D3                                                                       |     1 | 25V Schottky diode (Radial) Philips Semi 1N4001                   |
| DRXA-DRXD, DTXA-DTXD, JEN, JGAIN, JMODE, USB_J1-USB_J19                  |    30 | 2-pin jumper blocks, 0.1in spacing Sullins PEC36SAAN              |
| FBEAD                                                                    |     1 | 470 Ω ±2%, 10MHz ferrite bead (0603) Murata BLM18HG471SN1D        |
| J1                                                                       |     1 | USB type-B connector Assmann AU_Y1007                             |
| L1L                                                                      |     1 | 22µH ±10% inductor (1210) Murata LQH3C221K34                      |
| L2L                                                                      |     1 | 1k Ω , 100mA ferrite bead (0603) Murata BLM18BD102 SN1D           |
| L3L                                                                      |     1 | 220µH ±10% inductor (1812) Murata LQH43CN221K03                   |
| R1                                                                       |     1 | 100 Ω ±5% resistor (1206)                                         |
| R2                                                                       |     1 | 11k Ω ±1% resistor (1206)                                         |
| R3                                                                       |     1 | 10k Ω ±1% resistor (1206)                                         |
| R4                                                                       |     1 | 15 Ω ±5% resistor (1206)                                          |
| R5                                                                       |     1 | 100 Ω ±5% resistor (2010)                                         |
| R7, R45-R50                                                              |     7 | 47k Ω , 5V SIP resistors Bourns 4310R-101-473                     |
| R33, R34                                                                 |     2 | 1k Ω ±1% resistors (0603)                                         |

| R39, R40, R41   |   3 | 2k Ω ±1% resistors (1206)                                                 |
|-----------------|-----|---------------------------------------------------------------------------|
| R42             |   1 | 47k Ω ±1% resistor (1206)                                                 |
| R43             |   1 | 2.7k Ω ±5% resistor (2010)                                                |
| R44             |   1 | 1.02k Ω ±5% resistor (2010)                                               |
| R51, R59-R65    |   8 | 10k Ω ±5% resistors (2010)                                                |
| R54, R55        |   2 | 47k Ω ±5% resistors (1206)                                                |
| S1-S7           |   7 | 8-position DIP switches CTS Corp. 206-8                                   |
| U1-U6           |   6 | 8-bit parallel-load shift registers TI 74HC165                            |
| U7-U12, U17-U20 |  10 | Quad 2-input positive-nand gates TI 74HC00                                |
| U13, U14        |   2 | Sync 4-bit up/down binary counters TI 74HC193                             |
| U15, U16        |   2 | Dual D-type positive edge-triggered flip-flops TI 74HC74                  |
| U21             |   1 | Decade counter Motorola MC74HC4017(J,N,D)                                 |
| U22             |   1 | LNB supply and control IC with step-up and I 2 C interface STMicro LNBH23 |
| U23             |   1 | FTDI USB-to-parallel RS-245 IC Saelig Co. FT245R                          |

COJ109

COJ111

COJ113

COJ114

COJ107

COJ100

COJ101

COJ102

COJ103

COJ104

COJ105

COJ106

<!-- image -->

COJ115

COJ112

COJ110

COJ108

COJ109

COJ111

COJ113

COJ114

COJ107

COJ100

COJ101

COJ102

COJ103

COJ104

COJ105

COJ106

<!-- image -->

COJ115

COJ112

COJ110

COJ108

COJ109

COJ111

COJ113

COJ114

COJ107

COJ100

COJ101

COJ102

COJ103

COJ104

COJ105

COJ106

<!-- image -->

COJ115

COJ112

COJ110

COJ108

COJ109

COJ111

COJ113

COJ114

COJ107

COJ100

COJ101

COJ102

COJ103

COJ104

COJ105

COJ106

<!-- image -->

COJ115

COJ112

COJ110

COJ108

COJ109

COJ111

COJ113

COJ114

COJ107

COJ100

COJ101

COJ102

COJ103

COJ104

COJ105

COJ106

<!-- image -->

COJ115

COJ112

COJ110

COJ108

COJ109

COJ111

COJ113

COJ114

COJ107

COJ100

COJ101

COJ102

COJ103

COJ104

COJ105

COJ106

<!-- image -->

COJ115

COJ112

COJ110

COJ108

COJ109

COJ111

COJ113

COJ114

COJ107

COJ100

COJ101

COJ102

COJ103

COJ104

COJ105

COJ106

<!-- image -->

COJ115

COJ112

COJ110

COJ108

COJ109

COJ111

COJ113

COJ114

<!-- image -->

<!-- image -->

COJ109

COJ111

COJ113

COJ114

COJ107

COJ100

COJ101

COJ102

COJ103

COJ104

COJ105

COJ106

<!-- image -->

COJ115

COJ112

COJ110

COJ108

| Symbol   | Hit Count   | Tool Size          | Plated   | Hole Type   |
|----------|-------------|--------------------|----------|-------------|
|          | 25          | 0.254mm (10mil)    | PTH      | Round       |
|          | 1229        | 0.3mm (11.811mil)  | PTH      | Round       |
|          | 9           | 0.4mm (15.748mil)  | PTH      | Round       |
|          | 4           | 0.5mm (19.685mil)  | PTH      | Round       |
|          | 25          | 0.8mm (31.496mil)  | PTH      | Round       |
|          | 4           | 0.9mm (35.433mil)  | PTH      | Round       |
|          | 28          | 1mm (39.37mil)     | PTH      | Round       |
|          | 2           | 1.02mm (40.157mil) | PTH      | Round       |
|          | 4           | 1.8mm (70.866mil)  | PTH      | Round       |
|          | 4           | 3.175mm (125mil)   | PTH      | Round       |
|          | 1334 Total  |                    |          |             |

AGND

AGND

AGND

AGND

COJ109

J109

CASCADE\_IN\_1

PIJ10901

PIC13002

PIC13002

PIJ10901

PIJ10902

PIJ10902

AGND

J100

RFIN1

PIJ10002

PIJ10002

PIJ10001

PIJ10001

COC100

C100

PIC10001

PIC10002

PIC10001

PIC10002

NP

PIC10802

PIC10802

COC116

C116

PIC10801

PIC10801

PIC11601

PIC11601

PIC11602

PIC11602

NP

COR102

R102

PIR10201

PIR10202

PIR10201

PIR10202

86.6

COC128

C128

220p

PIC12802

PIC12802

PIC12801

PIC12801

COC130

C130

PIC13001

NP

PIC13001

AGND

COJ111

J111

CASCADE\_IN\_2

PIJ11101

PIC14002

PIC14002

PIJ11101

PIJ11102

PIJ11102

AGND

C108

COC108

220p

COR110

R110

43.2

PIR11001

PIR11001

COC131

C131

PIC13101

PIC13101

AGND

COC136

C136

220p

PIC13602

PIC13602

PIC13601

PIC13601

COC140

C140

PIC14001

NP

PIC14001

AGND

COJ113

J113

CASCADE\_IN\_3

PIJ11301

PIC15002

PIC15002

PIJ11301

PIJ11302

PIJ11302

AGND

R122

COR122

43.2

PIR12302

PIR12302

COC141

C141

PIC14101

PIC14101

AGND

COC147

C147

220p

PIC14702

PIC14701

PIC14701

PIC14702

COC150

C150

PIC15001

NP

PIC15001

AGND

COJ114

J114

CASCADE\_IN\_4

PIJ11401

PIC15902

PIC15902

PIJ11401

PIJ11402

PIJ11402

AGND

R126

COR126

43.2

PIR12702

PIR12702

COC151

C151

PIC15101

PIC15101

AGND

COC154

C154

220p

PIC15402

PIC15401

PIC15401

PIC15402

COC159

C159

PIC15901

NP

PIC15901

AGND

NP

PIR12602

PIR12602

COR127

R127

86.6

PIR12701

PIR12701

AGND

PIR12601

PIR12601

NP

PIR12202

PIR12202

COR123

R123

86.6

PIR12301

PIR12301

AGND

PIR12201

PIR12201

NP

AGND

AGND

AGND

AGND

COR118

R118

43.2

PIR11802

PIR11802

COR120

R120

86.6

PIR12001

PIR12001

AGND

PIR11801

PIR11801

PIR11002

PIR11002

PIC13102

PIC13102

PIC14102

PIC14102

PIC15102

PIC15102

PIC16002

PIC16002

PIR12002

PIR12002

COR128

R128

43.2

PIR13202

PIR13202

COC160

C160

PIC16001

PIC16001

AGND

NP

PIR12802

PIR12802

COR132

R132

86.6

PIR13201

PIR13201

AGND

PIR12801

PIR12801

GND

J101

RFIN2

PIJ10102

PIJ10102

PIJ10101

PIJ10101

COC101

C101

PIC10101

PIC10102

PIC10101

PIC10102

NP

PIC10902

PIC10902

COC117

C117

PIC10901

PIC10901

PIC11701

PIC11701

PIC11702

PIC11702

NP

COR103

R103

PIR10301

PIR10302

PIR10301

PIR10302

86.6

PIR11102

PIR11102

COC109

C109

220p

COR111

R111

43.2

PIR11101

PIR11101

AGND

AGND

AGND

AGND

COJ117

J117

PIJ11702

PIJ11702

2

PIJ11704

PIJ11704

PIJ11706

PIJ11706

PIJ11708

4

6

8

AGND

AGND

AGND

AGND

17

PIU100017

PIU100017

18

PIU100018

PIU100018

19

PIU100019

PIU100019

20

PIU100020

PIU100020

21

PIU100021

PIU100021

22

PIU100022

PIU100022

23

COR112

R112

43.2

PIR11201

PIR11201

AGND

2

PIU10002

PIU10002

J102

RFIN3

PIJ10202

PIJ10202

PIJ10201

PIJ10201

COC102

C102

PIC10201

PIC10202

PIC10202

PIC10201

NP

PIC11002

PIC11002

COC118

PIC11001

C118

PIC11001

PIC11801

PIC11802

PIC11801

PIC11802

NP

COR104

R104

PIR10401

PIR10402

PIR10401

PIR10402

86.6

1

3

PIU10001

PIU10001

VLA

CASC\_IN1

GND

CASC\_IN2

GND

CASC\_IN3

GND

CASC\_IN4

PIU100023

PIU100023

24

PIU100024

PIU100024

1

PIJ11701

PIJ11701

3

5

7

PIJ11708

PIJ117010

9

10

PIJ117010

HDR 5X2

POSPI0EN

SPI\_EN

POSPI0EN

POSPI0DATA

SPI\_DATA

POSPI0DATA

POSPI0CLK

POSPI0CLK

SPI\_CLK

PIJ11703

PIJ11703

PIJ11705

PIJ11705

PIJ11707

PIJ11707

PIJ11709

PIJ11709

COP100

P100

2

GND

D\_TX\_D

25

PIU100025

PIU100025

PIP10002

PIP10002

1

PIP10001

PIP10001

3-644456-2

GND

D\_RX\_D

26

PIU100026

PIU100026

PIU10003

PIU10003

HLA

D\_TX\_C

27

PIU100027

PIU100027

PIR11202

PIR11202

COC110

C110

220p AGND

AGND

AGND

AGND

AGND

4

PIU10004

PIU10004

5

GND

D\_RX\_C

28

PIU100028

PIU100028

PIU10005

PIU10005

VHA

D\_TX\_B

29

PIU100029

PIU100029

J103

RFIN4

PIJ10302

PIJ10302

PIJ10301

PIJ10301

COC103

C103

PIC10301

PIC10301

PIC10302

PIC10302

NP

PIC11102

PIC11102

COC119

C119

PIC11101

PIC11101

PIC11901

PIC11901

PIC11902

PIC11902

NP

COR105

R105

PIR10501

PIR10501

PIR10502

PIR10502

86.6

AGND

6

PIU10006

PIU10006

7

GND

D\_RX\_B

30

PIU100030

PIU100030

PIU10007

PIU10007

HHA

D\_TX\_A

31

PIU100031

PIU100031

PIR11302

PIR11302

COC111

C111

220p

COR113

R113

43.2

PIR11301

PIR11301

AGND

8

PIU10008

PIU10008

9

GND

D\_RX\_A

32

PIU100032

PIU100032

PITP10001

PITP10001

COTP100

TP100

PITP10101

PITP10101

COTP101

TP101

PITP10201

PITP10201

COTP102

TP102

PITP10301

PITP10301

COTP103

TP103

PIU10009

PIU10009

VLB

AGND

AGND

AGND

AGND

AGND

10

PIU100010

11

PIU100010

GND

PIU100011

PIU100011

HLB

SPI\_EN/SPI\_OFF

46

J104

RFIN5

PIJ10402

PIJ10402

PIJ10401

PIJ10401

COC104

C104

PIC10401

PIC10402

PIC10401

PIC10402

NP

PIC11202

PIC11202

COC120

C120

PIC11201

PIC11201

PIC12001

PIC12001

PIC12002

PIC12002

NP

COR106

R106

PIR10601

PIR10602

PIR10601

PIR10602

86.6

AGND

12

PIU100012

13

PIU100012

GND

SPI\_DATA/CASCADE\_SELECT

PIU100046

PIU100046

PIR14002

47

PIU100047

PIU100047

PIR14102

PIR14002

PIR14102

COR140

R140

1k0

PIU100013

PIU100013

VHB

SPI\_CLK/GAIN\_SELECT

48

PIU100048

PIU100048

COR141

R141

1k0

R114

COR114

43.2

PIR11401

PIR11401

AGND

14

PIU100014

15

PIU100014

GND

VCC

45

PIU100045

PIU100045

PIR14202

PIU100015

PIU100015

HHB

EP

49

PIU100049

PIU100049

AGND

PIR14302

PIR14202

PIR14302

COR142

R142

1k0

R143

COR143

1k0

AGND

AGND

AGND

AGND

AGND

16

PIU100016

PIU100016

GND

VCC\_D

OUT\_D

GND

VCC\_C

OUT\_C

GND

VCC\_B

OUT\_B

GND

VCC\_A

OUT\_A

GND

PIC16702

PIC16702

PIC16701

C167

COC167

2n2

PIC16701

PIR14001

PIR14101

PIR14201

PIR14301

PIR14001

PIR14101

PIR14201

PIR14301

AGND AGND AGND AGND AGND

J105

RFIN6

PIJ10502

PIJ10502

PIJ10501

PIJ10501

COC105

C105

PIC10501

PIC10502

PIC10501

PIC10502

NP

PIC11302

PIC11302

COC121

C121

PIC11301

PIC11301

PIC12101

PIC12101

PIC12102

PIC12102

NP

COR107

R107

PIR10701

PIR10702

PIR10701

PIR10702

86.6

PIR11502

PIR11502

PIR11501

PIR11501

COU100

U100

MAX12005ETM+

33

PIU100033

PIU100033

34

PIU100034

PIU100034

35

PIU100035

PIU100035

36

PIU100036

PIU100036

37

PIU100037

PIU100037

38

PIU100038

PIU100038

39

PIU100039

PIU100039

40

PIU100040

PIU100040

41

PIU100041

PIU100041

42

PIU100042

PIU100042

43

PIU100043

PIU100043

44

PIU100044

PIU100044

PIC16802

AGND

AGND

AGND

AGND

PIC16101

PIC16201

PIC16101

PIC16201

COC161

C161

PIC16102

PIC16202

10p

PIC16102

PIC16202

AGND

PIC16902

PIC16802

PIC16902

COC168

C168

PIC16801

2n2

PIC16801

AGND

C169

COC169

PIC16901

2n2

PIC16901

AGND

PIC15801

PIC15801

COC162

C162

J106

RFIN7

PIJ10602

PIJ10602

PIJ10601

PIJ10601

COC106

C106

PIC10601

PIC10602

PIC10601

PIC10602

NP

PIC11402

PIC11402

COC122

C122

PIC11401

PIC11401

PIC12201

PIC12201

PIC12202

PIC12202

NP

COR108

R108

PIR10801

PIR10802

PIR10801

PIR10802

86.6

COC134

C134

10n

COC135

C135

PIC13402

PIC13402

10p

PIC13502

PIC13502

COC137

C137

10n

COC139

C139

PIC13702

PIC13702

10p

PIC13902

PIC13902

COC142

C142

10n

COC144

C144

PIC14202

PIC14202

10p

PIC14402

PIC14402

COC148

C148

10n

COC149

C149

PIC14802

PIC14802

10p

PIC14902

PIC14902

PIR11602

PIR11602

COR116

R116

43.2

PIR11601

PIR11601

AGND

AGND

AGND

AGND

COJ116

J116

PIJ11601

PIJ11601

COC158

C158

1

PIJ11602

PIJ11602

10n PIC15802

10uF/16V

2

DC

PIC15802

AGND

AGND

2k74

R133

COR133

PIR13301

PIR13302

PIR13302

PIR13301

COR135

2k74

R135

PIR13501

PIR13502

PIR13502

PIR13501

COR137

2k74

R137

PIR13701

PIR13702

PIR13702

PIR13701

COR138

2k74

R138

PIR13801

PIR13802

PIR13802

PIR13801

COC170

C170

PIC17001

2n2

PIC17001

AGND

PIR11402

PIR11402

COC112

C112

220p PIU100052

COC113

C113

220p

COR115

R115

43.2

AGND

AGND

AGND

AGND

PIC17002

PIC17002

PIC13401

PIC13401

PIC13501

PIC13501

PIC13701

PIC13701

PIC13901

PIC13901

PIC14201

PIC14201

PIC14401

PIC14401

PIC14801

PIC14801

PIC14901

PIC14901

Vout PID10001

PID10101

AGND

AGND

AGND

AGND

PID10201

PID10301

PID10001

PID10101

PID10201

PID10301

PID10002

PID10002

PID10102

PID10202

PID10302

PID10102

PID10202

PID10302

AGND AGND AGND AGND

COD100

D100

BZX384-C5V6

COD101

D101

BZX384-C5V6

COD102

D102

BZX384-C5V6

COD103

D103

BZX384-C5V6

COC114

C114

220p J107

RFIN8

PIJ10702

PIJ10702

PIJ10701

PIJ10701

COC107

C107

PIC10701

PIC10701

PIC10702

PIC10702

NP

PIC11502

PIC11502

COC123

C123

PIC11501

PIC11501

PIC12301

PIC12301

PIC12302

PIC12302

NP

COR109

R109

PIR10901

PIR10901

PIR10902

PIR10902

86.6

PIR11702

PIR11702

COC115

C115

220p

COR117

R117

43.2

PIR11701

PIR11701

COC153

C153

PIC15301

PIC15302

10n

PIC15301

PIC15302

COR130

10k

R130

PIR13001

PIR13002

PIR13001

PIR13002

COC163

C163

PIC16301

PIC16302

10n

PIC16302

PIC16301

COR134

10k

R134

PIR13401

PIR13402

PIR13402

PIR13401

COC164

C164

PIC16401

PIC16402

10n

PIC16402

PIC16401

COR136

10k

R136

PIR13601

PIR13602

PIR13602

PIR13601

COC166

C166

PIC16601

PIC16602

10n

PIC16602

PIC16601

COR139

10k

R139

PIR13901

PIR13901

PIR13902

PIR13902

PIR14402

PIR14402

PIR14401

PIR14401

COQ100A

Q100A

BC847BV

PIQ10006

PIQ10006

PIQ10002

PIQ10002

PIQ10001

PIQ10001

PIR14802

PIR14802

COR144

R144

150

COR148

R148

56.2

PIR14801

PIR14801

AGND

PIR14502

PIR14502

PIR14501

PIR14501

COQ100B

Q100B

BC847BV

PIQ10003

PIQ10003

PIQ10005

PIQ10005

PIQ10004

PIQ10004

PIR14902

PIR14902

COR145

R145

150

COR149

R149

56.2

PIR14901

PIR14901

AGND

PIR14602

PIR14602

PIR14601

PIR14601

COQ101A

Q101A

BC847BV

PIQ10106

PIQ10106

PIQ10102

PIQ10102

PIQ10101

PIQ10101

PIR15002

PIR15002

COR146

R146

150

COR150

R150

56.2

PIR15001

PIR15001

AGND

COR100

R100

PIR10001

PIR10002

PIR10002

PIR10001

43.2

COR119

R119

PIR11901

PIR11902

PIR11902

PIR11901

43.2

COR124

R124

PIR12401

PIR12402

PIR12402

PIR12401

43.2

COR129

R129

PIR12901

PIR12902

PIR12902

PIR12901

43.2

PIR14702

PIR14702

PIR14701

PIR14701

COQ101B

Q101B

BC847BV

PIQ10103

PIQ10103

PIQ10105

PIQ10105

PIQ10104

PIQ10104

PIR15102

PIR15102

COR147

R147

150

COR151

R151

56.2

PIR15101

PIR15101

AGND

PIR10102

PIR10102

COR101

R101

86.6

PIR10101

PIR10101

AGND

PIR12102

PIR12102

COR121

R121

86.6

PIR12101

PIR12101

AGND

PIR12502

PIR12502

COR125

R125

86.6

PIR12501

PIR12501

AGND

PIR13102

PIR13102

COR131

R131

86.6

PIR13101

PIR13101

AGND

PIC12502

PIC12502

COC124

C124

PIC12401

PIC12402

PIC12401

PIC12402

COC125

220p

C125

PIC12501

PIC12501

NP

AGND

C126

COC126

PIC12601

PIC12601

NP

AGND

COC129

C129

PIC13202

PIC12901

PIC12902

PIC12901

PIC12902

PIC13202

COC132

220p

C132

PIC13201

PIC13201

NP

AGND

C133

COC133

PIC13301

PIC13301

NP

AGND

COC143

C143

PIC14502

PIC14301

PIC14302

PIC14301

PIC14502

PIC14302

COC145

220p

C145

PIC14501

NP

PIC14501

AGND

C146

COC146

PIC14601

NP

PIC14601

AGND

COC155

C155

PIC15602

PIC15501

PIC15502

PIC15501

PIC15602

PIC15502

COC156

220p

C156

PIC15601

NP

PIC15601

AGND

PIC15702

PIC15702

PIC14602

PIC14602

PIC13302

PIC13302

PIC12602

PIC12602

COC157

C157

PIC15701

NP

PIC15701

AGND

PIL10002

PIL10002

COL100

L100

220nH

PIL10001

PIL10001

PIC12702

PIC12702

COC127

C127

PIC12701

PIC12701

NP

AGND

PIL10102

PIL10102

COL101

L101

220nH

PIL10101

PIL10101

PIC13802

PIC13802

COC138

C138

PIC13801

NP

PIC13801

AGND

PIL10202

PIL10202

COL102

L102

220nH

PIL10201

PIL10201

PIC15202

PIC15202

COC152

C152

PIC15201

NP

PIC15201

AGND

PIL10302

PIL10302

COL103

L103

220nH

PIL10301

PIL10301

PIC16502

PIC16502

COC165

C165

PIC16501

NP

PIC16501

AGND

PIJ10801

J108

COJ108

RFOUT4

PIJ10801

PIJ10802

PIJ10802

AGND

POFSP0D

FSP\_D

POFSP0D

COJ110

J110

PIJ11001

RFOUT3

PIJ11001

PIJ11002

PIJ11002

AGND

POFSP0C

FSP\_C

POFSP0C

COJ112

J112

PIJ11201

RFOUT2

PIJ11201

PIJ11202

PIJ11202

AGND

POFSP0B

FSP\_B

POFSP0B

COJ115

J115

PIJ11501

RFOUT1

PIJ11501

PIJ11502

PIJ11502

AGND

POFSP0A

POFSP0A

FSP\_A

<!-- image -->