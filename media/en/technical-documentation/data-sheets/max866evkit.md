<!-- lastmod 2022-08-02 -->
## General Description

TheMAx866evaluationkit(EVkit)isafullyassembled andtestedsurface-mountprintedcircuitboard.It can alsoevaluatetheadjustable-outputMAx867.

The MAX866/MAX867 are CMOS, step-up,DC-DC switchingregulatorsforsmall,lowinputvoltageorbattery-powered systems.TheMAx866accepts apositive inputvoltagebetweenO.8VandVouTandconvertsitto a higher, pin-selectable outputvoltage of 3.3V or5V. TheMAx867adjustableversionaccepts0.8Vto6V inputvoltagesandgeneratesahigher,adjustableoutput voltage in the 2.7V to 6Vrange.Typical full-load efficienciesfortheMAx866/MAx867aregreaterthan80%.

AmovablejumperontheEVkitselectseithera3.3Vor 5.0Voutputvoltage.Additionalpadson theboard's soldersideaccommodateresistorsfortheLBl/LBOlow batterydetectororMAx867outputadjustment.

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                                       |
|------------------|-------|-----------------------------------------------------------------------------------|
| C1               |     1 | 0.1uFceramic capacitor                                                            |
| C2, C3           |     2 | 47uF,16V,low-ESRtantalum capacitors; Sprague593D476X0016D2Wor AVXTPSD476M016R0150 |
| R1, R2, R3,R4,R5 |     0 | Open                                                                              |
| L1               |     1 | 330uH inductor; CoilCraftD01608-334                                               |
| D1               |     1 | 20V,500mASchottky diode; MotorolaMBR052OLTI                                       |
| U1               |     1 | MAX866CUA(8-pinμMAx)                                                              |
| J1,J2            |     2 | 3-pinheaders                                                                      |
| None             |     2 | Shunts                                                                            |
| None             |     1 | PCboard                                                                           |
| None             |     1 | MAX866datasheet                                                                   |

Tocontact Sprague,phone（603)224-1961or fax (603)224-1430.To contact MurataErie,phone(404)436-1300. RefertotheMAx866/MAx867datasheetforothercomponent suppliers'phonenumbers.

## M/IXYN/

<!-- image -->

Features

- Low 0.8V to 6V Input Supply Voltage
- 0.9VGuaranteedStart-UpSupplyVoltage
- 27uA Quiescent Current
- 1uA ShutdownMode
- Up to 250kHz Switching Frequency
- ±1.5%ReferenceTolerance
- Low-Battery Detector (LBI/LBO)
- UItra-Small 8-Pin μMAX Package (1.11mm High)
- Surface-MountConstruction
- FullyAssembled and Tested

## Ordering Information

| PART           | TEMP.RANGE   | BOARDTYPE    |
|----------------|--------------|--------------|
| MAX866EVKIT-MM | O°℃to+70℃    | SurfaceMount |

## Quick Start

TheMAx866EVkit isafullyassembled andtestedsurface-mountboard.Followthestepsbelowtoverify boardoperation.Donotturnon thepower supply until allconnectionsarecompleted.

- 1)Connect a 1.5V supply to the pad marked VIN.The ground connects to the GND pad.
- 2)Connect avoltmeter and load (if any)to theVOUT pad.
- 3)Place the shunt on J1 across pins1 and 2.
- 4)Place the shunt onJ2acrosspins1 and 2fora5V outputvoltage,oracrosspins2and3fora3.3Voutput (input voltage less than 3.6V).
- 5)Turnonthepowerandverifythat theoutputvoltageis 5V.
- 6)RefertothesectionEvaluating theMAx867tomodify theboardfordifferentoutputvoltages.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX866 Evaluation Kit

## Detailed Description

## InputSource

In normal operation,theinputsourcefor theMAx866 evaluationboardmustbegreater than0.9vforstart-up andlessthantheoutputvoltageplus0.3V.A typical input voltage rangewould be the1.2V to 1.8V range of a 1-cell NiCdbattery.An input voltagegreater than the selectedoutputvoltage(but lessthan7V)will not damage the circuit.However, theMAx866output willequal theinputvoltageminus theO.3Vdropof theSchottky diode,D1.

Theinput currentdependson thepower delivered to theload.Thefollowingequationsshowhowtocalculatetheexpectedinputcurrentrequirement.

Input Power= Output Power / Efficiency and

Input Current=InputPower/ InputVoltage

Tocalculatetheinputcurrentforatypicaloperatingcircuit,assume a 2V inputvoltage,a5Voutputvoltage， anda5mAload.Theexpectedefficiencycanbetaken fromthegraphsontheMAx866/MAx867datasheet. Undertheaboveconditions,theMAx866delivers85% efficiency.

Input Power = (5.0V x 5mA) / 85%

InputPower=29.41mW

and

InputCurrent=29.41mW/2.0V

Input Current=14.71mA

Oncestarted,theMAx866actuallyoperatesfromthe regulated outputvoltage.Thismeans that the input voltage can fallbelow the 0.9V minimum start-upvoltage.Typically,theregulated output will be maintained even if the inputvoltage drops to 0.5V.See the EfficiencyandStart-UpVoltagevs.LoadCurrent graphsintheTypical OperatingCharacteristicssection oftheMAx866/MAx867datasheet.

## Jumper Selection

Two3-pinheadersselect the shutdownmodeandoutput voltage. Table 1 lists the selectable jumper options.

## Table 1. Jumper Selection

| J1Shunt Location   | J2Shunt Location   | SHDN Pin Connection   | 3V/5V Pin Connection   | MAX866  ndno   |
|--------------------|--------------------|-----------------------|------------------------|----------------|
| 1&2                | 1&2                | VOUT                  | GND                    | 5.0V           |
| 1&2                | 2&3                | VOUT                  | VOUT                   | 3.3V           |
| 2&3                | 1&2                | GND                   | GND                    | VIN-0.3V       |
| 2&3                | 2&3                | GND                   | VOUT                   | VIN-0.3V       |

## Using theLow-BatteryIndicator

TheMAx866hasanadditionalcomparatorusefulfor monitoringtheinputsource'svoltagelevel.Resistor locationsR3andR4onthebottomof theprintedcircuit boardareconnectedasavoltagedividerbetweenthe LBIpadandtheMAx866LBlpin.Notethataprinted circuit board trace acrossR4 shorts the LBlpinto ground when this function is not used. Cut the trace beforeinstallingR4.RefertotheLow-BatteryDetection sectionoftheMAx866/MAx867datasheetforinstructions onselectingvaluesforresistorsR3 and R4.

Anotherlocationontheboardfacilitatestheadditionof a pullupresistor on the LBO output.LBO is an opendrainoutput thatcansink2mA.InstallresistorR5if an externalcircuitistobedrivenfromLBO.

<!-- image -->

## EvaluatingtheMAX867

TheMAx866EVkitcanalsoevaluatetheMAx867, whichgeneratesoutputvoltagesinthe2.7Vto6.0v rangeusingexternalresistors.Besidesreplacing the IC,theonlyothermodificationsrequiredaretoremove

## MAX866 Evaluation Kit

theshuntonJ2andtoaddtheoutputvoltage-divider resistorsR1andR2(locatedontheboard'ssolder side).TheOutputVoltageSelectionsectionofthe MAx866/MAx867data sheetgivesinstructionsforcalculating R1 and R2values.

<!-- image -->

Figure1.MAX866EVKit Schematic

<!-- image -->

WIXVW

## MAX866 Evaluation Kit

<!-- image -->

Figure2.MAx866EVKitComponentPlacementGuideComponentSide

<!-- image -->

Figure4.MAx866EVKitPCBoardLayout-ComponentSide

Figure3.MAX866EVKitComponentPlacementGuideSolderSide

<!-- image -->

Figure5.MAX866EVKitPCBoardLayout—SolderSide

<!-- image -->

MaximcannotassumeresponsibiityforuseofanycircuitryotherthancircuitryentirelyembodiedinaMaximproduct.Nocircuitpatentlicensesare implied.Maximreservestherighttochangethecircuitryandspecificationswithoutnoticeatanytime.

- 4 MaximIntegratedProducts,120SanGabrielDrive,Sunnyvale,CA94086(408)737-7600