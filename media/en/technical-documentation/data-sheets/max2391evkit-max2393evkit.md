<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

## General Description

The MAX2390-MAX2393/MAX2396/MAX2400 ('MAX2390 family') evaluation kits (EV kits) simplify the evaluation of these W-CDMA and TD-SCDMA receiver ICs. There are three different PC boards for the family: one for the MAX2391/MAX2392/MAX2393, one for the MAX2396, and one for the MAX2390/MAX2400. Each kit is fully assembled and tested at the factory. Standard 50 Ω SMA and BNC connectors, TCXOs and baseband buffers are included on the EV kits to allow quick and easy evaluation on the test bench.

For each of the six EV kits, this document provides a list of  equipment required to evaluate each device, a straightforward test procedure to verify functionality, a circuit schematic, a bill of materials (BOM), and artwork for each layer of the PC board.

## Ordering Information

| PART*                 | TEMP RANGE       | IC PACKAGE     |
|-----------------------|------------------|----------------|
| -40°C to +85°C        | 28 THIN QFN-EP** | MAX2390EVKIT   |
| -40°C to +85°C        | 28 QFN-EP**      | MAX2391EVKIT   |
| -40°C to +85°C        | 28 QFN-EP**      | MAX2392EVKIT   |
| -40°C to +85°C        | 28 QFN-EP**      | MAX2393EVKIT   |
| -40°C to +85°C        | 28 QFN-EP**      | MAX2396EVKIT   |
| MAX2400EVKIT -40°C to | 28 THIN          | +85°C QFN-EP** |

## Features

- ♦ Each EV Kit is Fully Assembled and Tested
- ♦ Fully Monolithic Direct-Conversion Receiver Include: PLL Synthesizer (All Except MAX2396/MAX2400) and VCO Eliminate: External IF SAW + IF AGC + I/Q Demodulator
- ♦ Meet All 3GPP Receiver's Standard Requirements with at Least 3dB Margin on Eb/No
- ♦ Operate from a Single +2.7V to +3.3V Supply
- ♦ Over 90dB of Gain-Control Range
- ♦ Channel Selectivity Fully On-Chip, with Superior ACS (&gt;40dB)
- ♦ SPI™-/QSPI™-/MICROWIRE™-Compatible 3-Wire Serial Interface
- ♦ Receiver Current Consumption ≈ 32mA
- ♦ On-Chip DC Offset Cancellation
- ♦ Small 28-Pin QFN Leadless Package

## Selector Guide

| PART    | APPLICATION          | CHIP RATE (Mcps)   | RF BAND (MHz)   | SYNTHESIZER   |
|---------|----------------------|--------------------|-----------------|---------------|
| MAX2390 | W-CDMA Band II (PCS) | 3.84               | 1930 to 1990    | On-Chip       |
| MAX2391 | IMT2000/UMTS         | 3.84               | 2110 to 2170    | On-Chip       |
| MAX2392 | TD-SCDMA             | 1.28               | 2010 to 2025    | On-Chip       |
| MAX2393 | W-TDD/TD-SCDMA       | 3.84 or 1.28       | 1900 to 1920    | On-Chip       |
| MAX2396 | IMT2000/UMTS         | 3.84               | 2110 to 2170    | External      |
| MAX2400 | W-CDMA Band II (PCS) | 3.84               | 1930 to 1990    | External      |

SPI and QSPI are trademarks of Motorola, Inc   MICROWIRE is a trademark of National Semiconductor Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

## Component List-MAX2391/MAX2392/MAX2393

| DESIGNATION                                   |   QTY | DESCRIPTION                                                                   |
|-----------------------------------------------|-------|-------------------------------------------------------------------------------|
| C1, C7, C14, C16, C17                         |     5 | 100pF capacitors (0402) Murata GRP1555C1H101J                                 |
| C2, C32                                       |     2 | 10nF capacitors (0402) Murata GRP155R71C103K                                  |
| C3, C18, C21, C22                             |     4 | 1000pF capacitors (0402) Murata GRP155R71H102K                                |
| C4, C5                                        |     2 | 0 Ω resistors (0402)                                                          |
| C6, C8, C27, C28, C33-C38, C40, C44, C45, C48 |    14 | 100nF capacitors (0402) Murata GRP155R61A104K                                 |
| C9, C10-C13, C15, C20, C23, C31               |     9 | Open capacitors (0402) (not installed)                                        |
| C19                                           |     1 | 220pF capacitor (0402) Murata GRP1555C1H221J                                  |
| C25                                           |     1 | 1.0pF capacitor (0402) Murata GRP1555C1H1R0B                                  |
| C39, C43, C46, C47                            |     4 | 10µF tantalum capacitors (2012) (R-code/case 0805-compatible) AVX TAJR106K006 |
| C89                                           |     1 | 0.1µF capacitor (0805) Murata GRM21BR71E104K                                  |
| C90                                           |     1 | 1.0µF capacitor (1206) Murata GRM31MR71C105K                                  |
| C91                                           |     1 | 1.3pF capacitor (0402) Murata GRP1555C1H1R3B                                  |
| C101                                          |     1 | 10µF capacitor (0805) Murata GRM216R71H103K                                   |
| L1                                            |     1 | 3.3nH inductor (0402)                                                         |
| L2                                            |     1 | Open inductor (0402)                                                          |
| L4                                            |     1 | 1.8nH inductor (0402)                                                         |
| R1                                            |     1 | 100k Ω resistor (0402)                                                        |
| R2, R3, R4, R10, R11, R16, R17                |     7 | 0 Ω resistors (0402)                                                          |
| R5                                            |     1 | 27.4k Ω resistor (0402)                                                       |
| R6                                            |     1 | 6.8k Ω resistor (0402)                                                        |
| R7                                            |     1 | Open resistor (0402)                                                          |
| R8                                            |     1 | 100 Ω resistor (0402)                                                         |
| R9, R18                                       |     2 | 10k Ω resistors (0402)                                                        |
| R12, R15                                      |     2 | 49.9 Ω resistors (0402)                                                       |
| R13, R14                                      |     2 | 2.0pF capacitors (0402) Murata GRP1555C1H2R0B                                 |

| DESIGNATION                                                                                  |   QTY | DESCRIPTION                                                             |
|----------------------------------------------------------------------------------------------|-------|-------------------------------------------------------------------------|
| R19                                                                                          |     1 | 1k Ω resistor (0402)                                                    |
| RBIAS                                                                                        |     1 | 12k Ω ± 1% resistor (0402)                                              |
| AGC, TCXO                                                                                    |     2 | 10k Ω variable resistors (potentiometers)                               |
| BG, CSB, I+, I-, LOCK, Q+, Q-, TAGC, TUNE                                                    |     9 | Digi-Key 5000K-ND                                                       |
| FL1                                                                                          |     1 | 2140MHz saw filter (2140MHz) Murata SAFSD2G14FA0T00R00                  |
| GND, GND2, GND3, JU37, JU38, VCC_EXT, VCC_IC                                                 |     7 | -                                                                       |
| G_LNA, G_MXR, SHDNB                                                                          |     3 | Open                                                                    |
| I, Q                                                                                         |     2 | BNC (50 Ω ) PC board receptacles (jacks) Amphenol 31-5239-52RFX         |
| J9                                                                                           |     1 | -                                                                       |
| JU20, JVCO, VCC_BB, VCC_CP, VCC_DIG, VCC_LNA, VCC_LOGIC, VCC_MXR, VCC_REF, VCC_TCXO, VCC_VCO |    11 | Open                                                                    |
| LD                                                                                           |     1 | -                                                                       |
| LNA_IN, LNA_OUT, LO_TEST, MXR_IN, REF_IN                                                     |     5 | SMA end launch jack receptacles 0.031in Johnson Components 142-0701-881 |
| U1                                                                                           |     1 | MAX2391EGI WCDMA receiver                                               |
| U2                                                                                           |     1 | Open RF balun (not installed)                                           |
| U3, U4                                                                                       |     2 | MAX4444 low-distortion, differential-to-single-ended line drivers       |
| U9                                                                                           |     1 | MAX8867EUK28 linear regulator                                           |
| Y1                                                                                           |     1 | 19.2MHz voltage-controlled TCXO (19.2MHz) Kinseki VC-TCXO-208C3-19.2    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

## Component List-MAX2396

| DESIGNATION                                                                               |   QTY | DESCRIPTION                                                             |
|-------------------------------------------------------------------------------------------|-------|-------------------------------------------------------------------------|
| R12, R15                                                                                  |     2 | 50 Ω resistors (0402)                                                   |
| R13, R14                                                                                  |     2 | 2.0pF capacitors (0402)                                                 |
| R19, R25                                                                                  |     2 | 1k Ω resistors (0402)                                                   |
| R23                                                                                       |     1 | 330 Ω resistor (0402)                                                   |
| RBIAS                                                                                     |     1 | 12k Ω ± 1% resistor (0402)                                              |
| AGC, TCXO                                                                                 |     2 | 10k Ω variable resistors                                                |
| BG, CSB, I+, I-, LOCK, Q+, Q-, TAGC, TUNE                                                 |     9 | Digi-Key 5000K-ND                                                       |
| FL1                                                                                       |     1 | 2140MHz saw filter (2140MHz) Murata SAFSD2G14FA0T00R00                  |
| GND, GND2,GND3, JU37, JU38, VCC_EXT, VCC_IC                                               |     7 | -                                                                       |
| G_LNA, G_MXR, SHDNB                                                                       |     3 | Open                                                                    |
| I, Q                                                                                      |     2 | BNC (50 Ω ) PC board receptacles (jacks) Amphenol 31-5239-52RFX         |
| J9                                                                                        |     1 | -                                                                       |
| JU20, JVCO, VCC_BB,VCC_CP, VCC_DIG,VCC_LNA, VCC_LOGIC, VCC_MXR, VCC_REF, VCC_TCXO,VCC_VCO |    11 | Open                                                                    |
| LD                                                                                        |     1 | -                                                                       |
| LNA_IN, LNA_OUT, LO_TEST, MXR_IN, REF_IN                                                  |     5 | SMA end launch jack receptacles 0.031in Johnson Components 142-0701-881 |
| U1                                                                                        |     1 | MAX2396EGI WCDMA receiver                                               |
| U2                                                                                        |     1 | Open broadband RF balun (not installed) TDK HHM1537                     |
| U3, U4                                                                                    |     2 | MAX4444 low-distortion, differential-to-single-ended line drivers       |
| U5                                                                                        |     1 | Frac-N sigma delta synthesizer MAX2150EGI                               |
| U9                                                                                        |     1 | MAX8867EUK28 linear regulator                                           |
| Y1                                                                                        |     1 | 15.36MHz voltage-controlled TCXO (19.2MHz) Kinseki VC-TCXO-208C3-15.36  |

| DESIGNATION                                                       |   QTY | DESCRIPTION                                                                   |
|-------------------------------------------------------------------|-------|-------------------------------------------------------------------------------|
| C1, C7, C14, C16, C17, C24, C41, C50, C51, C55, C56, C57, C59,C60 |    14 | 100pF capacitors (0402) Murata GRP1555C1H101J                                 |
| C2, C32                                                           |     2 | 10nF capacitors (0402) Murata GRP155R71C103K                                  |
| C3, C22                                                           |     2 | 1000pF capacitors (0402) Murata GRP155R71H102K                                |
| C4, C5                                                            |     2 | 0 Ω resistors (0402)                                                          |
| C6, C27, C28, C33-C38, C40, C42, C44, C45, C48, C54, C58          |    16 | 100nF capacitors (0402) Murata GRP155R61A104K                                 |
| C10-C13, C15, C23, C29, C30,C31                                   |     9 | Not installed                                                                 |
| C26                                                               |     1 | 1µF capacitor (0603) Taiyo Yuden JMK107BJ105MA-B                              |
| C39, C43, C46, C47                                                |     4 | 10µF tantalum capacitors (2012) (R-code/case 0805-compatible) AVX TAJR106K006 |
| C49                                                               |     1 | 47nF capacitor (0402) Murata GRP155R71A473K                                   |
| C52                                                               |     1 | 4.7nF capacitor (0402) Murata GRP155R71H472K                                  |
| C53                                                               |     1 | 39pF capacitor (0402) Murata GRP1555C1H390J                                   |
| C89                                                               |     1 | 0.1µF capacitor (0805) Murata GRM21BR71E104K                                  |
| C90                                                               |     1 | 1.0µF capacitor (1206) Murata GRM31MR71C105MA01L                              |
| C101                                                              |     1 | 0.01µF capacitor (0805) Murata GRM216R71H103K                                 |
| L1                                                                |     1 | 3.3nH inductor (0402) Coilcraft 0402CS_3N3X                                   |
| L2                                                                |     1 | Open inductor (0402) (not                                                     |
| L4                                                                |     1 | 1.8nH inductor (0402) TOKO LL1005-FH1N8S                                      |
| L5                                                                |     1 | 1.3pF capacitor (0402) Murata GRP1555C1H1R3B                                  |
| R2, R10, R11, R16, R17                                            |     5 | 0 Ω resistors (0402)                                                          |
| R7, R22                                                           |     2 | Open resistors (0402) (not installed)                                         |
| R8                                                                |     1 | 100 Ω resistor (0402)                                                         |
| R9, R18                                                           |     2 | 10k Ω resistors (0402)                                                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

## Component List-MAX2390

| DESIGNATION                                                                                       |   QTY | DESCRIPTION                                                                            |
|---------------------------------------------------------------------------------------------------|-------|----------------------------------------------------------------------------------------|
| R1, R2, R3, R10, R11, R16, R17, R25                                                               |     8 | 0 Ω ± 5% 0402 resistors                                                                |
| R4, R7                                                                                            |     2 | Open 0402 resistors                                                                    |
| R8                                                                                                |     1 | 100 Ω ± 5% 0402 resistor                                                               |
| R9, R18                                                                                           |     2 | 10k Ω ± 5% 0402 resistors                                                              |
| R12, R15                                                                                          |     2 | 49.9 Ω ± 1% 0402 resistors                                                             |
| R19                                                                                               |     1 | 1k Ω ± 5% 0402 resistor                                                                |
| R22                                                                                               |     1 | 100k Ω ± 5% 0402 resistor                                                              |
| R23                                                                                               |     1 | 6.8k Ω ± 5% 0402 resistor                                                              |
| RBIAS                                                                                             |     1 | 12.1k Ω ± 1% 0402 resistor                                                             |
| AGC, TCXO                                                                                         |     2 | 10k Ω variable resistors Bourns 3296W-103-ND                                           |
| EN , BG, CSB, LD/IDLEB, LOCK, Q-, TAGC, TUNE, I+, I-,Q+                                           |    11 | Test points Keystone 5000                                                              |
| FL1                                                                                               |     1 | Filter Infineon NWR190                                                                 |
| G_LNA, G_MXR, SHDNB                                                                               |     3 | Do not install 4-pin headers Sullins PTC36SAAN                                         |
| I, Q                                                                                              |     2 | BNC connectors Amphenol 31-5329-52RFX                                                  |
| J9                                                                                                |     1 | 2 x 10 header, dual in-line header, 100-mil center Sullins PTC36DAAN                   |
| JIDLEB                                                                                            |     1 | 1 x 3 header, 3-pin in-line header, 100-mil center Sullins PTC36SAAN                   |
| JIDLEB                                                                                            |     1 | Shunt, shorting jumper Sullins STC02SYAN                                               |
| JU20, JVCO, LD, VCC_BB, VCC_DIG, VCC_LNA, VCC_LOGIC, VCC_MXR, VCC_PLL, VCC_REF, VCC_TCXO, VCC_VCO |    12 | Do not install 1 x 2 headers, 2-pin in-line headers, 100-mil centers Sullins PTC36SAAN |
| JU37, JU38, GND, GND2, GND3, VCC_EXT, VCC_IC                                                      |     7 | 1 x 2 headers, 2-pin in-line headers, 100-mil centers Sullins PTC36SDAAN               |

| DESIGNATION                                                                 |   QTY | DESCRIPTION                                           |
|-----------------------------------------------------------------------------|-------|-------------------------------------------------------|
| C1, C4, C5, C13, C23, C24, C26, C29, C30, C31, C41, C42, C50, C51, C53- C60 |    22 | Open, leave site open 0402 capacitors                 |
| C2, C32                                                                     |     2 | 0.01µF ± 10% 0402 capacitors Murata GRM155R71C103K    |
| C3, C9, C22                                                                 |     3 | 1000pF ± 10% 0402 capacitors Murata GRM155R71H102K    |
| C6, C8, C27, C28, C33-C38, C40, C44, C45, C48                               |    14 | 0.1µF ± 10% 0402 capacitors Murata GRM155R61A104K     |
| C7, C12, C14-C17                                                            |     6 | 100pF ± 5% 0402 capacitors Murata GRM1555C1H101J      |
| C18                                                                         |     1 | 10pF ± 0.1pF 0402 capacitor Murata GRM1555C1H100B     |
| C39, C43, C46, C47                                                          |     4 | 10µF ± 10% tantalum capacitors R-case AVX TAJR106K006 |
| C49                                                                         |     1 | 2200pF ± 10% 0402 capacitor Murata GRM155R71H222K     |
| C52                                                                         |     1 | 220pF ± 5% 0402 capacitor Murata GRM1555C1H221J       |
| C89                                                                         |     1 | 0.1µF ± 10% 0805 capacitor Murata GRM21BR71E104K      |
| C90                                                                         |     1 | 1.0µF ± 10% 1206 capacitor Murata GRM31MR7C105K       |
| C97, C99                                                                    |     2 | 2.0pF ± 0.1pF 0402 capacitors Murata GRM1555C1H2R0B   |
| C98                                                                         |     1 | 1.6pF ± 0.1pF 0402 capacitor Murata GRM1555C1H1R6B    |
| C101                                                                        |     1 | 0.01µF ± 10% 0805 capacitor Murata GRM216R71H103K     |
| L1                                                                          |     1 | 10nH ± 5% 0402 inductor Murata LQG15HN10NJ00          |
| L2                                                                          |     1 | Open 0402 inductor leave site open Coilcraft          |
| L4                                                                          |     1 | 2.7nH ± 0.3nH 0402 inductor TOKO LL1005-FH2N7S        |

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

## Component List-MAX2390 (continued)

| DESIGNATION                                     |   QTY | DESCRIPTION                                                    |
|-------------------------------------------------|-------|----------------------------------------------------------------|
| LNA_IN, LNA_OUT, MXR_IN, REF_IN, LO_OUT/LO_TEST |     5 | SMA edge-mount connectors, round contacts Johnson 142-0701-801 |
| U1                                              |     1 | Maxim MAX2390EGI                                               |
| U2                                              |     1 | Balun TDK HHM1516                                              |
| U3, U4                                          |     2 | Maxim MAX4444ESE                                               |

| DESIGNATION                                                            |   QTY | DESCRIPTION                                           |
|------------------------------------------------------------------------|-------|-------------------------------------------------------|
| C1, C4, C8, C9, C13, C18, C23, C29, C31                                |     9 | Open Leave site open 0402 capacitors                  |
| C2, C32                                                                |     2 | 0.01µF ± 10% 0402 capacitors Murata GRM155R71C103K    |
| C3, C22                                                                |     2 | 1000pF ± 10% 0402 capacitors Murata GRM155R71H102K    |
| C5, C7, C12, C14-C17, C24, C30, C41, C50, C51, C55, C56, C57, C59, C60 |    17 | 100pF ± 5% 0402 capacitors Murata GRM1555C1H101J      |
| C6, C27, C28, C33-C38, C40, C42, C44, C45, C48, C54, C58               |    16 | 0.1µF ± 10% 0402 capacitors Murata GRM155R61A104K     |
| C26                                                                    |     1 | 1.0µF ± 10% 0603 capacitor Murata GRM188R60J105K      |
| C39, C43, C46, C47                                                     |     4 | 10µF ± 10% tantalum capacitors R-case AVX TAJR106K006 |
| C49                                                                    |     1 | 0.047µF ± 10% 0402 capacitor Murata GRM155R71A473K    |
| C52                                                                    |     1 | 4700pF ± 10% 0402 capacitor Murata GRM155R71H472K     |
| C53                                                                    |     1 | 39pF ± 5% 0402 capacitor Murata GRM1555C1H390J        |
| C89                                                                    |     1 | 0.1µF ± 10% 0805 capacitor Murata GRM21BR71E104K      |
| C90                                                                    |     1 | 1.0µF ± 10% 1206 capacitor Murata GRM31MR7C105K       |
| C97, C99                                                               |     2 | 2.0pF ± 0.1pF 0402 capacitors Murata GRM1555C1H2R0B   |

| DESIGNATION   |   QTY | DESCRIPTION                                |
|---------------|-------|--------------------------------------------|
| U5            |     1 | Do not install Maxim MAX2150ETI            |
| U9            |     1 | Maxim MAX8867EUK28                         |
| Y1            |     1 | 19.2MHz crystal Kenseki VC-TCXO-208C5-19P2 |
| None          |     1 | MAX2390/MAX2400 EV kit PC board, rev 2     |

## Component List-MAX2400

| DESIGNATION                                           |   QTY | DESCRIPTION                                        |
|-------------------------------------------------------|-------|----------------------------------------------------|
| C98                                                   |     1 | 1.6pF ± 0.1pF 0402 capacitor Murata GRM1555C1H1R6B |
| C101                                                  |     1 | 0.01µF ± 10% 0805 capacitor Murata GRM216R71H103K  |
| L1                                                    |     1 | 10nH ± 5% 0402 inductor Murata LQG15HN10NJ00       |
| L2                                                    |     1 | Open 0402 inductor leave site open Coilcraft       |
| L4                                                    |     1 | 2.7nH ± 0.3nH 0402 inductor TOKO LL1005-FH2N7S     |
| R1, R3, R7, R22                                       |     4 | Open 0402 resistors                                |
| R2, R4, R10, R11, R16, R17                            |     6 | 0 Ω ± 5% 0402 resistors                            |
| R8                                                    |     1 | 100 Ω ± 5% 0402 resistor                           |
| R9, R18                                               |     2 | 10k Ω ± 5% 0402 resistors                          |
| R12, R15                                              |     2 | 49.9 Ω ± 1% 0402 resistors                         |
| R19, R25                                              |     2 | 1k Ω ± 5% 0402 resistors                           |
| R23                                                   |     1 | 330 Ω ± 5% 0402 resistor                           |
| RBIAS                                                 |     1 | 12.1k Ω ± 1% 0402 resistor                         |
| AGC, TCXO                                             |     2 | 10k Ω variable resistors Bourns 3296W-103-ND       |
| EN , BG, CSB, LD/IDLEB, LOCK,Q-, TAGC, TUNE,I+, I-,Q+ |    11 | Test points Keystone 5000                          |
| FL1                                                   |     1 | Filter Infineon NWR190                             |
| G_LNA, G_MXR, SHDNB                                   |     3 | Do not install 4-pin headers Sullins PTC36SAAN     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

## Component List-MAX2400 (continued)

| DESIGNATION                                                                                   |   QTY | DESCRIPTION                                                                            |
|-----------------------------------------------------------------------------------------------|-------|----------------------------------------------------------------------------------------|
| I, Q                                                                                          |     2 | BNC connectors Amphenol 31-5329-52RFX                                                  |
| J9                                                                                            |     1 | 2 x 10 header, dual in-line header, 100-mil center Sullins PTC36DAAN                   |
| JIDLEB                                                                                        |     1 | 1 x 3 header, 3-pin in-line header, 100-mil center Sullins PTC36SAAN                   |
| JIDLEB                                                                                        |     1 | Shunt, shorting jumper Sullins STC02SYAN                                               |
| JU20,JVCO, LD, VCC_BB,VCC_DIG, VCC_LNA, VCC_LOGIC, VCC_MXR,VCC_PLL, VCC_REF,VCC_TCXO, VCC_VCO |    12 | Do not install 1 x 2 headers, 2-pin in-line headers, 100-mil centers Sullins PTC36SAAN |

| DESIGNATION                                     |   QTY | DESCRIPTION                                                              |
|-------------------------------------------------|-------|--------------------------------------------------------------------------|
| JU37, JU38, GND, GND2, GND3, VCC_EXT, VCC_IC    |     7 | 1 x 2 headers, 2-pin in-line headers, 100-mil centers Sullins PTC36SDAAN |
| LNA_IN, LNA_OUT, MXR_IN, REF_IN, LO_OUT/LO_TEST |     5 | SMA edge-mount connectors, round contacts Johnson 142-0701-801           |
| U1                                              |     1 | Maxim MAX2400EGI                                                         |
| U2                                              |     1 | Balun TDK HHM1516                                                        |
| U3, U4                                          |     2 | Maxim MAX4444ESE                                                         |
| U5                                              |     1 | Maxim MAX2150ETI                                                         |
| U9                                              |     1 | Maxim MAX8867EUK28                                                       |
| Y1                                              |     1 | 15.36MHz crystal Kinseki VC-TCXO-208C5-15.36                             |
| None                                            |     1 | MAX2390/MAX2400 EV kit PC board, rev 2                                   |

## Component Suppliers

| SUPPLIER      | PHONE         | WEBSITE                   |
|---------------|---------------|---------------------------|
| Amhenol       | 203-265-8900  | www.amphenolrf.com        |
| Coilcraft     | 800-322-2645  | www.coilcraft.com         |
| Digi-Key      | 800-344-4539  | www.digikey.com           |
| Johnson       | 507-833-8822  | www.johnsoncomponents.com |
| KSS Kinseki   | (see website) | www.kinseki.co.jp/eng     |
| Mini-Circuits | 718-934-4500  | www.minicircuits.com      |
| Murata        | 770-436-1300  | www.murata.com            |
| Taiyo Yuden   | 800-322-2496  | www.t-yuden.com           |
| TDK           | 847-803-6100  | www.component.tdk.com     |
| TOKO          | (see website) | www.toko.com              |

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Note: When contacting these suppliers, please indicate you are using the MAX2390-MAX2393/MAX2396/MAX2400.

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

## Quick Start-MAX2391/ MAX2392/MAX2393

The MAX2391/MAX2392/MAX2393 EV kits are fully assembled and factory tested. Follow the instructions in  the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists  the  recommended test equipment to verify  the  operation  of  the  MAX2391/MAX2392/ MAX2393 EV kits. It is intended as a guide only, and some substitutions are possible.

- DC supply capable of delivering 200mA continuous current at +5.0V
- DC supply capable of delivering 200mA continuous current at -5.0V
- DC supply capable of delivering 50mA continuous current at +2.8V
- HP 34401 or equivalent DMM, to measure IC supply current
- HP 8648C or equivalent signal source capable of generating -30dBm up to 2.2GHz
- HP 8561E or equivalent RF spectrum analyzer (baseband spectrum only)
- TDS 3012 or equivalent digitizing oscilloscope
- Windows® 95/98/2000 PC with an available parallel port

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kits.

This procedure is specific to the MAX2391 in the UMTS band (reverse channel: 2110MHz to 2170MHz). Adapt the procedure for the MAX2392 or MAX2393 by changing the RF frequency of the test tone to suit the band of interest. The test tone at a 180kHz offset works well for all three parts.

- 1) Install  the  MAX2391/MAX2392/MAX2393 control software on the PC. This software uses a 3rd-party DLL to allow communication through the parallel port: 'DriverLINX' by Scientific Software Tools (www.sstnet.com). The Maxim installer installs this DLL automatically.
- 2) Connect the interface board and cable from the PC parallel port to the EV kit header. Pin 1 on the ribbon cable is indicated with a stripe, and pin 1 on the header is nearest to the corner of the board. The interface board is just populated with logic

Windows is a registered trademark of Microsoft.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- buffers to protect the parallel port against accidental shorts, but be careful with these connections.
- 3) Calibrate the power meter, with the low-power head, at 2140MHz. A rough interpolation of the cal factor does not introduce noticeable error, if reading the cal factor from a table.
- 4) Set the signal generator for a 2140.18MHz CW (demodulated) output at -27dBm, and connect a 3dB pad to the DUT side of the SMA cable. Use the power meter to set the input power to the DUT at  -30dBm. Use measured attenuators and/or the signal generator's internal step attenuators (-40dB) to reduce the signal to -90dBm.
- 5) Connect the RF source's SMA cable and attenuators to the EV kit's LNA IN SMA input.
- 6) Connect the BNC cable from either I or Q to the spectrum analyzer. Connect the other output into the oscilloscope-be sure to set the oscilloscope's inputs to 50 Ω , and not 1M Ω . Cable loss at 180kHz is negligible; as long as cables are about the same length, no calibration is required at the output to observe proper signal level as well as proper I/Q gain-and-phase balance.
- 7) Set one of the DC supplies to 2.8V and set a current limit of 100mA (if available). Connect this supply  through the ammeter to VCC\_IC, and readjust the supply if necessary to get 2.8V at the IC when powered up. This supply connection only powers the IC on the EV kit-read the ammeter to watch IC supply current for the receiver. Connect another line  directly  from  the  2.8V  supply  to  VCC\_EXT  to supply the external logic on the kit. Not having the voltage drop of the ammeter inline means the voltage is slightly higher than VCC\_IC, but this does not cause a problem.
- 8) Set the other supplies for ±5.0V with a current limit of  about 100mA. Connect these supplies to the +5V, GND, and -5V on the opposite side of the kit. These are the bipolar supplies for the MAX4444 differential  line  drivers  that  buffer  the  I/Q  outputs. Note that all GND test points are connected to the same ground plane-it is only necessary to use one of them.
- 9) Set the spectrum analyzer to span from DC (minimum sweep) to 2MHz. Set the reference level to +10dBm.
- 10) Set the oscilloscope for a sweep rate of about 1µs/div, DC-coupling, with an amplitude scale of about 100mV/div.

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

## Testing the W-CDMA Receiver

The power-up default state of the MAX2391 receiver is for:

- LO midband (2140MHz)
- LNA high gain
- Mixer high gain, normal linearity
- Powered on (out of shutdown)
- 1) Verify that the IC itself is drawing about 32mA (from VCC\_IC). The two MAX4444 differential line drivers at  the  baseband outputs should draw about 80mA from each of their supplies.
- 2) Use the AGC adjust potentiometer on the board to set VAGC at +2.2V (maximum gain).
- 3) Spot-check the VCO tuning voltage (TUNE) to see that  the  synthesizer  is  locked.  The  voltage  should be about midsupply with the RF LO running at its power-up default of 2140MHz. Disconnect any leads from this before continuing, as the noise pickup onto the tuning line directly frequency-modulates the VCO, and degrades LO phase noise.
- 4) Observe the 180kHz tone on the spectrum analyzer. Adjust AGC to achieve a -3.5dBm output level.
- 5) The on-board TCXO has a fine-tuning control-the other potentiometer on the EV kit allows for external temperature compensation of the TCXO to further decrease frequency error. Adjust the TCXO potentiometer if desired to bring the output tone exactly to 180kHz.
- 6) Observe the other output on the oscilloscope. At these input power levels, the SNR is typically much too low to see the output tone through the noise. If available, use the internal lowpass filter option (often 20MHz) and lots of averaging.
- 7) To make a gain/phase error measurement, connect both outputs to the scope. Increase the input power to  about  -50dBm, and back off the AGC until the outputs are swinging about 0.42VP-P. Again, use digital averaging to get both I and Q sinusoids visible on the scope. If automated measurements for phase and amplitude are not available, use the cursors to make the measurement. Calculate phase error in degrees and gain error in decibels, and verify  that  the  results  are  better  than  2  degrees  and 0.6dB, respectively.

## Quick Start-MAX2396

The MAX2396 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists  the  recommended test equipment to verify the operation of the MAX2396 EV kit. It is intended as a guide only, and substitutions are possible:

- DC supply capable of delivering 200mA continuous current at +5.0V
- DC supply capable of delivering 200mA continuous current at -5.0V
- DC supply capable of delivering 50mA continuous current at +2.8V
- DMM, to measure IC supply current
- HP 8648C or equivalent signal source capable of generating -30dBm up to 2.2GHz
- HP 8561E or equivalent RF spectrum analyzer
- TDS 3012 or equivalent digitizing oscilloscope
- Windows 95/98/2000 PC with an available parallel port

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit:

- 1) Install the MAX2396 control software on a PC. This software uses a 3rd-party DLL to allow communication  through the parallel port: 'DriverLINX' by Scientific  Software Tools (www.sstnet.com). The Maxim installer installs this DLL automatically.
- 2) Connect the interface board and cable from the PC parallel port to the EV kit header. Pin 1 on the ribbon cable is indicated with a stripe, and pin 1 on the header is nearest to the corner of the board. The interface board is just populated with logic buffers to protect the parallel port against accidental shorts, but be careful with these connections.
- 3) Calibrate the power meter, with the low-power head, at 2140MHz. A rough interpolation of the cal factor does not introduce noticeable error if reading the cal factor from a table.
- 4) Set the signal generator for a 2140.18MHz CW (demodulated) output at -27dBm, and connect a 3dB pad to the DUT side of the SMA cable. Use the power meter to set the input power to the DUT at -30dBm. Use measured attenuators and/or the signal generator's internal step attenuators (-40dB) to reduce the signal to -90dBm.
- 5) Connect the RF source's SMA cable and attenuators to the EV kit's LNA IN SMA input.
- 6) Connect the BNC cable from either I or Q to the spectrum analyzer. Connect the other output into the oscilloscope-be sure to set the oscilloscope's inputs to 50 Ω , and not 1M Ω . Cable loss at 180kHz

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

is negligible; as long as cables are about the same length, no calibration is required at the output to observe proper signal level, as well as proper I/Q gain-and-phase balance.

- 7) Set one of the DC supplies to 2.8V and set a current limit of 100mA (if available). Connect this supply  through the ammeter to VCC\_IC, and readjust the supply, if necessary, to get 2.8V at the IC when powered up. This supply connection only powers the IC on the EV kit-read the ammeter to watch IC supply current for the receiver. Connect another line  directly  from  the  2.8V  supply  to  VCC\_EXT  to supply the external logic on the kit. Not having the voltage drop of the ammeter in line means the voltage is slightly higher than VCC\_IC, but this does not cause a problem.
- 8) Set the other supplies for ±5.0V with a current limit of  about 100mA. Connect these supplies to the +5V, GND, and -5V on the opposite side of the kit. These are the bipolar supplies for the MAX4444 differential  line  drivers  that  buffer  the  I/Q  outputs. Note that all GND test points are connected to the same ground plane-it is only necessary to use one of them.
- 9) Set the spectrum analyzer to span from DC (minimum sweep) to 2MHz. Set the reference level to +10dBm.
- 10) Set the oscilloscope for a sweep rate of about 1µs/div, DC-coupling, with an amplitude scale of about 100mV/div.

## Testing the WCDMA Receiver

The power-up default state of the MAX2396 receiver is for:

- LNA high gain
- Mixer high gain, normal linearity
- Powered on (out of shutdown)
- 1) Verify that the IC itself is drawing about 31mA (from VCC\_IC). The two MAX4444 differential line drivers at the baseband outputs should draw about 80mA from each of their supplies.
- 2) Use the AGC adjust potentiometer on the board to set VAGC at +2.2V (maximum gain).
- 3) Spot-check the VCO tuning voltage (TUNE) to see that the synthesizer on the MAX2150 is locked. The voltage should be about midsupply with the RFLO running at its power-up default of 2140MHz. Disconnect any leads from this before continuing, as the noise pickup onto the tuning line directly frequency modulates the VCO, and degrades LO phase noise.
- 4) Observe the 180kHz tone on the spectrum analyzer. Adjust AGC to achieve a -3.5dBm output level.
- 5) The on-board TCXO has a fine-tuning control-the other potentiometer on the EV kit allows for external temperature compensation of the TCXO to further decrease frequency error. Adjust the TCXO potentiometer if desired to bring the output tone exactly to 180kHz.
- 6) Observe the other output on the oscilloscope. At these input power levels, the SNR is typically much too low to see the output tone through the noise. If available, use the internal lowpass filter option (often 20MHz) and lots of averaging.
- 7) To make a gain/phase error measurement, connect both outputs to the scope. Increase the input power to  about  -50dBm, and back off the AGC until the outputs are swinging about 0.42VP-P. Again, use digital averaging to get both I and Q sinusoids visible  on  the  scope.  If  automated  measurements for phase and amplitude are not available, use the cursors to make the measurement. Calculate phase error in degrees and gain error in decibels, and verify  that  the  results  are  better  than  2  degrees  and 0.6dB, respectively.

<!-- image -->

## Quick Start-MAX2390/ MAX2400

The MAX2390/MAX2400 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists the recommended test equipment to verify the operation of the MAX2390/MAX2400 EV kit. It is intended as a guide only, and substitutions are possible:

- DC supply capable of delivering 200mA continuous current at +5.0V
- DC supply capable of delivering 200mA continuous current at -5.0V
- DC supply capable of delivering 50mA continuous current at +2.8V
- DMM, to measure IC supply current
- HP 8648C or equivalent signal source capable of generating -30dBm up to 2.0GHz
- HP 8561E or equivalent RF spectrum analyzer
- TDS 3012 or equivalent digitizing oscilloscope
- Windows 95/98/2000 PC with an available parallel port

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit:

- 1) Install the MAX2391/MAX2392/MAX2393 and MAX2396 control software on a PC for MAX2390 and MAX2400, respectively. This software uses a 3rd-party DLL to allow communication through the parallel  port:  'DriverLINX' by Scientific Software Tools (www.sstnet.com). The Maxim installer installs this DLL automatically.
- 2) Connect the interface board and cable from the PC parallel port to the EV kit header. Pin 1 on the ribbon cable is indicated with a stripe, and pin 1 on the header is nearest to the corner of the board. The interface board is populated with logic buffers to  protect the parallel port against accidental shorts, but be careful with these connections.
- 3) Calibrate the power meter, with the low-power head, at 1960MHz. A rough interpolation of the cal factor does not introduce noticeable error if reading the cal factor from a table.
- 4) Set the signal generator for a 1960.18MHz CW (demodulated) output at -27dBm, and connect a 3dB pad to the DUT side of the SMA cable. Use the power meter to set the input power to the DUT at -30dBm. Use measured attenuators and/or the signal generator's internal step attenuators (-40dB) to reduce the signal to -90dBm.
- 5) Connect the RF source's SMA cable and attenuators to the EV kit's LNA IN SMA input.
- 6) Connect the BNC cable from either I or Q to the spectrum analyzer. Connect the other output into
7. the oscilloscope-be sure to set the oscilloscope's inputs to 50 Ω , and not 1M Ω . Cable loss at 180kHz is negligible; as long as cables are about the same length, no calibration is required at the output to observe proper signal level, as well as proper I/Q gain-and-phase balance.
- 7) Set one of the DC supplies to 2.8V and set a current limit of 100mA (if available). Connect this supply  through the ammeter to VCC\_IC, and readjust the supply, if necessary, to get 2.8V at the IC when powered up. This supply connection only powers the IC on the EV kit. Read the ammeter to watch IC supply current for the receiver. Connect another line  directly  from  the  2.8V  supply  to  VCC\_EXT  to supply the external logic on the kit. Not having the voltage drop of the ammeter in line means the voltage is slightly higher than VCC\_IC, but this does not cause a problem.
- 8) Set the other supplies for ±5.0V with a current limit of  about 100mA. Connect these supplies to the +5V, GND, and -5V on the opposite side of the kit. These are the bipolar supplies for the MAX4444 differential  line  drivers  that  buffer  the  I/Q  outputs. Note that all GND test points are connected to the same ground plane-it is only necessary to use one of them.
- 9) Set the spectrum analyzer to span from DC (minimum sweep) to 2MHz. Set the reference level to +10dBm.
- 10) Set the oscilloscope for a sweep rate of about 1µs/div, DC-coupling, with an amplitude scale of about 100mV/div.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

## Testing the WCDMA Receiver

The power-up default state of the MAX2390/MAX2400 receivers is for:

- LO midband, 1960MHz (MAX2390 only)
- LNA high gain
- Mixer high gain, normal linearity
- Powered on (out of shutdown)

The MAX2390 uses the control s/w for the MAX2391/ MAX2392/MAX2393. Keep in mind that the s/w has different default states for the PLL counters than the IC's own power-up state. This means that the LO frequency needs to be programmed after the s/w is launched to be sure that the MAX2390 is tuned to 1960MHz.

Likewise, the MAX2400 uses the control s/w for the MAX2396. Again, the s/w assumes the same power-up defaults as the MAX2396, which are slightly different than the MAX2400. Be sure to go to the MAX2150 tab to program the synthesizer to 1960MHz.

- 1) Verify that the IC itself is drawing about 31mA (from VCC\_IC). The two MAX4444 differential line drivers at the baseband outputs should draw about 80mA from each of their supplies.
- 2) Use the AGC adjust potentiometer on the board to set VAGC at +2.2V (maximum gain).
- 3) Spot-check the VCO tuning voltage (TUNE) to see that  the  synthesizer  (internal  for  the  MAX2390,  the MAX2400 uses the synthesizer on the MAX2150). The voltage should be about midsupply with the

<!-- image -->

RFLO running at center-of-band at 1960MHz. Reprogram the synthesizer registers if required. Disconnect any leads from this before continuing, as the noise pickup onto the tuning line directly frequency modulates the VCO, and degrades LO phase noise.

- 4) Observe the 180kHz tone on the spectrum analyzer. Adjust AGC to achieve a -3.5dBm output level.
- 5) The on-board TCXO has a fine-tuning control-the other potentiometer on the EV kit allows for external temperature compensation of the TCXO to further decrease frequency error. Adjust the TCXO potentiometer, if desired, to bring the output tone exactly to 180kHz.
- 6) Observe the other output on the oscilloscope. At these input power levels, the SNR is typically much too low to see the output tone through the noise. If available, use the internal lowpass filter option (often 20MHz) and lots of averaging.
- 7) To make a gain/phase error measurement, connect both outputs to the scope. Increase the input power to  about  -50dBm, and back off the AGC until the outputs are swinging about 0.42VP-P. Again, use digital averaging to get both I and Q sinusoids visible on the scope. If automated measurements for phase and amplitude are not available, use the cursors to make the measurement. Calculate phase error in degrees and gain error in decibels, and verify  that  the  results  are  better  than  2  degrees  and 0.6dB, respectively.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 1a. MAX2391 EV Kit Schematic-Main Circuit (Sheet 1 of 4)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 1b. MAX2392 EV Kit Schematic-Main Circuit (Sheet 2 of 4)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 1c. MAX2393 EV Kit Schematic-Main Circuit (Sheet 3 of 4)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

<!-- image -->

Figure 1d. MAX2391/MAX2392/MAX2393 EV Kit Schematic-Differential Line Driver and Supplies (Sheet 4 of 4)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 2a. MAX2396 EV Kit Schematic-Main Circuit (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

<!-- image -->

Figure 2b. MAX2396 EV Kit Schematic-Differential Line Drivers and Supplies (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 2c. MAX2396 EV Kit Schematic-MAX2150 Synthesizer (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 3a. MAX2390 EV Kit Schematic-Main Circuit (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 3b. MAX2390 EV Kit Schematic-Differential Line Drivers and Supplies (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

<!-- image -->

Figure 3c. MAX2390 EV Kit Schematic-MAX2150 Synthesizer, Unused (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 3d. MAX2400 EV Kit Schematic-Main Circuit (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

<!-- image -->

Figure 3e. MAX2400 EV Kit Schematic-Differential Line Drivers and Supplies (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 3f. MAX2400 EV Kit Schematic-MAX2150 Synthesizer (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

PC Board Artwork-MAX2391/MAX2392/MAX2393

<!-- image -->

Figure 4a. MAX2391/MAX2392/MAX2393 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 4b. MAX2391/MAX2392/MAX2393 EV Kit Metal Layer 2-Top Solder Mask

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

<!-- image -->

Figure 4c. MAX2391/MAX2392/MAX2393 EV Kit PC Board Layout Metal Layer 2-Top Layer Metal

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 4d. MAX2391/MAX2392/MAX2393 EV Kit PC Board Layout-Metal Layer 2 (Ground)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

<!-- image -->

Figure 4e. MAX2391/MAX2392/MAX2393 EV Kit PC Board Layout-Metal Layer 3 (Routes)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 4f. MAX2391/MAX2392/MAX2393 EV Kit PC Board Layout-Bottom Layer Metal

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

<!-- image -->

Figure 4g. MAX2391/MAX2392/MAX2393 EV Kit PC Board Layout-Bottom Solder Mask

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 4h. MAX2391/MAX2392/MAX2393 EV Kit PC Board Layout-Bottom Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

## PC Board Artwork-MAX2396

<!-- image -->

Figure 5a. MAX2391/MAX2392/MAX2393 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 5b. MAX2391/MAX2392/MAX2393 EV Kit PC Board Layout Metal Layer 2-Top Layer Metal

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

<!-- image -->

Figure 5c. MAX2391/MAX2392/MAX2393 EV Kit PC Board Layout-Metal Layer 2 (Ground)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 5d. MAX2391/MAX2392/MAX2393 EV Kit PC Board Layout-Metal Layer 3 (Routes)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

<!-- image -->

Figure 5e. MAX2391/MAX2392/MAX2393 EV Kit PC Board Layout-Bottom Layer Metal

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 5f. MAX2391/MAX2392/MAX2393 EV Kit PC Board Layout-Bottom Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

PC Board Artwork-MAX2390/MAX2400

<!-- image -->

Figure 6a. MAX2390/MAX2400 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 6b. MAX2390/MAX2400 EV Kit PC Board Layout Metal Layer 2-Top Layer Metal

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

<!-- image -->

Figure 6c. MAX2390/MAX2400 EV Kit PC Board Layout-Metal Layer 2 (Ground)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 6d. MAX2390/MAX2400 EV Kit PC Board Layout-Metal Layer 3 (Routes)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

<!-- image -->

Figure 6e. MAX2390/MAX2400 EV Kit PC Board Layout-Bottom Layer Metal

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2390/MAX2400, MAX2391/MAX2392/ MAX2393, and MAX2396 Evaluation Kits

Figure 6f. MAX2390/MAX2400 EV Kit PC Board Layout-Bottom Silkscreen

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

44

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600