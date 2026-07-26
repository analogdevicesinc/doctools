<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX2511 Evaluation Kit (EV kit) simplifies testing of the MAX2511 low-power IF transceiver. The EV kit provides 50 Ω SMA connectors for all RF inputs and outputs. A varactor-tuned tank circuit is provided for the MAX2511 VCO, and it can be tuned by applying a control voltage to the EV kit.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER         | PHONE/ FAX                     | INTERNET                 |
|------------------|--------------------------------|--------------------------|
| Alpha Industries | (617) 935-5150/ (617) 933-0159 | http://www.alphaind.com  |
| AVX              | (803) 946-0690/ (803) 626-3123 | http://www.avxcorp.com   |
| Coilcraft        | (847) 639-6400/ (847) 639-1469 | http://www.coilcraft.com |
| Murata           | (814) 237-1431/ (814) 238-0490 | http://www.murata.com    |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' +2.7 to +5.5V Single-Supply Operation
- ' SMA Connectors for Signal Ports Compatible with 50 Ω Test Equipment
- ' Allows Individual and Cascade Evaluation of Circuit Blocks
- ' 10.7MHz Receive Filter Included
- ' On-Board Jumpers Allow Testing of Advanced System Power Management (four modes)
- ' Includes VCO Tank Circuit (435.7MHz nominal)
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE    | BOARD TYPE    |
|-----------------|----------------|---------------|
| MAX2511EVKIT-SO | -40°C to +85°C | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION                                         |   QTY | DESCRIPTION                                |
|-----------------------------------------------------|-------|--------------------------------------------|
| C1, C3                                              |     2 | 10nF ceramic capacitors                    |
| C2                                                  |     1 | 100pF ceramic capacitor                    |
| C4, C8, C10, C11, C13, C14, C15, C20, C22, C25, C26 |    10 | 47nF ceramic capacitors (C11 not supplied) |
| C5                                                  |     1 | 10pF ceramic capacitor                     |
| C6, C7                                              |     2 | 47pF ceramic capacitors                    |
| C9, C16, C17, C18, C19                              |     5 | 470pF capacitors                           |
| C12                                                 |     0 | 47nF ceramic capacitor (not installed)     |
| C21, C23                                            |     2 | 100nF ceramic capacitors                   |
| C24                                                 |     1 | 10µF tantalum capacitor AVX TAJC106K016    |
| C27, C28                                            |     0 | 47pF ceramic capacitors (not installed)    |
| D1                                                  |     1 | Dual varactor diode Alpha SMV1204-199      |

| DESIGNATION                                                 |   QTY | DESCRIPTION                                                    |
|-------------------------------------------------------------|-------|----------------------------------------------------------------|
| IF, IF , LIMIN, LIMOUT, LIMOUT , MIXOUT, OSCOUT, TXIN, TXIN |     8 | 50 Ω edge-mount SMA connectors ( TXIN connector not installed) |
| L1                                                          |     1 | 8.2nH inductor Coilcraft 0805CS-080XMBC                        |
| L2, L3                                                      |     2 | 220nH inductors Coilcraft 0805CS-221XMBC                       |
| LOP, LON                                                    |     0 | 50 Ω top-mount SMA connectors (not installed)                  |
| R1, R10                                                     |     2 | 270 Ω resistors                                                |
| R2, R4                                                      |     2 | 1k Ω resistors                                                 |
| R3                                                          |     1 | 10k Ω resistor                                                 |
| R5, R6                                                      |     2 | 953 Ω , 1% resistors                                           |
| R7, R8, R11, R13                                            |     4 | 51 Ω resistors                                                 |
| U1                                                          |     1 | MAX2511EEI (28 QSOP)                                           |
| JU5                                                         |     1 | 10.7MHz ceramic bandpass filter Murata SFE10.7MA5-A            |
| None                                                        |     2 | Shunts                                                         |
| None                                                        |     8 | 2-pin headers                                                  |
| None                                                        |     2 | 3-pin headers                                                  |

1

## MAX2511 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The following section provides instructions for operating the MAX2511 evaluation kit (EV kit) as an IF transceiver. The differential IF port (IF, IF )  is  a  bidirectional port configured for operation over a wide range of frequencies (200MHz to 440MHz). The high-side oscillator is  configured for nominal 435.7MHz operation, with approximately 100MHz total span. The TXIN, TXIN , LIMOUT, and LIMOUT ports  are  configured  for 10.7MHz operation.

## Test Equipment Required

This section lists the test equipment recommended for verifying operation of the MAX2511. It is intended only as a guide; some substitutions may be possible.

- One (optionally two) RF signal generator capable of delivering at least 0dBm of output power in the 10MHz to 500MHz frequency range (HP8656B, HP8648A, or equivalent). One generator is required to test the Rx and Tx signal paths; the other is used optionally  as  an  external  LO  source  if  the  on-chip oscillator is overdriven.
- An RF spectrum analyzer that can cover the transmitter's  output  frequency range, as well as a few harmonics (HP8560E, for example)
- A voltmeter for measuring the RSSI output voltage
- An oscilloscope for observing the limiter output signals
- A power supply that can provide at least 100mA at +2.7V to +5.5V
- Two voltage sources for providing the gain-control (GC) pin voltage and the oscillator frequency-adjust voltage (FADJ)
- Two 50 Ω SMA terminators
- Optional: An RF 180° hybrid combiner or balun (Anzac H-9 or equivalent). This is used for differential  coupling  into  the  IF  and IF connectors on the transceiver. If a hybrid is not available, these inputs and outputs can be evaluated in a single-ended configuration at a slight performance cost.

## Connections and Setup

This section provides step-by-step instructions for getting the EV kit up and running in both Tx and Rx modes.

## Tx Mode

Perform the following steps to evaluate the MAX2511 in Tx mode:

- 1) Make the DC connections: set the power supply to 3V with a 100mA current limit, and connect it to the

2

- VCC and GND terminals on the EV kit. Set one voltage source to 2V, and connect it to the gaincontrol terminal (labeled GC). Connect the other voltage source to the FADJ pin and set it to 1.75V.
- 2) Enable Tx mode by putting 3-pin jumper TXEN in the '1-2' position and jumper RXEN in the '2-3' position. This sets TXEN to VCC and RXEN to GND. The supply current should be about 40mA. (See Table 1.)
- 3) Connect the spectrum analyzer to OSCOUT. Set the analyzer to 435.7MHz center frequency with a 100MHz total span. Adjust the FADJ voltage source to center the LO frequency at or near 435.7MHz. The OSCOUT output power should be around -9dBm.
- 4) Remove the SMA cable from the OSCOUT port. Connect the spectrum analyzer to IF. Terminate the other output ( IF (J9))  with  a  50 Ω SMA terminator. Optionally, IF and IF can be combined using a 180° balun. With no TXIN signal applied, the LO leakage is the only transmitter signal observable.
- 5) Connect an RF generator to the TXIN input and set it to 10.7MHz at -16dBm of output power. The spectrum analyzer should show an image-rejected output spectrum with the desired signal at 425MHz, the suppressed LO at 435.7MHz, and the image at 446.4MHz. You may need to fine tune the FADJ voltage to keep the LO at the correct frequency. Because the Tx output is loaded by the Rx input (approximately 200 Ω differential), the single-ended Tx output power will be near -8.5dBm into the 50 Ω spectrum analyzer. If the Tx output were loaded with 100 Ω differential, this would correspond to -2dBm.
- 6) Test the GC function by slowly lowering the voltage on the GC pin from 2V to 0V. You will see at least a 40dB change in fundamental output power over this voltage range. Note the decreasing supply current draw with reduced output power due to the MAX2511's unique biasing scheme.
- 7) When the transmitter is set up properly, you may wish to test other features, such as shutdown mode (both TXEN and RXEN jumpers set to '2-3') (see Table 1). The image rejection of the MAX2511 over frequency can be checked by varying the TXIN and LO frequencies.

## Rx Mode

This section describes how to connect and use the MAX2511's receiver section.

- 1) Verify  that  DC  connections have been made, per step 1 in the Tx Mode section.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1.  Operating Modes

| MODE     | JUMPER SETTING   | JUMPER SETTING   |
|----------|------------------|------------------|
| MODE     | RXEN             | TXEN             |
| Shutdown | 2-3              | 2-3              |
| Transmit | 2-3              | 1-2              |
| Receive  | 1-2              | 2-3              |
| Standby  | 1-2              | 1-2              |

- 2) Switch the part into Rx mode by moving the RXEN jumper to the '1' position and the TXEN jumper to the '3' position (Table 1). Verify that the GC voltage is 2V.
- 3) Connect the spectrum analyzer to the OSCOUT pin,  and verify that LO is still at the correct frequency (435.7MHz). Adjust the FADJ pin voltage, if necessary. Set the RF generator to 425MHz at -30dBm. Connect the generator to the IF connector. Terminate the IF with a 50 Ω SMA terminator. Optionally, the RF generator's signal can be split using a 180° balun connected to IF and IF .  This connection is the same as the optional balun connection for Tx mode, but the balun is used in the reverse direction.
- 4) Connect an oscilloscope to the limiter output LIMOUT, and set its input impedance to 50 Ω .  The signal level observed on the oscilloscope should be around 28mVp-p, which corresponds to 550mVp-p at the device pin. Note that R5 and the 50 Ω oscilloscope load impedance form a 20:1 voltage divider. The limiter's output voltage range can be adjusted by varying the GC voltage.

Note: Ensure that the LO frequency is maintained at 435.7MHz to keep the IF output centered within the Rx 10.7MHz filter's passband.

- 5) Connect a voltmeter to the RSSI test pad in the upper-left  corner  of  the  EV  kit  to  monitor  the  RSSI output voltage. For -30 dBm of RXIN power, the RSSI voltage should be approximately 750mV. Lower the input power in 10dBm steps, observing the decrease in RSSI output voltage of about 100mV per 10dB change in input power. Increase RXIN power above -30dBm to verify compression performance. Return the power to -30dBm.
- 6) Observe that the signal at LIMOUT remains constant over the RXIN power range.

## System Power-Management Features

Besides the Tx/Rx modes previously mentioned, the MAX2511 supports two other operating modes: shutdown and standby. Bring both TXEN and RXEN jumpers to the '2-3' position (TXEN = RXEN = GND), putting the part in shutdown mode and reducing supply current to around 0.1µA.

<!-- image -->

To enter standby mode, bring both TXEN and RXEN jumpers to the '1-2' position, so that TXEN = RXEN = VCC. This reduces the supply current to about 9.5mA while leaving the oscillator and other circuitry active (for fast switching into either Rx or Tx mode).

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The following section covers the EV kit's circuit blocks in  detail  (see  the  MAX2511 data sheet for additional information).

## Tx Inputs

The TXIN and TXIN pins are differential inputs to the MAX2511's image-reject transmitter. The EV kit is shipped configured for single-ended operation at the TXIN connector. To convert to differential operation, populate C12 with a 47nF capacitor, and install an SMA connector. The input impedance of these pins is set by pull-up resistors R7 and R8. This input is typically a 10.7MHz signal at 100mVp-p.

## Tx Outputs

The MAX2511's Tx output pins (TXOUT and TXOUT ) are high-impedance open collectors; therefore, external inductors are used for proper biasing. DC-blocking capacitors are used to connect to these outputs. TXOUT and TXOUT are connected to the SMA connectors IF and IF. Consult the schematic diagram for more information. C18, C19, L2, and L3 act only to provide biasing and DC blocking; they do not set the output impedance. Refer to the MAX2511 data sheet for more information on designing a matching network for this port.

## Rx Input

The Rx input pins (RXIN and RXIN )  do  not  require external DC biasing. Capacitors C16 and C17 provide DC blocking. On the EV kit, they are connected in a shared configuration with the Tx outputs, at the IF and IF SMA connectors (see Figure 2 for more information).

## Rx Output and Limiter Input

The receive downconverter mixer's output appears at the MIXOUT pin-a current source that can drive a 165 Ω load to 2Vp-p. The MIXOUT pin is terminated with 330 Ω (R10 + R11) for proper match to the bandpass filter (ZO = 330 Ω ).  Therefore, the net load at MIXOUT is 330 Ω ‰‰ 330 Ω = 165 Ω .

The EV kit design allows separate testing of the Rx mixer and limiter sections of the MAX2511. Coupling capacitor C20 is used to connect the node between R10 and R11 to an external SMA connector. This

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2511 Evaluation Kit

network has some attenuation, but presents the correct impedance to the MIXOUT pin and provides a nearly 50 Ω output impedance for measurement. The voltage attenuation is 21.4dB.

The limiter input pin (LIMIN) requires a DC bias level set by the VREF pin. To present this bias level, resistors R10 + R11 and R1 + R13 and are connected to VREF and not to ground. To minimize noise, this voltage is bypassed with capacitor C21 to ground.

## Oscillator Tank

The oscillator tank shipped with the EV kit is configured for  operation at a 425MHz IF frequency, with a 10.7MHz second IF. This places the desired oscillator frequency at 435.7MHz. The oscillation frequency can be controlled over approximately a 100MHz range by adjusting the FADJ voltage from 0V to 3V. Do not apply voltages higher than 10V to the FADJ connector.

If  this  frequency  range  does  not  cover  your  target  IF frequency, it is fairly  simple  to  retune  the  oscillator  by adjusting capacitor C5 and inductor L1 (see the MAX2511 data sheet for more information on oscillator tank design).

## LO Overdrive

The MAX2511 EV kit can be operated from an external LO source with a few modifications (Figure 1). The following components must be removed entirely: R2, R4, C5, and D1. Add capacitors C27 and C28 (both 47pF SMT capacitors). Add J2 and J3 (top-mount SMA connectors). Replace C6 and C7 with 0 Ω shorts and L1 with a 100 Ω resistor. These modifications allow a differential LO source to be AC coupled into the TANK and TANK pins. The circuit can then be driven from a differential  LO  source at LO and LO with  a  power  level  of -3dBm per side (0dBm total). The external signal source used can be split into LO and LO with an additional 180° balun of the same type as mentioned in the Test Equipment Required section. For optimum LO suppression and image rejection, a differential LO source is recommended if overdriving LO.

## Layout Issues

A good PC board is an essential part of an RF circuit design. The EV kit PC board can serve as a guide for laying out a board using the MAX2511.

Remove the ground plane directly under LO tank components, IF port coupling components, and limiter outputs (Figure 5).

## Rx Inputs and Tx Outputs

The RXIN and RXIN input coupling network should be symmetrical to provide the best input balance if used as a differential input. The TXOUT and TXOUT biasing networks should also be symmetrical to present an equivalent load on each pin.

Figure 1.  LO Overdrive Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  MAX2511 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2511 Evaluation Kit

## Power-Supply Decoupling

Each VCC node on a PC board should have its own 47nF decoupling capacitor. This minimizes supply coupling from one section of the MAX2511 to another. A star topology for the supply layout, in which each VCC node on the MAX2511 circuit has a separate connection  to  a  central  VCC node, can further minimize coupling between sections of the MAX2511.

Figure 3.  MAX2511 EV Kit PC Board Layout-Top Silkscreen and Pad Placement

<!-- image -->

Figure 4.  MAX2511EV Kit PC Board Layout-Component Side (layer 1)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 5.  MAX2511 EV Kit PC Board Layout-Ground Plane (layer 2)

<!-- image -->

<!-- image -->

Figure 6.  MAX2511 EV Kit PC Board Layout-Power-Supply Routing (layer 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2511 Evaluation Kit

Figure 7.  MAX2511 EV Kit PC Board Layout-Bottom (Solder Side) (layer 4)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8