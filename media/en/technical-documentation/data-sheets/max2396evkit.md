<!-- lastmod 2022-08-02 -->
## General Description

The MAX2396 evaluation kit (EV kit) simplifies the evaluation  of  the  MAX2396 WCDMA direct-downconversion receive IC. It is fully assembled and tested at the factory. Standard 50 Ω SMA and BNC connectors are included on the EV kit to allow quick and easy evaluation on the test bench.

This document provides a list of equipment required to evaluate the device, a straightforward test procedure to verify functionality, a circuit schematic, a bill of materials (BOM), and artwork for each layer of the PC board.

## Component Suppliers

| SUPPLIER      | PHONE        | WEBSITE                   |
|---------------|--------------|---------------------------|
| Coilcraft     | 800-322-2645 | www.coilcraft.com         |
| Digi-Key      | 800-344-4539 | www.digikey.com           |
| Johnson       | 507-833-8822 | www.johnsoncomponents.com |
| Mini-Circuits | 718-934-4500 | www.minicircuits.com      |
| Murata        | 770-436-1300 | www.murata.com            |
| Taiyo Yuden   | 800-322-2496 | www.t-yuden.com           |

Note: When contacting these suppliers, please specify you are using the MAX2396.

SPI and QSPI are trademarks of Motorola, Inc. MICROWIRE is a trademark of National Semiconductor Corp.

| DESIGNATION                                                        |   QTY | DESCRIPTION                                    |
|--------------------------------------------------------------------|-------|------------------------------------------------|
| AGC, TCXO                                                          |     2 | 10k Ω variable resistors (potentiometer)       |
| BG, CSB, I+, I-, LOCK, Q+, Q-, TAGC, TUNE                          |     9 | Digi-Key 5000K-ND                              |
| C1, C7, C14, C16, C17, C24, C41, C50, C51, C55, C56, C57, C59, C60 |    14 | 100pF capacitors (0402) Murata GRP1555C1H101J  |
| C2, C32                                                            |     2 | 10nF capacitors (0402) Murata GRP155R71C103K   |
| C3, C22                                                            |     2 | 1000pF capacitors (0402) Murata GRP155R71H102K |
| C4, C5                                                             |     2 | 0 Ω resistors (0402)                           |
| C6, C27, C28, C33-C38, C40, C42, C44, C45, C48, C54, C58           |    16 | 100nF capacitors (0402) Murata GRP155R61A104K  |

<!-- image -->

## Features

- ♦ EV Kit Is Fully Assembled and Tested
- ♦ Fully Monolithic Direct-Conversion Receiver Includes: Fully Integrated On-Chip RF VCO Eliminates: External IF SAW + IF AGC + I/Q Demodulator
- ♦ Meets All 3GPP Receiver's Standard Requirements with at Least 3dB Margin on Eb/No
- ♦ Operates from a Single +2.7V to +3.3V Supply
- ♦ Over 90dB of Gain-Control Range
- ♦ Channel Selectivity Fully On-Chip, with Superior ACS (&gt;39dB)
- ♦ SPI™-/QSPI™-/MICROWIRE™-Compatible 3-Wire Serial Interface
- ♦ Receiver Current Consumption ≈ 31mA
- ♦ On-Chip DC Offset Cancellation
- ♦ Small 28-Pin QFN Leadless Package

## Ordering Information

| PART*        | TEMP RANGE         | IC PACKAGE   | APPLICATION   |
|--------------|--------------------|--------------|---------------|
| MAX2396EVKIT | -40 ° C to +85 ° C | 28 QFN       | IMT2000/UMTS  |

## Component List

| DESIGNATION                      |   QTY | DESCRIPTION                                                                   |
|----------------------------------|-------|-------------------------------------------------------------------------------|
| C10-C13, C15, C23, C29, C30, C31 |     9 | Not installed                                                                 |
| C26                              |     1 | 1µF capacitor (0603) Taiyo Yuden JMK107BJ105MA-B                              |
| C39, C43, C46, C47               |     4 | 10µF tantalum capacitors (2012) (R code/case 0805-compatible) AVX TAJR106K006 |
| C49                              |     1 | 47nF capacitor (0402) Murata GRP155R71A473K                                   |
| C52                              |     1 | 4.7nF capacitor (0402) Murata GRP155R71H472K                                  |
| C53                              |     1 | 39pF capacitor (0402) Murata GRP1555C1H390J                                   |
| C89                              |     1 | 0.1µF capacitor (0805) Murata GRM21BR71E104K                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX2396 Evaluation Kit

| DESIGNATION                                                                                  |   QTY | DESCRIPTION                                                     |
|----------------------------------------------------------------------------------------------|-------|-----------------------------------------------------------------|
| C90                                                                                          |     1 | 1.0µF capacitor (1206) Murata GRM31MR71C105MA01L                |
| C101                                                                                         |     1 | 0.01µF capacitor (0805) Murata GRM216R71H103K                   |
| FL1                                                                                          |     1 | 2140MHz saw filter (2140MHz) Murata SAFSD2G14FA0T00R00          |
| GND, GND2, GND3, JU37, JU38, VCC_EXT, VCC_IC                                                 |     7 | -                                                               |
| G_LNA, G_MXR, SHDNB                                                                          |     3 | Open                                                            |
| I, Q                                                                                         |     2 | BNC (50 Ω ) PC board receptacles (jacks) Amphenol 31-5239-52RFX |
| J9                                                                                           |     1 | -                                                               |
| JU20, JVCO, VCC_BB, VCC_CP, VCC_DIG, VCC_LNA, VCC_LOGIC, VCC_MXR, VCC_REF, VCC_TCXO, VCC_VCO |    11 | Open                                                            |
| L1                                                                                           |     1 | 3.3nH inductor (0402) Coilcraft 0402CS_3N3X                     |
| L2                                                                                           |     1 | Open inductor (0402) (not installed)                            |
| L4                                                                                           |     1 | 1.8nH inductor (0402) TOKO LL1005-FH1N8S                        |

## Component List (continued)

| DESIGNATION                              |   QTY | DESCRIPTION                                                             |
|------------------------------------------|-------|-------------------------------------------------------------------------|
| L5                                       |     1 | 1.3pF capacitor (0402) Murata GRP1555C1H1R3B                            |
| LD                                       |     1 | -                                                                       |
| LNA_IN, LNA_OUT, LO_TEST, MXR_IN, REF_IN |     5 | SMA end launch jack receptacles 0.031in Johnson Components 142-0701-881 |
| R13, R14                                 |     2 | 2.0pF capacitors (0402) Murata GPR1555C1H2R0B                           |
| R2, R10, R11, R16, R17                   |     5 | 0 Ω resistors (0402)                                                    |
| R7, R22                                  |     2 | Open resistors (0402) (not installed)                                   |
| R8                                       |     1 | 100 Ω resistor (0402)                                                   |
| R9, R18                                  |     2 | 10k Ω resistors (0402)                                                  |
| R12, R15                                 |     2 | 50 Ω resistors (0402)                                                   |
| R19, R25                                 |     2 | 1k Ω resistors (0402)                                                   |
| R23                                      |     1 | 330 Ω resistor (0402)                                                   |
| RBIAS                                    |     1 | 12k Ω ± 1% resistor (0402)                                              |
| U1                                       |     1 | MAX2396EGI WCDMA receiver                                               |
| U2                                       |     1 | Open broadband RF balun (not installed) TDK HHM1537                     |
| U3, U4                                   |     2 | MAX4444 low-distortion, differential- to-single-ended line drivers      |
| U5                                       |     1 | Frac-N sigma delta synthesizer MAX2150EGI                               |
| U9                                       |     1 | MAX8867EUK28 linear regulator                                           |
| Y1                                       |     1 | 15.36MHz volt control TCXO (19.2MHz) Kinseki VC-TCXO-208C3-15.36        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quick Start

The MAX2396 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists the recommended test equipment to verify the operation of the MAX2396 EV kit. It is intended as a guide only, and some substitutions are possible:

- DC supply capable of delivering 200mA continuous current at +5.0V
- DC supply capable of delivering 200mA continuous current at -5.0V
-  DC supply capable of delivering 50mA continuous current at +2.8V
- DMM, to measure IC supply current
-  HP 8648C or equivalent signal source capable of generating -30dBm up to 2.2GHz
-  HP 8561E or equivalent RF spectrum analyzer (baseband spectrum only)
- TDS3012 or equivalent digitizing oscilloscope
- Windows ® 95/98/2000 PC with an available parallel port

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit:

- 1) Install  the  MAX2396 control software on a PC. This software uses a 3rd-party DLL to allow communication through the parallel port: 'DriverLINX' by Scientific Software Tools (www.sstnet.com). The Maxim installer installs this DLL for you automatically.
- 2) Connect the interface board and cable from the PC parallel port to the EV kit header. Pin 1 on the ribbon cable is indicated with a stripe, and pin 1 on the header is nearest to the corner of the board. The interface board is just populated with logic buffers to protect the parallel port against accidental shorts, but be careful with these connections.
- 3) Calibrate the power meter, with the low-power head, at 2140MHz. A rough interpolation of the cal factor does not introduce noticeable error if reading the cal factor from a table.

<!-- image -->

## MAX2396 Evaluation Kit

- 4) Set the signal generator for a 2140.18MHz CW (unmodulated) output at -27dBm, and connect a 3dB pad to the DUT side of the SMA cable. Use the power meter to set the input power to the DUT at -30dBm. Use measured attenuators and/or the signal generator's internal step attenuators (-40dB) to reduce the signal to -90dBm.
- 5) Connect the RF source's SMA cable and attenuators to the EV kit's LNAIN SMA input.
- 6) Connect the BNC cable from either I or Q to the spectrum analyzer. Connect the other output into the oscilloscope-be sure to set the oscilloscope's inputs to 50 Ω , and not 1M Ω . Cable loss at 180kHz is negligible; as long as cables are about the same length, no calibration is required at the output to observe proper signal level, as well as proper I/Q gain-and-phase balance.
- 7) Set one of the DC supplies to 2.8V and set a current limit  of  100mA  (if  available).  Connect  this  supply through the ammeter to VCC\_IC, and readjust the supply, if necessary, to get 2.8V at the IC when powered up. This supply connection only powers the IC on the EV kit-read the ammeter to watch IC supply current for the receiver. Connect another line  directly  from  the  2.8V  supply  to  VCC\_EXT  to supply the external logic on the kit. Not having the voltage drop of the ammeter in line means the voltage is slightly higher than VCC\_IC, but this does not cause a problem.
- 8) Set the other supplies for ±5.0V with a current limit of about 100mA. Connect these supplies to the +5V, GND, and -5V on the opposite side of the kit. These are the bipolar supplies for the MAX4444 differential line drivers that buffer the I/Q outputs. Note that all GND test points are connected to the same ground plane-it is only necessary to use one of them.
- 9) Set the spectrum analyzer to span from DC (minimum sweep) to 2MHz. Set the reference level to +10dBm.
- 10) Set the oscilloscope for a sweep rate of about 1µs/div, DC-coupling, with an amplitude scale of about 100mV/div.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2396 Evaluation Kit

## Testing the WCDMA Receiver

The power-up default state of the MAX2396 receiver is for:

- LO midband (2140MHz)
- LNA high gain
- Mixer high gain, normal linearity
- Powered on (out of shutdown)
- 1) Verify that the IC itself is drawing about 31mA (from VCC\_IC). The two MAX4444 differential line drivers at the baseband outputs should draw about 80mA from each of their supplies.
- 2) Use the AGC adjust potentiometer on the board to set VAGC at +2.2V (maximum gain).
- 3) Spot-check the VCO tuning voltage (TUNE) to see that the synthesizer on the MAX2150 is locked. The voltage should be about midsupply with the RFLO running at its power-up default of 2140MHz. Disconnect any leads from this before continuing, as the noise pickup onto the tuning line directly frequency modulates the VCO, and degrades LO phase noise.
- 4) Observe the 180kHz tone on the spectrum analyzer. Adjust AGC to achieve a -3.5dBm output level.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 5) The on-board TCXO has a fine-tuning control-the other potentiometer on the EV kit allows for external temperature compensation of the TCXO to further decrease frequency error. Adjust the TCXO potentiometer if desired to bring the output tone exactly to 180kHz.
- 6) Observe the other output on the oscilloscope. At these input power levels, the SNR is typically much too low to see the output tone through the noise. If available, use the internal lowpass filter option (often 20MHz) and lots of averaging.
- 7) To make a gain/phase error measurement, connect both outputs to the scope. Increase the input power to  about  -50dBm, and back off the AGC until the outputs are swinging about 0.42VP-P. Again, use digital averaging to get both I and Q sinusoids visible on the scope. If automated measurements for phase and amplitude are not available, use the cursors to make the measurement. Calculate phase error  in  degrees,  and  gain  error  in  dB,  and  verify that the results are better than 2 degrees and 0.6dB, respectively.

<!-- image -->

## MAX2396 Evaluation Kit

Figure 1a. MAX2396 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2396 Evaluation Kit

Figure 1b. MAX2396 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2396 Evaluation Kit

Figure 1c. MAX2396 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2396 Evaluation Kit

## PC Board Artwork

Figure 2. MAX2396 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2396 Evaluation Kit

## PC Board Artwork (continued)

<!-- image -->

Figure 3. MAX2396 EV Kit Metal Layer 2-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2396 Evaluation Kit

Figure 4. MAX2396 EV Kit PC Board Layout Metal Layer 2-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## PC Board Artwork (continued)

<!-- image -->

## MAX2396 Evaluation Kit

## PC Board Artwork (continued)

<!-- image -->

Figure 5. MAX2396 EV Kit PC Board Layout-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2396 Evaluation Kit

## PC Board Artwork (continued)

Figure 6. MAX2396 EV Kit PC Board Layout-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2396 Evaluation Kit

## PC Board Artwork (continued)

Figure 7. MAX2396 EV Kit PC Board Layout-Top Solder Mask

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 13