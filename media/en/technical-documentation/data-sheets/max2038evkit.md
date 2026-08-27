<!-- lastmod 2022-08-03 -->
## General Description

The MAX2038 evaluation kit (EV kit) simplifies the evaluation  of  the  MAX2038 8-channel variable-gain amplifier (VGA) and programmable octal mixer array. It is fully assembled and tested at the factory. Standard SMB connectors are included on the EV kit's input and output ports to allow quick and easy evaluation on the test bench. The MAX2038 supports 12-bit ADC performance.

This document provides a list of test equipment required to evaluate the device, a straight-forward test procedure to verify functionality, a description of the EV kit circuit, the circuit schematic, a component list for the kit, and artwork for each layer of the PCB.

## Component List

| DESIGNATION                                                                                                                                                                      |   QTY | DESCRIPTION                                                         |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|---------------------------------------------------------------------|
| AUX_DRV_N, AUX_DRV_P, CW_IN1N- CW_IN8N, CW_IN1P- CW_IN8P, CW_IOUTN, CW_IOUTP, CW_QOUTN, CW_QOUTP, LO1-LO8, LO_LVDSN, LO_LVDSP, SIN_IN, TEST_MODE_LO, VGACNTL, VG_OUT1P- VG_OUT8P |    43 | PCB vertical-mount SMBs Digi-Key J467-ND                            |
| C1-C4, C7-C25, C55, C57, C77                                                                                                                                                     |     0 | Not installed, ceramic capacitors (0603)                            |
| C6, C26, C28, C31, C37-C45, C50-C54, C60, C61, C66, C70-C75, C78, C80-C103, C107                                                                                                 |    53 | 100nF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K |
| C30                                                                                                                                                                              |     1 | 100pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H101J   |
| C32-C35                                                                                                                                                                          |     4 | 1500pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H152J |

<!-- image -->

## MAX2038 Evaluation Kit

Features

- ♦ 8-Channel Configuration
- ♦ High Integration for Ultrasound Imaging Applications
- ♦ Pin-for-Pin Compatibility with the MAX2037
- ♦ VGA Features

Maximum Gain, Gain Range, and OutputReferred Noise Optimized for Interfacing with 12-Bit ADCs:

Maximum Gain of 29.5dB Total Gain Range of 42dB 22nV/ √ Hz Ultra-Low Output-Referred Noise at 5MHz

- ♦ ±0.25dB Absolute Gain Error
- ♦ 120mW Consumption per Channel
- ♦ Switchable Output VGA Clamp Eliminating ADC Overdrive
- ♦ Fully Differential VGA Outputs for Direct ADC Drive
- ♦ Variable Gain Range Achieves 42dB Dynamic Range
- ♦ -70dBc HD2 at VOUT = 1.5VP-P and fIN = 5MHz
- ♦ Two-Tone Ultrasound-Specific IMD3 of -52dBc at VOUT = 1.5VP-P and fIN = 5MHz
- ♦ CWD Mixer Features

Low Mixer Thermal and Jitter Noise: -155dBc/Hz at 1kHz Offset from 1.25MHz Carrier Serial-Programmable LO Phase Generator for 4, 8, 16 LO Quadrature Phase Resolution Optional Individual Channel 4 x fLO LO Input Drive Capability 269mW Power Consumption per Channel (Normal-Power Mode) and 226mW Power Consumption per Channel (Low-Power Mode)

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2038EVKIT+ | EV Kit |

## MAX2038 Evaluation Kit

| DESIGNATION           |   QTY | DESCRIPTION                                                               |
|-----------------------|-------|---------------------------------------------------------------------------|
| C46, C47, C48         |     3 | 4.7µF +80%/-20%, 10V Y5V ceramic capacitors (0805) Murata GRM21BF51A475Z  |
| C56                   |     1 | 120pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H121J         |
| C58                   |     1 | 39pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H390J          |
| C64                   |     1 | 47pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H470J          |
| C65                   |     1 | 18pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H180J          |
| C76, C105, C106, C109 |     4 | 470nF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E474K       |
| C79                   |     1 | 33pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H330J          |
| C104                  |     1 | 150pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H151J         |
| C108                  |     1 | 560pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H561J         |
| C200-C203             |     4 | 10µF ± 10%, 16V tantalum capacitors (C case) AVX TAJC106K016R             |
| DUT1                  |     1 | Octal VGA/mixer (100 TQFP-EP*) Maxim MAX2038CCQ+                          |
| FB1                   |     1 | Ferrite bead, SMD Digi-Key 240-2411-1-ND                                  |
| FB2, FB3              |     2 | Ferrite beads, SMD Digi-Key 240-2436-1-ND                                 |
| J1, J11, J15          |     3 | Large test points for 0.062in PCB (red) Mouser 151-107-RC or equivalent   |
| J2, J3-J8, J10, J14   |     9 | Large test points for 0.062in PCB (black) Mouser 151-103 RC or equivalent |
| J9, J12, J13          |     3 | Large test points for 0.062in PCB (white) Mouser 151-101 RC or equivalent |

*EP = Exposed pad.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component List (continued)

| DESIGNATION                                                                                                                                |   QTY | DESCRIPTION                                                                       |
|--------------------------------------------------------------------------------------------------------------------------------------------|-------|-----------------------------------------------------------------------------------|
| J16, J17                                                                                                                                   |     2 | 10 x 2 right-angle female headers (0.100in spacing), tin plated Digi-Key S5524-ND |
| J18                                                                                                                                        |     1 | 3 x 2 dual-row male header (0.100in spacing) Digi-Key WM8121-ND                   |
| K1-K8                                                                                                                                      |     8 | 1:1 transformers (50:50) Coilcraft TTWB2010                                       |
| K9-K16                                                                                                                                     |     0 | Not installed, transformers                                                       |
| L1-L16                                                                                                                                     |    16 | 12µH ±10% ferrite-core magnetic shielded inductors (0603) TDK MLF1608E120KT       |
| L17                                                                                                                                        |     1 | 39µH ±5% wire-wound ferrite inductor (1812) Coilcraft 1812LS-393XJBC              |
| L18                                                                                                                                        |     1 | 33µH ±5% wire-wound ferrite inductor (1812) Coilcraft 1812LS-333XJBC              |
| L19, L20                                                                                                                                   |     2 | 82µH ±5% wire-wound ferrite inductors (1812) Coilcraft 1812LS-823XJBC             |
| R3, R4, R11, R12, R13, R19, R31, R32, R35, R42, R53, R54, R61, R62, R84, R85                                                               |    16 | 28 Ω ±1% resistors (0603) Any                                                     |
| R5, R6, R7, R10, R16, R21, R22, R29, R30, R39, R43, R44, R47, R48, R49, R51, R52, R59, R60, R65, R66, R83, R91, R92, R164-R171, R174, R176 |     0 | Not installed, resistors (0603)                                                   |
| R8, R9, R14, R15, R20, R23-R26, R40, R41, R45, R46, R50, R57, R58                                                                          |    16 | 475 Ω ±1% resistors (0603) Any                                                    |
| R38                                                                                                                                        |     1 | 100 Ω ±1% resistor (0603) Any                                                     |

| DESIGNATION                                                                                                  |   QTY | DESCRIPTION                    |
|--------------------------------------------------------------------------------------------------------------|-------|--------------------------------|
| R67-R82, R94, R95, R99-R102, R104, R105, R114-R129, R143-R146, R150-R163, R172, R173, R175, R177, R186, R187 |    64 | 0 Ω resistors (0603) Any       |
| R87                                                                                                          |     1 | 7.5k Ω ±1% resistor (0603) Any |
| R88, R89                                                                                                     |     2 | 10k Ω ±5% resistors (0603) Any |
| R93, R130                                                                                                    |     2 | 3k Ω ±5% resistors (0603) Any  |
| R103, R112                                                                                                   |     2 | 2k Ω ±5% resistors (0603) Any  |
| R106-R110, R147, R149                                                                                        |     7 | 200 Ω ±1% resistors (0603) Any |
| R111                                                                                                         |     1 | 124 Ω ±1% resistor (0603) Any  |
| R113                                                                                                         |     1 | 887 Ω ±1% resistor (0603) Any  |

## MAX2038 Evaluation Kit

## Component List (continued)

| DESIGNATION                  |   QTY | DESCRIPTION                                                 |
|------------------------------|-------|-------------------------------------------------------------|
| R131-R142                    |    12 | 360 Ω ±0.1% metal-film resistors (0805) Digi-Key P360ZCT-ND |
| R178                         |     1 | 20k Ω ±5% resistor (0603) Any                               |
| R179, R180, R181, R184, R185 |     5 | 5.11k Ω ±1% resistors (0603) Any                            |
| R182                         |     1 | 1.5k Ω ±1% resistor (0603) Any                              |
| R183                         |     1 | 1k Ω ±1% resistor (0603) Any                                |
| S1-S9                        |     9 | SPDT slide switches Digi-Key EG1903-ND                      |
| T1-T21, T30- T33, T37-T60    |    49 | Test points Digi-Key 5001K-ND                               |
| U1, U2                       |     2 | Dual op amps (10 µMAX ® ) Maxim MAX4226EUB+                 |
| U3                           |     1 | Dual op amp (8 µMAX) Maxim MAX4477AUA+                      |
| VG_OUT1N- VG_OUT8N           |     0 | Not installed, connectors                                   |
| -                            |     1 | PCB: MAX2038 EVALUATION KIT+                                |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Digi-Key Corp.                         | 800-344-4539 | www.digikey.com             |
| Mouser Electronics                     | 800-346-6873 | www.mouser.com              |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX2038 when contacting these component suppliers.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2038 Evaluation Kit

## Quick Start

The MAX2038 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists  the  recommended test equipment to verify the operations of the MAX2038. It is intended as a guide only, and substitutions may be possible.

- DC power supplies capable of delivering +5V, -5V, and +12V, at 500mA, 100mA, and 100mA, respectively
- PC running Windows ® XP ® or later
- 50MHz pulse generator (e.g., HP 8112A)
- Two digital multimeters (DMMs) to measure output voltage
- Three ammeters
- 4-channel, 500MHz oscilloscope (e.g., TEK TDS3054B)

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the MAX2038 EV kit. As a general  precaution to prevent damaging the outputs, do not turn on DC power or signal generators until all connections are completed.

- 1) Set the first power supply to +12V and current limit to  100mA. Connect to the EV kit with output disabled. Connect an ammeter in series with the power supply to monitor the supply current if desired.
- 2) Set the second power supply to +5V and current limit to 500mA. Disable the output voltage and connect to VREF and VCC on the EV kit. Connect an ammeter in series with the power supply to monitor the supply current if desired.
- 3) Set the third power supply to -5V and current limit to 100mA. Connect to the EV kit with output disabled. Connect an ammeter in series with the power supply to monitor the supply current if desired.
- 4) Follow Figures 7 and 8 connections to test the continuous wave Doppler (CWD) beamformer. Follow Figure 9 connections to test the VGA portion of the device.
- 6) To test the CW portion of the device, follow the settings in Table 1. Set TEST\_MODE = 0. Program the registers using a PC with a Maxim CMAXQUSB interface board. The test mode is for Maxim engineering use only.
- 7) Follow Figures 1 and 2 to program the registers. Voltages measured at I and Q are the phasor representations of the modes.

## Detailed Description of Hardware

The variable-gain amplifier (VGA) section of the MAX2038 has a low-noise input section, VGA section, and output driver function. A total of 8 channels of complete variable-gain functionality are provided in a single chip. The MAX2038 EV kit allows the device to be driven either in a broadside manner, with all channels driven simultaneously from a single source, or with individual drive to each channel. The gain-control interface allows a simple 0 to 2V input signal to control the gain of the device for all 8 channels. The variable-gain outputs are provided on eight sets of differential output coax connectors, for connection to ADCs or measurement equipment.

Provisions are made to adjust the various ancillary functions of the device, such as programmable clipping, etc.

The CW section of the MAX2038 has an input quadrature  mixer  section  and  a  baseband signal-combining section. The input is common with the VGA input, coupled into the CW section through a noise-limiting lowpass filter. The output from the summed 8 channels is a quadrature baseband differential current-source output. This current output is terminated by fixed resistors to produce a voltage output for ease of measurement.

The CW beamforming function can either be implemented with on-chip low noise logic, or with externally supplied individual clocks for each channel. When the on-chip logic is used, a simple LVDS clock must be supplied, and an SPI™ port is then used to individually program each channel with up to 16 steps of phase resolution.

- 5) For mixer testing, skip to the next step. For VGA testing, connect a DC supply to VGACNTL for gain control. Apply input signal to SIN\_IN on the EV kit. Use the oscilloscope to measure the differential output voltage.

Windows and Windows XP are registered trademarks of Microsoft Corp. SPI is a trademark of Motorola, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Ultrasound Front-End CWD Beamformer

Modes of Operation

There are four separate modes of operating the CWD beamformer:

Mode 1: The user provides an input frequency of 16 x f LO.  Since the CWD LO frequency range is 1MHz to 7.5MHz, the input frequency provided by the user should be 16MHz to 120MHz. This high clock frequency requires a differential LVDS input. The 16 x f LO input is then divided by 16 to produce 16 phases. These 16 phases are generated for each of the 8 channels and programmed for the selected phase by a serial shift register. Each channel has a corresponding 5-bit shift register (4 bits for phase programming and 1 bit for channel enable), which is used to program the output phase of the divide-by-16 circuit. The first 4 bits of the shift register are for programming the 16 phases, and the 5th bit allows the user to turn on/off each channel individually through the serial bus.

## MAX2038 Evaluation Kit

The user will load 5 bits per channel using the serial shift  register,  but  the  phase-programming MSB is a dummy bit (or don't care). The 5th bit in the shift register allows the user to turn on/off each channel individually through the serial bus.

Mode 2: The user provides an input frequency of 8 x f LO.  Since the CWD LO frequency range is 1MHz to 7.5MHz, the input frequency provided by the user should be 8MHz to 60MHz. This high clock frequency requires a differential LVDS input. The 8 x fLO input is then divided by 8 to produce 8 phases. These 8 phases are generated for each of the 8 channels and programmed for the selected phase by a serial shift register. The serial shift register is common to Modes 1, 2, and 3. Each channel has a corresponding 5-bit shift register (4 bits for phase programming and 1 bit for  channel enable), which is used to program the output phase. Because we are generating 8 phases, only 3 of the 4-phase programming bits are required.

Mode 3: The user provides an input frequency of 4 x f LO.  Since the CWD LO frequency range is 1MHz to 7.5MHz, the input frequency provided by the user should be 4MHz to 30MHz. This clock frequency can utilize  3V  CMOS inputs. In this mode the user provides the appropriate phases and there is a separate 4LO input for each channel. The 4 x fLO inputs are then divided by 4 to produce 4 phases. These 4 phases are generated for each of the 8 channels and programmed for the selected phase by a serial shift register. The serial shift register is common to Modes 1, 2, and 3. Each channel has a corresponding 5-bit shift register (4 bits for phase programming and 1 bit for  channel enable), which is used to program the output phase. Because we are generating 4 phases, only 2 of the 4-phase programming bits are required. The user will load 5 bits per channel using the serial shift  register,  but  the  two  phase-programming MSBs are dummy bits (or don't cares), and the 5th bit in the shift register allows the user to turn on/off each channel individually through the serial bus.

Mode 4: The user provides an input frequency of 4 x f LO.  Since  the  CWD LO frequency range is 1MHz to 7.5MHz, the input frequency provided by the user should be 4MHz to 30MHz. This clock frequency must utilize 3V CMOS inputs. In this mode the user provides the appropriate phases, and there is a separate 4LO input for each channel. The 4LO input is used to generate accurate (duty-cycle independent) quadrature. The serial shift register is not used in this mode.

Table 1. Summary of CWD Beamforming Methods

| CONTROL BITS   | CONTROL BITS   |      |                    |                 |                          |   NO. OF CLOCK INPUTS PER CHIP | PROGRAM BY SERIAL SHIFT REGISTER (SSR)   | NO. OF USEFUL BITS IN   | NO. OF                    |
|----------------|----------------|------|--------------------|-----------------|--------------------------|--------------------------------|------------------------------------------|-------------------------|---------------------------|
| CW_M1          | CW_M2          | MODE | LO INPUT FREQUENCY | CLOCK INTERFACE | PHASE RESOLUTION         |                                |                                          | SSR/CH                  | DON'T CARE BITS IN SSR/CH |
| 0              | 0              | 1    | 16 x               | LVDS            | 16 phases                |                              1 | Yes                                      | 4                       | 0                         |
| 0              | 1              | 2    | 8 x                | LVDS            | 8 phases                 |                              1 | Yes                                      | 3                       | 1 MSB                     |
| 1              | 0              | 3    | 4 x                | 3V CMOS         | 4 phases                 |                              8 | Yes                                      | 2                       | 2 MSBs                    |
| 1              | 1              | 4    | 4 x                | 3V CMOS         | User provides quadrature |                              8 | No                                       | N/A                     | N/A                       |

N/A = Not applicable.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2038 Evaluation Kit

Figure 1. Phasor Representation of the Different Modes

<!-- image -->

The following is a programmable LO implementation of the CWD beamformer portion of the VGA/CWD beamformer IC. This implementation requires a high-frequency mixer clock to generate up to 16 phases. The four modes previously described are enabled through 2 bits (CW\_M1, CW\_M2).

## Beamformer Programming Coefficients

Tables 2-5 illustrate the bit patterns that must be programmed into the MAX2038 device to generate the desired phase angle for each individual channel. These bit patterns are programmed into each channel through the serial data port, as described in the

## Programming the CWD Beamformer section.

The shutdown bit is programmable for each individual channel through the same serial-data programming. The serial-port programming is performed MSB first.

These modes of operation require external LO clock sources, as described in the Modes of Operation section. The mode selection is accomplished by the setting of the 2 bits, CW\_M1 and CW\_M2.

Note: SD is a soft channel enable and can be overridden by the chip's PD enable. The channel's mixer and LO buffer are shut down when SD shutdown is used on a specific channel.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 2. Mode 1 Logic Table (SD = 0: Channel On/SD = 1: Channel Off)

Table 3. Mode 2 Logic Table (SD = 0: Channel On/SD = 1: Channel Off)

| MODE 1 (CW_M1 = 0, CW_M2 = 0)   | MODE 1 (CW_M1 = 0, CW_M2 = 0)   | MODE 1 (CW_M1 = 0, CW_M2 = 0)   | MODE 1 (CW_M1 = 0, CW_M2 = 0)   | MODE 1 (CW_M1 = 0, CW_M2 = 0)   | SHUTDOWN   |
|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|------------|
| PHASE (DEGREES)                 | D                               | C                               | B                               | A                               | SD         |
| 0                               | 0                               | 0                               | 0                               | 0                               | 0/1        |
| 22.5                            | 0                               | 0                               | 0                               | 1                               | 0/1        |
| 45                              | 0                               | 0                               | 1                               | 0                               | 0/1        |
| 67.5                            | 0                               | 0                               | 1                               | 1                               | 0/1        |
| 90                              | 0                               | 1                               | 0                               | 0                               | 0/1        |
| 112.5                           | 0                               | 1                               | 0                               | 1                               | 0/1        |
| 135                             | 0                               | 1                               | 1                               | 0                               | 0/1        |
| 157.5                           | 0                               | 1                               | 1                               | 1                               | 0/1        |
| 180                             | 1                               | 0                               | 0                               | 0                               | 0/1        |
| 202.5                           | 1                               | 0                               | 0                               | 1                               | 0/1        |
| 225                             | 1                               | 0                               | 1                               | 0                               | 0/1        |
| 247.5                           | 1                               | 0                               | 1                               | 1                               | 0/1        |
| 270                             | 1                               | 1                               | 0                               | 0                               | 0/1        |
| 292.5                           | 1                               | 1                               | 0                               | 1                               | 0/1        |
| 315                             | 1                               | 1                               | 1                               | 0                               | 0/1        |
| 337.5                           | 1                               | 1                               | 1                               | 1                               | 0/1        |

| MODE 2 (CW_M1 = 0, CW_M2 = 1)   | MODE 2 (CW_M1 = 0, CW_M2 = 1)   | MODE 2 (CW_M1 = 0, CW_M2 = 1)   | MODE 2 (CW_M1 = 0, CW_M2 = 1)   | MODE 2 (CW_M1 = 0, CW_M2 = 1)   | SHUTDOWN   |
|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|------------|
| PHASE (DEGREES)                 | D                               | C                               | B                               | A                               | SD         |
| 0                               | X                               | 0                               | 0                               | 0                               | 0/1        |
| 45                              | X                               | 0                               | 0                               | 1                               | 0/1        |
| 90                              | X                               | 0                               | 1                               | 0                               | 0/1        |
| 135                             | X                               | 0                               | 1                               | 1                               | 0/1        |
| 180                             | X                               | 1                               | 0                               | 0                               | 0/1        |
| 225                             | X                               | 1                               | 0                               | 1                               | 0/1        |
| 270                             | X                               | 1                               | 1                               | 0                               | 0/1        |
| 315                             | X                               | 1                               | 1                               | 1                               | 0/1        |

X = Don't care.

## MAX2038 Evaluation Kit

Table 4. Mode 3 Logic Table (SD = 0: Channel On/SD = 1: Channel Off)

| MODE 3 (CW_M1 = 1, CW_M2 = 0)   | MODE 3 (CW_M1 = 1, CW_M2 = 0)   | MODE 3 (CW_M1 = 1, CW_M2 = 0)   | MODE 3 (CW_M1 = 1, CW_M2 = 0)   | MODE 3 (CW_M1 = 1, CW_M2 = 0)   | SHUTDOWN   |
|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|------------|
| PHASE (DEGREES)                 | D                               | C                               | B                               | A                               | SD         |
| 0                               | X                               | X                               | 0                               | 0                               | 0/1        |
| 90                              | X                               | X                               | 0                               | 1                               | 0/1        |
| 180                             | X                               | X                               | 1                               | 0                               | 0/1        |
| 270                             | X                               | X                               | 1                               | 1                               | 0/1        |

X = Don't care.

Table 5. Mode 4 Logic Table (the phase of all channels are set to 0 to enable the user to control the phase externally)

| MODE 4 (CW_M1 = 1, CW_M2 = 1)                                                | MODE 4 (CW_M1 = 1, CW_M2 = 1)   | MODE 4 (CW_M1 = 1, CW_M2 = 1)   | MODE 4 (CW_M1 = 1, CW_M2 = 1)   | MODE 4 (CW_M1 = 1, CW_M2 = 1)   | SHUTDOWN   |
|------------------------------------------------------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|------------|
| PHASE (DEGREES)                                                              | D                               | C                               | B                               | A                               | SD         |
| Serial bus only used in Mode 4 to set SD bits on channels when M4_ENABLE = 0 | N/A                             | N/A                             | N/A                             | N/A                             | 0/1        |
| Serial bus not used for phase or SD bits if M4_ENABLE =1 (all channels on)   | N/A                             | N/A                             | N/A                             | N/A                             | 0          |

N/A = Not applicable.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2038 Evaluation Kit

Figure 2 illustrates the serial programming of the 8 individual channels through the serial data port (Note that the serial data can be daisy chained from one part to another, allowing a single data line to be used to program multiple chips in the system).

Figure 3 illustrates the overall block diagram of the CWD beamformer section of the MAX2038. The 8-input RF signals are applied to programmable lowpass filters. These filters  remove aliased noise signals from the preceding stage. The RF signals are then mixed to baseband by 8 pairs of quadrature mixers. The quadrature LO signals

Figure 2. Data Flow of Serial Shift Register

<!-- image -->

Figure 3. Simplified Block Diagram of the CWD Portion of Chip

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

for each mixer are derived from low-noise logic circuits. These digital phase generators are programmed as desired by the user to accomplish the beamforming function at the system level.

Figure 4 shows the input circuitry in greater detail. The LNA RF outputs are applied to both the CW and VGA inputs in parallel. These inputs are selectively switched between these two functions by the CW\_VG parallel control bit.  When CW operation is selected, the VGA

## MAX2038 Evaluation Kit

function is disconnected from the RF inputs, and the VGA section is powered down. When the VGA operation is selected, the reciprocal action takes place. The lowpass filters are illustrated. The series inductors are external  components, while the shunt filter elements are  integrated  on  the  chip.  The  lowpass  filter  corner frequency is programmable by the user with the CW\_FILTER parallel control bit.

<!-- image -->

Figure 4. CW Input Detail

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2038 Evaluation Kit

## Programming the CWD Beamformer

The octal CWD beamformer is programmed using a serial shift register implementation. Data is shifted into the device on the DIN pin MSB first. The device is designed to be daisy chained with other devices to reduce the number of wires required for this programming function. DATA\_OUT is available for this daisychain function. The serial shift register clock is applied to the CLK pin. Each mixer can be programmed to one of  16  phases (max); therefore, 4 bits are required for each channel for programming. The master highfrequency mixer clock is applied to differential inputs LO\_LVDS+ and LO\_LVDS- (for Modes 1 and 2) and LOx (for Modes 3 and 4). A load-line input (LOAD) is provided to allow the user to load the phase counters with the programming values to generate the correct LO phases. The input signals for mixing are applied to input pins (CWIN1\_-CWIN8\_). The summed mixer I/Q baseband output are provided on pins CW\_IOUT\_ and CW\_QOUT\_.

The CW\_VG pin allows the user to power up the CWD beamformer circuitry when this mode is active or put it in  a  low-power mode when deselected. Pins CW\_M1 and CW\_M2 are used to select one of the four possible modes of operation (see Table 1). The LOAD pin is used for Mode 4 synchronization as well. The LO1-LO8 is for the 3V CMOS LO inputs for Modes 3 and 4.

The proposed integrated CWD beamformer is a programmable lambda-over-16, -8 or -4 resolution beamformer. This implementation requires that the user supply a high-frequency differential mixer clock to all CWD receive front-end ICs at 16, 8, or 4 times the CWD frequency (LVDS for Modes 1 and 2; 3V CMOS for Modes 3 and 4). The user programs the beamforming using a serial shift register interface, which can be daisy chained from device to device. Each channel requires 4 bits to program the internal I/Q phase divider/selector circuitry to output the correct I/Q mixer phase and 1 additional bit for individual channel enable. Programming of the beamformer occurs in the following sequence:

- 1) During normal CWD, the mixer clock (CW\_LVDS) is on  and  the  programming  signals  (DATA\_IN, CLOCK, LOAD) are off. (LOAD = high, CLOCK = low, and DATA\_IN = don't care, but fixed to a high or low)
- 2) The user shuts off the mixer clock (CW\_LVDS) to start the programming sequence.
- 3) The user shifts the phase information into the shift register  at  10MHz programming rate. Assuming a 64-channel CWD receiver, this will take approximately 30µs for 5 bits per channel.
- 4) After  the  shift  registers  are  programmed,  the  user pulls  the  load-line  low  and  then  high  to  load  the internal  counters into I/Q phase divider/selectors with the proper values. (Note: The mixer clock MUST be off when this occurs or there may be timing issues between the load-line timing and the mixer clock timing. This should not be a problem, as the user must always shut off the mixer clock during programming.)
- 5) The user turns on the mixer clock to start beamforming. The clock must turn on such that it starts at the beginning of a mixer clock cycle. A narrow glitch  on  the  mixer  clock  is  not  acceptable  and could cause metastability in the I/Q phase dividers.

As stated previously, the proposed beamformer is programmed using a serial shift register arrangement. This greatly simplifies the complexity of the program circuitry, reduces the number of IC pins necessary for programming, and reduces the PCB layout complexity. The data in  (DATA\_IN) and data out (DATA\_OUT) can be daisy chained from device to device and all front ends can run off  of  a  single  programming clock. The timing diagram shows the important timing parameters. The data clock (CLOCK) can run up to 10MHz. The specifications for a serial shift register interface are:

t DSU (minimum data setup time) = 30ns

t HLD (minimum data hold time) = 2ns

t DCLK (minimum data clock time) = 100ns

t DCLKPWH (minimum data clock pulse width high) = 30ns

t DCLKPWL (minimum data clock pulse width low) = 30ns

In  this  implementation,  a  load-line  (LOAD)  is  used  to load the phase information in the form of 5 bits per channel into the I/Q phase divider/selectors. This action loads a preset into a divider and thus selects the appropriate mixer phasing. The load-line is pulled high after  the  serial  shift  registers  have  been  programmed. The proposed key specifications for the load-line are:

t LD (minimum load-line) = 30ns

t LDMIXCLK (minimum load-line high to mixer clock on) = 30ns

t CLH (minimum data clock to load-line high) = 30ns

The programming inputs (CLOCK, DATA\_IN, and LOAD) are compatible with 3V CMOS. The logic-input specifications are:

Minimum logic-low = 0.8V

Minimum logic-high = 2V

Input capacitance = 3pF to 5pF

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

CWD will operate up to 7.5MHz. As a result, the mixer clock input needs to run up to about 120MHz (this is why LVDS is used in Modes 1 and 2). This input should be compatible with standard LVDS. It should also be designed for multidrop termination so multiple front-end ICs can be driven from a single driver. It is probably not practical for  a  single  driver  to  drive  all  front-end  ICs; careful LVDS clock distribution is suggested for final system implementations.

The  MAX2038  EV  kit  can  be  ordered  online  at www.maxim-ic.com . The CMAXQUSB command module uses a PC's USB port to allow programming through

## MAX2038 Evaluation Kit

an easy-to-use software package, also available from Maxim. The 3-wire setup menu in the software uses the 'SEND AND RECEIVE MSB first' default. The 3-wire interface is further set for CS idle high. Note that the CS output of this board is used to emulate the LOAD line signal shown in Figure 5. However, the CS signal in this case is the standard CS control with CS = 1 prior to DATA loading and then the CS = 0 during DATA loading,  and  then  CS  goes high again once the DATA is finally  loaded. This is different from the LOAD line response of Figure 5, but is functionally the same.

<!-- image -->

Figure 5. CWD Beamforming Timing Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2038 Evaluation Kit

## Using a Pulse Generator to Test the Phase Rotation Beamforming Function of the MAX2038

The phase rotator  beamforming function  of  the MAX2038 requires a phase synchronous RF input and LO input to the EV kit board. The TEST\_MODE output signal from the MAX2038 can be used for the RF input function. This signal will be frequency divided on-chip to  match the correct RF input frequency for the programmed mode of operation. It will be phase synchronous with the internally generated LO signals for each individual channel, always being at a phase of 0°.

The synchronous LO signal must be provided by the user. Figure 7 illustrates the use of a simple pulse generator to generate this LO signal. The pulse generator is

## Table 6. HP 8112A Pulse Generator Settings

Figure 6. Timing Diagram as EV Kit is Tested

|   MODE | PERIOD (ns)   | DELAY (ns)   | WIDTH (ns)   | LEE (ns)   | TRE (ns)   | HIL (V)   | LOL (ns)   | GATE   |
|--------|---------------|--------------|--------------|------------|------------|-----------|------------|--------|
|      1 | 30            | 65           | 15           | 5.5        | 5.5        | 0.8       | 0          | Rise   |
|      2 | 60            | 65           | 30           | 5.5        | 5.5        | 0.8       | 0          | Rise   |
|      3 | 200           | 200          | 100          | 6          | 6          | 1.5       | 0          | Rise   |
|      4 | -             | -            | -            | -          | -          | -         | -          | -      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

operated in a gated continuous mode of operation. It will always start in a consistent phase state when gated on by the LOAD line signal, which latches the serially programmed phase information into the MAX2038 beamformer.

The CS output from the CMAXQUSB command module is used to trigger the HP 8112A pulse generator. The CS output of CMAXQUSB is connected to the EXT\_INP of the HP 8112A and the gate is set to the rising edge. The CS rising edge that occurs once at the end of DATA loading is used to trigger the output of the pulse generator.  This  is  how  phase synchronization occurs. The proper settings for the pulse generator are shown in Table 6.

<!-- image -->

## MAX2038 Evaluation Kit

<!-- image -->

Figure 7. Test Setup for CWD LVDS (Modes 1 and 2) Testing

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2038 Evaluation Kit

Figure 8. Test Setup for CWD CMOS (Mode 3) Testing

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2038 Evaluation Kit

<!-- image -->

Figure 9. VGA Mode Test Setup

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2038 Evaluation Kit

Figure 10a. MAX2038 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2038 Evaluation Kit

Figure 10b. MAX2038 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2038 Evaluation Kit

<!-- image -->

Figure 10c. MAX2038 EV Kit Schematic (Sheet 3 of 3)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2038 Evaluation Kit

<!-- image -->

Figure 11. MAX2038 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2038 Evaluation Kit

Figure 12. MAX2038 EV Kit PCB Layout-Top Soldermask

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2038 Evaluation Kit

<!-- image -->

Figure 13. MAX2038 EV Kit PCB Layout-Top Layer (Metal)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2038 Evaluation Kit

Figure 14. MAX2038 EV Kit PCB Layout-Inner Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2038 Evaluation Kit

<!-- image -->

Figure 15. MAX2038 EV Kit PCB Layout-Inner Layer 3 (Routes)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2038 Evaluation Kit

Figure 16. MAX2038 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2038 Evaluation Kit

<!-- image -->

Figure 17. MAX2038 EV Kit PCB Layout-Bottom Soldermask

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2038 Evaluation Kit

Figure 18. MAX2038 EV Kit PCB Layout-Bottom Layer (Metal)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2038 Evaluation Kit

<!-- image -->

Figure 19. MAX2038 EV Kit PCB Layout-Drill and Mechanical

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2038 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                          | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------|-----------------|
|                 0 | 6/08            | Initial release                      | -               |
|                 1 | 9/09            | Corrected values in Features section | 1               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

28

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600