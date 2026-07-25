<!-- lastmod 2022-08-04 -->
## MAX7030 Evaluation Kit

## General Description

The MAX7030 evaluation kit (EV kit) allows for a detailed evaluation  of  the  MAX7030 ASK  transceiver.  It  enables testing  of  the  device's  RF  performance  and  requires no  additional  support  circuitry.  The  RF  input  circuit  is designed to work with a 50Ω source impedance RF signal generator or a 50Ω input impedance spectrum analyzer and has an SMA connector for convenient connection to test equipment. The EV kit can also directly interface to the user's embedded design for easy data decoding.

The MAX7030 EV kit comes  in  two  versions:  a  315MHz version and a 433.92MHz version. The passive components are  optimized  for  these  frequencies.  The  MAX7030  IC itself  is  available  in  three  frequencies:  315MHz,  345MHz, and  433.92MHz.  The  EV  kit  board  components  can easily be changed to work at RF frequencies from 300MHz to 450MHz.

For  easy  implementation  into  the  customer's  design, the  MAX7030  EV  kit  also  features  a  proven  Printed Circuit Board (PCB) layout, which can be easily duplicated for  quicker  time-to-market.  The  PCB  gerber  files  are available for download at www.maximintegrated.com

## Features

- Proven PC Board Layout
- Proven Components Parts List
- Multiple Test Points Provided on Board
- Available in 315MHz or 433.92MHz Optimized Versions
- Modification Instructions for 345 MHz Available
- Fully Assembled and Tested
- Can Operate as a Stand-Alone Receiver with a UserProvided Connector and Antenna

Ordering Information appears at end of data sheet.

Evaluates: MAX7030

## Quick Start

## Required Equipment

- MAX7030 EV kit board
- Regulated power supply
- RF signal generator capable of delivering from -120dBm to 0dBm of output power at the operating frequency (Agilent E4420B or equivalent)
- A means to ASK modulate the RF Generator (may be built-in)
- Optional ammeter for measuring supply current
- Dual-trace oscilloscope
- RF Power Meter (Agilent 436A or equivalent) or spectrum analyzer

## Connections and Setup

The MAX7030 EV kit board is fully assembled and tested. Follow the steps below to verify board operation:

- 1) The default power supply range for the instructions that follow is 2.1 to 3.6V. Refer to the Detailed Description of Hardware section for 5V operation.
- 2) Jumper JU14 can be open or shorted. It is normally used for other Maxim ICs to get DC power through a multipin connector. This multipin connector is not placed on the MAX7030 evaluation board. Short Jumper JU15 and connect a supply to the VDD and GND test points. Connect pins 1-2 on jumpers JU1, JU3, JU9, and JU10 on the MAX7030 EV kit board for 2.1-3.6V operation.
- 3) Connect pins 1-2 on jumper JU7 to keep the ENABLE pin high.
- 4) Connect pins 2-3 on jumper JU6 to set the T/R pin to Receive.
- 5) Connect pins 2-3 on jumper JU5 for conventional data slicing operation (no peak detector outputs)
- 6) Remove the jumper from JU8 to allow the DATA pin to float.
- 7) Connect Pins 1-2 on Jumper JU11. Connect Pins 2-3 on jumpers JU12 and JU13 or leave them open (the pins on the MAX7030 are normally pulled low). These jumpers set the AGC release time to be compatible with the data rate used for this evaluation board.

<!-- image -->

## MAX7030 Evaluation Kit

## Receiver Operation

- 1) Connect the RF signal generator to the RFIN SMA connector.  Set the power level out of the generator at -100 dBm with no modulation. Connect an oscilloscope probe to test point TP10, which shows the input to the Data Slicer comparator. The DC voltage should be about 0.5 to 0.6V. This voltage will vary from about 0.5 to 1.5V as the input RF power is increased from no power to about -55dBm, then drop abruptly and increase again as the input RF power is increased. The abrupt drop occurs at the point where the automatic gain control (AGC) of the MAX7030 automatically turns on.

## ASK Modulation

- 1) Return the RF power level to -100 dBm and set up ASK modulation on the RF signal generator.
- 2) Use a 4kHz, 50% duty cycle square wave to simulate 4kbps Manchester coded data.
- 3) Set the oscilloscope to AC coupling and set the vertical scale to about 100mV/division. The scope should show a lowpass-filtered square wave (or sine wave, depending on the data filter cutoff frequency) whose amplitude increases with increasing RF power.
- 4) If the RF power is turned off, the scope trace should show a noise voltage with a peak-to-peak value of about 40mV.
- 5) To estimate the sensitivity of the receiver, reduce the RF power to a level where the square wave amplitude on the scope is about 1.5 to 2 times the noise voltage.
- 6) This power level should be somewhere between -111 dBm and -114dBm if the generator reads the peak power level.
- 7) Move the scope probe to test point TP8 (DATA), change the coupling on the scope back to DC, and set the vertical scale to 1V or 2V/division. You should see a 4kHz square wave going from ground to VDD.
- 8) As you increase the RF power, this square wave will be cleaner.
- 9) Another way to estimate sensitivity from this test point is to reduce the RF power until the square wave becomes extremely asymmetric (duty cycle not 50%) and contains short data transitions ('glitches') in the middle of a data interval.
- 10)  This power level should be somewhere between -111 dBm and -114dBm, similar to the level seen in the previous step.

## Image Rejection

- 1) Keep the scope probe on test point TP8. Change the frequency of the signal generator to 21.4MHz below the normal carrier frequency. This is the image frequency for a super heterodyne receiver with a 10.7MHz IF using low-side injection.
- 2) For 315MHz operation, the image frequency is 293.6MHz. For 433.92MHz operation, the image frequency is 412.52MHz
- 3) Increase the power level of the signal generator until you see a clean square wave form on the scope. Determine the 'sensitivity' power level in the same manner as above for ASK sensitivity.
- 4) Subtract the power level at sensitivity from the power level measured at the image frequency to get the image rejection of the mixer.
- 5) For instance, if the sensitivity power level is -114dBm and the image 'sensitivity' power level is -64dBm, the image rejection is 50dB.

## Transmitter Operation

- 1) Disconnect the RFIN SMA connector from the RF Signal Generator and connect it to an RF Power Meter or Spectrum Analyzer.
- 2) Connect pins 1-2 on jumper JU6 to set the T/R pin to Transmit. If you are monitoring the DC current, you should see 3mA to 4mA of current being drawn by the crystal oscillator and PLL.
- 3) Connect pins 1-2 on the jumper JU8. This applies a steady logical 1 (VDD) to the ASK transmitter power amplifier, which causes it to transmit an unmodulated carrier.
- 4) Check the power reading on the RF power meter or spectrum analyzer. It should read about 10mW (+10dBm) for a supply voltage of 2.7V and about 14mW (+11.5dBm) for a supply voltage of 3.3V. If a data source or a function generator is available, you can ASK-modulate the carrier by removing the jumper from JU8 applying a data signal (0 to VDD) to TP8.

## Other Information

The  capacitors  in  the  Sallen-Key  data  filters  (C25  and C26) can be changed to set the corner frequency of the filter  if  data  rates  other  than  4kbps  are  used.  The AGC Release time should also be reset using jumpers JU11, JU12, and JU13. See the MAX7030 data sheet for more details.

│

Evaluates: MAX7030

## Detailed Description of Hardware

## Layout Issues

A properly designed PCB is essential for any RF/microwave circuit.  Keep  high-frequency  input  and  output  lines  as short as possible to minimize losses and radiation. At high frequencies, trace lengths that are on the order of λ/10 or longer can act as antennas.

Both parasitic inductance and capacitance are influential on circuit layouts and are best avoided by using short trace lengths.  Generally,  a  10-mil  wide  PCB  trace,  0.0625in above  a  ground  plane,  with  FR4  dielectric  has  about 19nH/in of inductance and about 1pF/in of capacitance. In the LNA output/mixer input tank circuit, the proximity to the MAX7030 IC has a strong influence on the effective component values.

To  reduce  the  parasitic  inductance,  use  a  solid  ground or  power  plane  below  the  signal  traces. Also,  use  lowinductance connections to ground on all GND pins, and place decoupling capacitors close to all VDD connections.

## Power Supply

The MAX7030 can operate from 3.3V or 5V supplies. For 5V operation,  open  jumper  JU15  and  connect  the  VDD terminal to 5V. For 3.3V operation, short jumper JU15 and connect the VDD terminal to 3.3V.

## IF Input/ Output

The 10.7MHz IF can be monitored with an oscilloscope or a spectrum analyzer.

To  monitor  the  IF  output  with  an  oscilloscope,  connect the scope probe to pin 3 of JU4. Increase the RF signal generator  power  to  about  -70dBm  and  set  the  scope amplitude to 20mV or 50mV per division. Decrease the time  per  division  on  the  horizontal  trace  to  100ns.  The scope trace will show the waveform at the output of the external ceramic IF filter.

To monitor the IF output on a spectrum analyzer, use the high  impedance  probe  attachment  from  the  spectrum analyzer if one is available and connect it to pin 3 of JU4.

There  is  a  MIXOUT  location  on  the  board  that  can  be populated with a board mounted SMA connector to monitor the IF output or to inject an IF signal into the IFIN+ pin. Remove the ceramic filter for such a measurement and install  R2  (270Ω)  and  C13  (0.01µF)  to  match  the  330Ω Mixer  output  with  the  50Ω  spectrum  analyzer.  Connect pins 1-2 of jumper JU4 to see the IF output on the spectrum analyzer. Connect pins 2-3 of jumper JU4 to inject an IF signal into the IFIN+ pin from an external source.

## REF\_IN External Frequency Input

For  applications  where  the  correct  frequency  crystal  is not  available,  it  is  possible  to  directly  inject  an  external frequency  through  the  REFIN  SMA  connector  (not provided).  Connect  the  SMA  to  a  function  generator and set the peak-to-peak voltage level from the function generator  between  200mV  and  600mV. The  addition  of C19 and C20 (use 0.01µF capacitors), plus the removal of C17 and C18, is necessary

## Test Points and I/O Connections

Additional test points and I/O connectors are provided to monitor  the  various  baseband  signals  and  for  external connections. See Table 2 and Table 3 for a description.

## MAX7030 Evaluation Kit

## Table 1. Jumper Function Table

| JUMPER   | STATE   | FUNCTION                                      |
|----------|---------|-----------------------------------------------|
| JU1      | 1-2*    | VDD3 toAVDD                                   |
| JU1      | 2-3     | AVDD to TP1                                   |
| JU2      | 1-2*    | PAVDD directly to PAOUT                       |
| JU2      | 2-3     | PAVDD to PAOUT through ROUT for pulse shaping |
| JU3      | 1-2*    | VDD3 to PAVDD                                 |
| JU3      | 2-3     | PAVDD to TP2                                  |
| JU4      | 1-2     | Mixer output to MIX_OUT SMA Connector         |
| JU4      | 2-3     | External IF input                             |
| JU4      | NC*     | Normal operation                              |
| JU5      | 1-2     | Use Peak Detector for faster receiver startup |
| JU5      | 2-3*    | No Peak Detector Operation                    |
| JU6      | 1-2     | Set device to Transmit                        |
| JU6      | 2-3     | Set device to Receive                         |
| JU6      | NC      | Set device to Receive                         |
| JU7      | 1-2*    | Device enabled                                |
| JU7      | 2-3     | Device asleep                                 |
| JU7      | NC      | Enable controlled by SPI                      |
| JU8      | 1-2     | Input data pulled high                        |
| JU8      | 2-3     | Input data pulled low                         |
| JU8      | NC      | Data in/out controlled by SPI                 |
| JU9      | 1-2*    | HVIN tied to VDD                              |
| JU9      | 2-3     | HVIN tied to TP4                              |
| JU10     | 1-2*    | DVDD tied to VDD3                             |
| JU10     | 2-3     | DVDD tied to TP3                              |
| JU11     | 1-2*    | AGC1 pulled high                              |
| JU11     | 2-3     | AGC1 pulled low                               |
| JU11     | NC      | AGC1 pulled low                               |
| JU12     | 1-2     | AGC0 pulled high                              |
| JU12     | 2-3     | AGC0 pulled low                               |
| JU12     | NC*     | AGC0 pulled low                               |
| JU13     | 1-2     | AGC2 pulled high                              |
| JU13     | 2-3     | AGC2 pulled low                               |
| JU13     | NC*     | AGC2 pulled low                               |
| JU14     | NC*     | Not Used                                      |
| JU15     | 1-2*    | Connect VDD to +3.3V supply                   |
| JU15     | NC      | Connect VDD to +5.0V supply                   |

Evaluates: MAX7030

## Table 2. Test Points

|   TP | DESCRIPTION   |
|------|---------------|
|    1 | AVDD          |
|    2 | PAVDD         |
|    3 | DVDD          |
|    4 | HVIN          |
|    5 | CLKOUT        |
|    6 | ENABLE        |
|    7 | T/ R          |
|    8 | DATA          |
|    9 | RSSI          |
|   10 | DS+           |
|   11 | DS-           |
|   12 | PAVDD/ESOUT   |

## Table 3. I/O Connectors

| SIGNAL   | DESCRIPTION                        |
|----------|------------------------------------|
| RFIN     | RF input/output                    |
| REF_IN   | External reference frequency input |
| MIXOUT   | IF input/output                    |
| GND      | Ground                             |
| VDD      | Supply input                       |

## Component Suppliers

| SUPPLIER   | WEBSITE                  |
|------------|--------------------------|
| Murata     | http://www.murata.com    |
| Crystek    | http://www.crystek.com   |
| Coilcraft  | http://www.coilcraft.com |

Note: Indicate that you are using MAX7030EVKIT when contacting these component suppliers.

## Ordering Information

| PART             | TEMP. RANGE       | IC PACKAGE   |
|------------------|-------------------|--------------|
| MAX7030EVKIT-315 | -40° C to +85°C   | 32-TQFN      |
| MAX7030EVKIT-433 | -40° C to +85 ° C | 32-TQFN      |

│

## MAX7030 Evaluation Kit

## MAX7030 EV Kit Bill of Materials

| PART                    |   QTY | DESCRIPTION                                                 |
|-------------------------|-------|-------------------------------------------------------------|
| C1, C21, C22, C27       |     4 | 0.01uF 10% 50V X7R CER CAP (0603) Murata: GRM188R71H103K    |
| C2                      |     1 | 0.1uF 10% 50V X7R Cer Cap (0603) Murata: GRM188R71C104K     |
| C3                      |     1 | 680pF 10% 50V CER CAP (0603) MURATAGRM1885C1H681K           |
| C4, C25, C28, C29       |     4 | 220pF 10% 50V CER CAP (0603) MURATAGRM1885C1H221K           |
| C5, C7, C8, C17, C18    |     5 | 100pF 5% 50V CER CAP (0603) MURATAGRM1885C1H101J            |
| C6 (315MHz)             |     1 | 2.7pF +-0.1pF 50V C0G CER CAP (0603) MURATA: GRM1885C1H2R7B |
| C6 (433MHz)             |     1 | 1.8pF +-0.1pF 50V C0G CER CAP (0603) MURATA: GRM1885C1H1R8B |
| C9                      |     1 | 1500pF 10% 50V X7R CER CAP (0603) Murata GRM188R71H152K     |
| C10, C11, C12           |     3 | 0.047uF 10% 50V X7R CER CAP (0603) Murata: GRM188R71H473K   |
| C13, C19, C20, C23, C24 |     0 | 0603 Capacitor NOT INSTALLED                                |
| C14 (315MHz)            |     1 | 12pF 5% 50V C0G CER CAP (0603) Murata: GRM1885C1H120J       |
| C14, C16 (433MHz)       |     2 | 6.8pF 5% 50V C0G CER CAP (0603) Murata: GRM1885C1H6R8J      |

Evaluates: MAX7030

| PART                |   QTY | DESCRIPTION                                             |
|---------------------|-------|---------------------------------------------------------|
| C15 (315MHz)        |     1 | 22pF 5% 50V C0G CER CAP (0603) Murata: GRM1885C1H220J   |
| C15 (433MHz)        |     1 | 10pF 5% 50V C0G CER CAP (0603) Murata: GRM1885C1H100J   |
| C16 (315MHz)        |     1 | 10pF 5% 50V C0G CER CAP (0603) Murata: GRM1885C1H100J   |
| C26                 |     1 | 470pF 5% 50V C0G CER CAP (0603) MURATAGRM1885C1H471JA01 |
| L1, L2 (315MHz)     |     2 | 30nH 5% (0603) Coilcraft: 0603CS-30NXJBC                |
| L1, L2, L5 (433MHz) |     3 | 22nH 5% (0603) Coilcraft: 0603CS-22NXJBC                |
| L3 (315MHz)         |     1 | 12nH 5% (0603) Coilcraft: 0603CS-12NXJBC                |
| L3 (433MHz)         |     1 | 10nH 5% (0603) Coilcraft: 0603CS-10NXJBC                |
| L4 (315MHz)         |     1 | 30nH 5% (0603) Murata: LQW18AN30NJ00                    |
| L4 (433MHz)         |     1 | 16nH 5% (0603) Murata: LQW18AN16NJ00                    |
| L5 (315MHz)         |     1 | 27nH 5% (0603) Coilcraft: 0603CS-27NXJBC                |
| L6 (315MHz)         |     1 | 100nH 5% (0603) Coilcraft: 0603CS-R10XJBC               |
| L6 (433MHz)         |     1 | 68nH 5% (0603) Coilcraft: 0603CS-R68XJBC                |
| R1                  |     1 | 5K POTENTIOMETER BC COMPONENTS: SM4W502                 |

│

## MAX7030 EV Kit Bill of Materials (continued)

| PART                                                                |   QTY | DESCRIPTION                                                    |
|---------------------------------------------------------------------|-------|----------------------------------------------------------------|
| R2, R6, R7                                                          |     0 | RESISTOR (0603) NOT INSTALLED                                  |
| R3, R4, R5                                                          |     3 | 100 KΩ RESISTOR 5% (0603) Any                                  |
| RF IN                                                               |     1 | SMACONNECTOR TOP-MOUNT DIGI-KEY: J500-ND JOHNSON: 142-0701-201 |
| MIXOUT                                                              |     0 | SMACONNECTOR TOP-MOUNT NOT INSTALLED                           |
| REFIN                                                               |     0 | SMACONNECTOR TOP-MOUNT Not Installed                           |
| JU1, JU2, JU3, JU4, JU5, JU6, JU7, JU8, JU9, JU10, JU11, JU12, JU13 |    13 | 3 PIN HEADER Digi-Key S1012-36-ND or Equivalent                |
| JU14, JU15                                                          |     2 | 2-PIN HEADER DIGIKEY: S1012-36-ND                              |
| J1                                                                  |     0 | 5 PIN HEADER Digi-Key S1012-36-ND or Equivalent Not Installed  |

| PART                                          |   QTY | DESCRIPTION                                                                                     |
|-----------------------------------------------|-------|-------------------------------------------------------------------------------------------------|
| J2                                            |     0 | 2X20 RIGHTANGLE RECEPTACLE SAMTEC SSW-120-02-S-D-RA Methode Electronics RS2R-40-G Not installed |
| See table for Jumper Settings                 |     9 | SHUNT Digi-Key S9000-ND or Equivalent Quantity does not match                                   |
| VDD, GND, TP5, TP6, TP7, TP9, TP10, TP11, TP8 |     9 | Test Point Mouser: 151-203 or Equivalent                                                        |
| TP1, TP2, TP3, TP4, TP12                      |     0 | Test Point Not installed                                                                        |
| Y1 (315MHz)                                   |     1 | Crystal 12.67917MHz Crystek 017299                                                              |
| Y1 (433MHz)                                   |     1 | Crystal 17.63417MHz Crystek 017301                                                              |
| Y2                                            |     1 | 10.7MHz CER FILTER Murata: SFTLA10M7FA00-B0                                                     |
| U1                                            |     1 | MAX7030LATJ TQFN-32                                                                             |
| U2                                            |     0 | MAX4729EXT SC70-6 Not Installed                                                                 |

│

Evaluates: MAX7030

## MAX7030 EV Kit Schematic

<!-- image -->

Evaluates: MAX7030

## MAX7030 EV Kit PCB Layout Diagrams

MAX7030 EV Kit Board Layout-Component Side

<!-- image -->

MAX7030 EV Kit Board Layout-Solder Side

<!-- image -->

MAX7030 EV Kit Board Layout-Component Placement

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX7030