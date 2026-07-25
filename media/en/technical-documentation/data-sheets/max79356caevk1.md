<!-- lastmod 2022-08-02 -->
## MAX79356 Evaluation Kit

## General Description

The MAX79356 evaluation kit (EV kit) demonstrates the functionality of the MAX79356 (ZENO™) flexible narrow -band OFDM powerline communication modem.

## Evaluation Kit Content

- Two MAX79356 evaluation boards
- Two USB/UART audio jack type cables
- Two 15V DC adapters
- Two power cords

## MAX79356 EV Kit Board

<!-- image -->

ZENO is a trademark of Maxim Integrated Products, Inc.

Evaluates: MAX79356

## Benefits and Features

- Ease of Use Through Preloaded Simple-MAC Firmware and ZENO Simple-Connect GUI for Quick PHY Testing
- Full-MAC G3 Firmware and G3 PLC Connect GUI with EAP-PSK Server Available for Download
- Single Evaluation Kit Supports All Frequency Bands: CENELEC-A, FCC, and ARIB

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX79356 Evaluation Kit

## Safety Notes

Warning: EXERCISE CAUTION WHEN LIVE AC VOLTAGES ARE PRESENT!

Standard ESD precautions must be taken when handling electronic equipment.

Exercise extreme caution handling the hardware and connecting test equipment to the non-isolated portion of the ZENO modem board (Figure 1, highlighted in red). Ignoring the safety requirements can lead to shock, injury, and damage of the hardware.

Figure 1. ZENO Board Modem

<!-- image -->

Evaluates: MAX79356

## MAX79356 Evaluation Kit

## Evaluation Kit Description

The MAX79356 EV kit contains all the hardware required for point-to-point communication, utilizing Simple-MAC or Full-MAC firmware. The communication between the two modem boards can be on a powered line (up to 230V AC or 300V DC ), or on cold wire.

Figure 2 illustrates the connection.

## Evaluation Board

The EV kit contains two identical MAX79356 evaluation boards featuring a narrow-band G3-PLC modem.

## Power Supply

Each  evaluation  board  is  powered  by  a  15V DC   power adapter connected to J1. A linear regulator (U2) provides the 3.3V DC  supply to the MAX79356 OFDM modem and the  MAX44211  line  driver  (DVDD).  The  15V DC directly powers the line driver analog supply (AVDD).

The  MAX79356  internal  linear  regulator  supplies  its internal 1.2V DC  digital logic from the 3.3V supply.

## MAX79356 Operations

ZENO features two hardware UARTs (UART0, UART1). UART0 is used by the host CPU for data communication, control of the modem, and firmware updates. UART1 is used for debugging purposes.

Figure 2. Connection Diagram

<!-- image -->

## Evaluates: MAX79356

## MAX79356 Evaluation Kit

ZENO communicates with the host processor through a serial line interface protocol (SLIP) over the UART0 inter -face.  The  ZENO  firmware  supports  operation  at  either 115,200bps  or  230,400bps  (depending  on  FW)  without flow control. Refer to the ZENO G3-PLC Modem Interface Specification  for  details  on  the  host  communications protocol.

An  SPI  interface  is  available  (master/slave)  in  ZENO. Refer  to  the  data  sheet  or  firmware  release  notes  for availability of firmware support for SPI.

## Firmware Update

The host processor can update the MAC and PHY firm -ware through UART0 using a specific serial loader pro -

## Table 1. Gain Inputs

|   GAIN1 (G1) |   GAIN0 (G0) |   GAIN (V/V) |
|--------------|--------------|--------------|
|            0 |            0 |            6 |
|            0 |            1 |           12 |
|            1 |            0 |           15 |
|            1 |            1 |           18 |

## Evaluates: MAX79356

tocol.  To  go  to  serial  loader  mode,  the  PROG  input  pin is  driven  low  and  held  low  while  the  reset  pin  RSTN  is pulsed low.

## Line Driver Gain Control

The MAX79356 controls the gain inputs of MAX44211 the line driver (GAIN0 and GAIN1), the gain can be set to 6, 12, 15 and 18 according to Table 1.

## Line Driver Status

The MAX79356 also acquires the status of the line driver, the status is also available at the test points TP15 (Status 0)  and  TP16  (Status  1).  Table  2  describes  the  status conditions.

## Table 2. Status Conditions

Figure 3. MAX79356 EV Kit Block Diagram

|   STATUS 1 |   STATUS 0 | CONDITION                       |
|------------|------------|---------------------------------|
|          0 |          0 | Overtemperature Shutdown Active |
|          0 |          1 | High Temperature Warning Active |
|          1 |          0 | Overcurrent Active              |
|          1 |          1 | Normal Operation                |

<!-- image -->

## MAX79356 Evaluation Kit

## MAX44211 Line Driver

The  evaluation  board  includes  the  MAX44211  power amplifier (line  driver)  that  drives  the  coupling  trans -former.  The  MAX44211  provides  two  digital  inputs  for the gain selection (GAIN0 and GAIN1) controlled by the MAX79356. The MAX44211 also provides two digital out -puts  signaling  the  status  of  the  driver  (temperature  and current alarms and shutdowns).

The  MAX44211  provides  an  input  (ISET)  for  setting  its maximum output current. In the evaluation board, resistor R22 is connected between this input, and GND provides the current-limit setting.

The  evaluation  board's  PCB  includes  a  copper  area for  thermal  dissipation. A  heatsink  can  be  added  at  the bottom  of  the  PCB  for  additional  power  dissipation.  A dual-side adhesive thermal strip secures the heatsink to the PCB. Figure 4 illustrates the location of the heatsink.

## Zero-Crossing Detection

The evaluation board includes a zero-crossing detection circuit. The circuit is isolated from the MAX79356 through an optocoupler (U6). The zero-crossing circuit generates the pulses on the rising edge of the zero crossing of the AC input sine wave.

## Coupling Circuit and Protections

The modem circuitry is coupled to the mains through the transformer (TX1) and the high-voltage coupling capaci -tor (C37). The transformer provides both signal coupling (Tx  and  Rx)  and  galvanic  isolation,  while  the  capacitor provides DC blocking and attenuation at low frequencies.

There are three main protections in the coupling circuit. The  line  driver  is  protected  by  four  Schottky  diodes. The  diodes  are  clamping  overvoltage  kickbacks  from the  TX1  transformer.  Diode  Z3  is  a  low-voltage  TVS placed  between  the  TX1  transformer  and  the  coupling capacitor. The main function of this diode is to clamp any overvoltage  resulting  from  high  dV/dt  on  the AC  mains (i.e., caused by interruptions of the AC mains). Diode Z2 is  a  high-voltage  TVS.  This  diode  mainly  protects  from high-voltage transients on the mains.

Note: While  diode  Z2  protects  the  input  circuitry  (zerocrossing  detection  and  coupling)  against  high-voltage transients, it does not guarantee the circuit to be protected as per IEC 61000-4-5 Standard. The fuse (F3) protects the input circuit against overcurrent that could result from erroneous wiring or operation errors.

Evaluates: MAX79356

Figure 4. Location of the Heatsink

<!-- image -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX79356CAEVK1# | EV kit |

#Denotes RoHS compliant.

## MAX79356 Evaluation Kit

## MAX79356 Bill of Materials

|   QTY | DESIGNATOR                             | DESCRIPTION                   | MANUFACTURER         | MANUFACTURER P/N      |
|-------|----------------------------------------|-------------------------------|----------------------|-----------------------|
|     1 | C1                                     | 330uF                         | Nichicon             | UVZ1H331MPD           |
|     1 | C2                                     | 1.0uF                         | Taiyo- Yuden         | TMK212B7105KG -T      |
|     4 | C4, C10, C29, C30                      | 10uF                          | Murata               | GRM21BC8YA106KE11L    |
|     1 | C5                                     | 4.7uF                         | TDK                  | GRM21BC8YA106KE11L    |
|     5 | C9, C13, C15, C17, C24                 | 1.0uF                         | Taiyo- Yuden         | TMK105BJ105MV - F     |
|     8 | C11, C12, C14, C16, C18, C25, C31, C32 | 100nF                         | Taiyo- Yuden         | GMK105BJ104KV - F     |
|     2 | C19, C20                               | 0.47uF                        | Murata               | GRM155R61A474KE15D    |
|     2 | C21, C22                               | 1nF                           | Murata               | GRM155R61A102KA01D    |
|     2 | C23, C26                               | 27pF                          | Panasonic            | ECJ - 0EC1H270J       |
|     2 | C27, C28                               | 220nF                         | Murata               | GRM155R71C224KA12D    |
|     1 | C36                                    | 1.5uF                         | Murata               | GRM43DR72A155KA01L    |
|     1 | C37                                    | 1uF                           | Panasonic            | ECW - FD2W105J4       |
|     1 | C40                                    | 0.68uF                        | TDK                  | CGA3E3X5R1H684M080AB  |
|     1 | D1                                     | 3SMC15A TR13                  | On Semi              | 3SMC15A TR13          |
|     2 | D2, D3                                 | LED, BLUE                     | Kingbright           | APT1608PBC/A          |
|     1 | D4                                     | LED, RED                      | Lite -On             | LTST - C190CKT        |
|     1 | D5                                     | LED, GREEN                    | Lite -On             | LTST - C190GKT        |
|     4 | D9, D12, D13, D14                      | MBR230S1F                     | Diodes Inc.          | MBR230S1F             |
|     2 | D15, D16                               | D1N4148                       | Fairchild            | 1N4148TR              |
|     4 | FB1, FB2, FB3, FB5                     | MMZ1608Y152B                  | TDK                  | MMZ1608Y152BTA00      |
|     1 | F1                                     | 1.5A                          | Littelfuse           | 045901.5UR            |
|     1 | F3                                     | Fuse                          | Littelfuse           | 2 of A32373- ND       |
|     3 | JU4, JU7, JU8                          | Audio Jack 3.5mm              | CUI                  | SJ -3523- SMT - TR    |
|     1 | J1                                     | COAXIAL, POWER, RA, CTR PIN + | CUI                  | PJ - 002AH - SMT - TR |
|     2 | J2, J3                                 | 6pin                          | Sullins              | PBC36SAAN             |
|     2 | J4, J5                                 | RA 10Pos                      | Molex                | 901220125             |
|     2 | J6, J7                                 | TP_KEYSTONE_5019              | Keystone             | 5019                  |
|     1 | P1                                     | LP Inlet IEC - 320            | Qualtek              | 770W - X2/10          |
|     1 | Q1                                     | BC849/INF                     | Micro- Commercial Co | BC849C - TP           |

Evaluates: MAX79356

## MAX79356 Evaluation Kit

## MAX79356 Bill of Materials (continued)

| QTY   | DESIGNATOR                                                                             | DESCRIPTION      | MANUFACTURER     | MANUFACTURER P/N    |
|-------|----------------------------------------------------------------------------------------|------------------|------------------|---------------------|
| 1     | R3                                                                                     | 2K               | Panasonic        | ERJ - 2RKF2001X     |
| 1     | R4                                                                                     | 220              | Rohm             | MCR01MRTF2200       |
| 4     | R6, R7, R24, R34                                                                       | 0 Ohm            | Vishay- Dale     | CRCW04020000Z0ED    |
| 2     | R8, R9                                                                                 | 1K               | Vishay- Dale     | CRCW04021K00FKED    |
| 1     | R10                                                                                    | 1M               | Vishay- Dale     | CRCW04021M00FKED    |
| 3     | R11, R12, R18                                                                          | 10K              | Vishay- Dale     | CRCW040210K0FKED    |
| 2     | R13, R14                                                                               | 82               | Vishay- Dale     | CRCW040282R0FKED    |
| 1     | R22                                                                                    | 29.4K            | Stackpole        | RC0603FR - 0729K4L  |
| 1     | R2 3                                                                                   | 20K              | Vishay- Dale     | CRCW040220K0FK      |
| 4     | R26, R28, R29, R32                                                                     | 68K              | Panasonic        | ERJ - 12ZYJ683U     |
| 1     | R30                                                                                    | 18.2K            | Vishay- Dale     | CRCW201018K2FKEFHP  |
| 1     | R31                                                                                    | 110              | Rohm             | LTR50UZPF1100       |
| 2     | SW1, SW2                                                                               | B3FS - 1000      | Omron            | B3FS - 1000P        |
| 6     | +12V, 3.3V, TP21, TP25, TP26, TP27                                                     | RED              | Keystone         | 5000                |
| 4     | AGND, DGND, LD_GND, TXEN                                                               | BLACK            | Keystone         | 5001                |
| 1 2   | RXN, RXP, RX_N, RX_P, OUT_N, OUT_P, DIO.16, LDIN_N, LDIN_P, STATUS0, STATUS1, ZC_PULSE | WHITE            | Keystone         | 5002                |
| 1     | TX1                                                                                    | 60PR970          | Vitec            | 60PR970             |
| 1     | U1                                                                                     | TCMT1107         | Vishay           | TCMT1107            |
| 1     | U2                                                                                     | MAX16910CASA8/V+ | Maxim Integrated | MAX16910CASA8/V+T   |
| 1     | U4                                                                                     | MAX79356         | Maxim Integrated | MAX79356ECM+T       |
| 1     | U5                                                                                     | MAX44211         | Maxim Integrated | MAX44211ETP+        |
| 1     | Y1                                                                                     | 16 MHz           | TXC              | 9B - 16.000MEEJ - B |
| 1     | Z2                                                                                     | SMCJ440CA        | Littelfuse       | SMCJ440CA           |
| 1     | Z3                                                                                     | 3SMC20CA         | Central          | 3SMC20CA TR13       |

Evaluates: MAX79356

## MAX79356 Schematics (1 of 6)

<!-- image -->

## MAX79356 Schematics (2 of 6)

<!-- image -->

## MAX79356 Schematics (3 of 6)

<!-- image -->

## MAX79356 Schematics (4 of 6)

<!-- image -->

## MAX79356 Schematics (5 of 6)

<!-- image -->

## MAX79356 Schematics (6 of 6)

<!-- image -->

## MAX79356 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

Evaluates: MAX79356